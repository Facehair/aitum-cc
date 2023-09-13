import { ICCActionInputs, ICustomCode } from "aitum.js/lib/interfaces";
import {
  BooleanInput,
  FloatInput,
  IntInput,
  StringInput,
} from "aitum.js/lib/inputs";
import { AitumCC, AitumJS } from "aitum.js";
import { DeviceType } from "aitum.js/lib/enums";
//@ts-ignore untyped garbage - had to npm install nod-fetch@2 to avoid weird TS errors
import fetch from "node-fetch";

/*********** CONFIG ***********/
// The custom code action name
const name: string = "Chat Switchboard";

// The custom code inputs
const inputs: ICCActionInputs = {
  chatMessage: new StringInput("Chat message", { required: true }),
  chatterUsername: new StringInput("Chatter username", { required: true }),
  isMod: new BooleanInput("Is Mod?", {
    required: true,
  }),
};

// helper function for finding the ids of rules to trigger
const findRuleIdByName = (
  allRules: { name: string; id: string }[],
  ruleName: string
) => {
  const rule = allRules.filter((rule) => rule.name === ruleName)[0];
  return rule ? rule.id.toString() : "";
};

// The code executed.
async function method(inputs: {
  chatMessage: string;
  chatterUsername: string;
  isMod: boolean;
}) {
  // ------------- BOILERPLATE DON'T TOUCH ----------------------
  const lib = AitumCC.get().getAitumJS();
  const aitumDevice = (await lib.getDevices(DeviceType.AITUM))[0];
  // await lib.sleep(250);
  // ------------------------------------------------------------

  const rules = await lib.aitum.getRules();
  const { chatMessage, chatterUsername, isMod } = inputs;
  const messageKey = chatMessage.split(" ")[0];
  const messageArg = chatMessage.split(" ")[1];

  switch (messageKey) {
    case "!deathhhhhh":
      if (!messageArg) {
        const ruleId = findRuleIdByName(rules, "deathMessage");
        aitumDevice.triggerRule(ruleId);
      } else if (isMod) {
        // mod only death related actions
        if (messageArg === "+") {
          const ruleId = findRuleIdByName(rules, "deathAdd");
          aitumDevice.triggerRule(ruleId);
        }
        if (messageArg === "-") {
          const ruleId = findRuleIdByName(rules, "deathRemove");
          aitumDevice.triggerRule(ruleId);
        }
      }
    case "!so":
      if (isMod) {
        const shoutTarget = messageArg;
        const prevGame = await fetch(
          `https://decapi.me/twitch/game/${shoutTarget}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        //.then((resp: string) => resp);

        console.log("game", prevGame);

        const ruleId = findRuleIdByName(rules, "shoutout");
        aitumDevice.triggerRule(ruleId);
      }
    default:
      return;
  }

  // await aitumDevice.stopAllSounds();
}

/*********** DON'T EDIT BELOW ***********/
export default { name, inputs, method } as ICustomCode;
