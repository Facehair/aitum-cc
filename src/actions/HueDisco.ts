import { ICCActionInputs, ICustomCode } from "aitum.js/lib/interfaces";
import { AitumCC } from "aitum.js";
import { DeviceType } from "aitum.js/lib/enums";
//@ts-ignore untyped garbage - had to npm install nod-fetch@2 to avoid weird TS errors
import fetch from "node-fetch";
import { IntInput } from "aitum.js/lib/inputs";
import {
  HueTheme,
  multiStateThemes,
  singleStateThemes,
} from "../types/HueTypes";

const relevantSingleStateThemes: { [key: string]: HueTheme } = Object.keys(
  singleStateThemes
)
  .filter((key) => key !== "white")
  .reduce(
    (accumulator, currentKey) => ({
      ...accumulator,
      [currentKey]: singleStateThemes[currentKey],
    }),
    {}
  );

/*********** CONFIG ***********/
// The custom code action name
const name: string = "Hue Disco";

// The custom code inputs
const inputs: ICCActionInputs = {
  time: new IntInput("Overall Time (ms)", { required: true }),
  speed: new IntInput("Light Change Speed (ms)", { required: true }),
};

// The code executed.
async function method(inputs: { time: number; speed: number }) {
  const { time, speed } = inputs;
  const lib = AitumCC.get().getAitumJS();

  const aitumDevice = (await lib.getDevices(DeviceType.AITUM))[0];

  const lightIds = ["35", "34", "29", "31"];
  let intervalId: any;
  let prevThemeIdx: number = 0;

  const getRandoIdx = (prevIdx: number): number => {
    const maxRando = Object.keys(relevantSingleStateThemes).length;
    const nextIdx = Math.floor(Math.random() * maxRando);
    return nextIdx !== prevIdx ? nextIdx : getRandoIdx(prevIdx);
  };

  const delayTimer = () => {
    intervalId = setTimeout(clearInterval, time);
  };

  const clearInterval = () => {
    clearTimeout(intervalId);
  };

  const intervalLightChange = () => {
    intervalId = setInterval(changeLights, speed ? speed : 960);
  };

  const changeLights = () => {
    const themeIdx = getRandoIdx(prevThemeIdx);
    prevThemeIdx = themeIdx;
    const themeKey = Object.keys(relevantSingleStateThemes)[themeIdx];
    const themeState = relevantSingleStateThemes[themeKey];
    console.log("state:", themeKey);
    fetch(
      `http://${process.env.HUE_IP}/api/${process.env.HUE_USERNAME}/groups/3/action`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(themeState),
      }
    );
  };

  delayTimer();
  changeLights(); // run immediately the first time
  intervalLightChange();
}

/*********** DON'T EDIT BELOW ***********/
export default { name, inputs, method } as ICustomCode;
