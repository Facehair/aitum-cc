import { ICCActionInputs, ICustomCode } from "aitum.js/lib/interfaces";
import { AitumCC } from "aitum.js";
import { DeviceType } from "aitum.js/lib/enums";
import axios from "axios";
import { StringInput } from "aitum.js/lib/inputs";

/*********** CONFIG ***********/
// The custom code action name
const name: string = "Discord Go Live?";

// The custom code inputs
const inputs: ICCActionInputs = {
  currentGame: new StringInput("Current Game", { required: false }),
  streamTitle: new StringInput("Stream Title", { required: false }),
  footerText: new StringInput("Footer text", { required: false }),
  footerImage: new StringInput("Footer image url", { required: false }),
};

// The code executed.
async function method(inputs: {
  [key: string]: number | string | boolean | string[];
}) {
  const { currentGame, streamTitle, footerText, footerImage } = inputs;
  const lib = AitumCC.get().getAitumJS();

  const aitumDevice = (await lib.getDevices(DeviceType.AITUM))[0];

  // await lib.sleep(250);

  console.log("Posting Go Live Message");
  //   username: "Webhook",
  //   avatar_url: "https://i.imgur.com/4M34hi2.png",
  //   content: "Text message. Up to 2000 characters.",
  //   embeds: [
  //     {
  //       author: {
  //         name: "Birdie♫",
  //         url: "https://www.reddit.com/r/cats/",
  //         icon_url: "https://i.imgur.com/R66g1Pe.jpg",
  //       },
  //       title: "Title",
  //       url: "https://google.com/",
  //       description:
  //         "Text message. You can use Markdown here. *Italic* **bold** __underline__ ~~strikeout~~ [hyperlink](https://google.com) `code`",
  //       color: 15258703,
  //       fields: [
  //         {
  //           name: "Text",
  //           value: "More text",
  //           inline: true,
  //         },
  //         {
  //           name: "Even more text",
  //           value: "Yup",
  //           inline: true,
  //         },
  //         {
  //           name: 'Use `"inline": true` parameter, if you want to display fields in the same line.',
  //           value: "okay...",
  //         },
  //         {
  //           name: "Thanks!",
  //           value: "You're welcome :wink:",
  //         },
  //       ],
  //       thumbnail: {
  //         url: "https://upload.wikimedia.org/wikipedia/commons/3/38/4-Nature-Wallpapers-2014-1_ukaavUI.jpg",
  //       },
  //       image: {
  //         url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/A_picture_from_China_every_day_108.jpg",
  //       },
  //       footer: {
  //         text: "Woah! So cool! :smirk:",
  //         icon_url: "https://i.imgur.com/fKL31aD.jpg",
  //       },
  //     },
  //   ],
  // };
  const goLivePayload = {
    username: "FH4K",
    content: "@everyone",
    embeds: [
      {
        author: {
          name: "Facehair4000",
          url: "https://www.twitch.tv/facehair4000",
          icon_url:
            "https://static-cdn.jtvnw.net/jtv_user_pictures/c11daed1-f348-4992-951a-68fcedcc9765-profile_image-150x150.png",
        },
        title:
          "Facehair is live" +
          `${
            currentGame && currentGame !== "Unknown Game"
              ? ` with ${currentGame}`
              : ""
          }!`,
        url: "https://www.twitch.tv/facehair4000",
        description:
          streamTitle && streamTitle !== "Unknown Title"
            ? streamTitle
            : "Come hang out!",
        color: 5528627,
        image: {
          url: "https://user-images.githubusercontent.com/20878274/138568600-d17c9f56-3ac5-409e-ae89-565da436dd78.png",
        },
        footer: footerText && {
          text: footerText,
          icon_url: footerImage
            ? footerImage
            : "https://i.imgur.com/fKL31aD.jpg",
        },
      },
    ],
  };
  const response = axios.post(process.env.DISCORD_WEBHOOK || "", goLivePayload);
  response.then((resp: any) => console.log("disc resp: ", resp));
}

/*********** DON'T EDIT BELOW ***********/
export default { name, inputs, method } as ICustomCode;
