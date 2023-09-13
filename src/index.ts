import { AitumCC } from "aitum.js";
import * as dotenv from "dotenv";
import { resolve } from "path";
import OpenAI from "openai";

import DummyAction from "./actions/DummyAction";
import ChatSwitchboard from "./actions/ChatSwitchboard";
import DiscordGoLive from "./actions/DiscordGoLive";
import HueState from "./actions/HueState";
import HueSetTheme from "./actions/HueSetTheme";
import HueDisco from "./actions/HueDisco";
import FH4KGPT from "./actions/FH4KGPT";

dotenv.config({ path: resolve(__dirname, "..", "settings.env") });

const lib = AitumCC.get();

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

(async () => {
  // Set up the environment
  lib.setEnv(
    process.env.AITUM_CC_ID as string,
    process.env.AITUM_CC_HOST as string,
    process.env.API_KEY as string
  );

  // Register actions
  lib.registerAction(DummyAction);
  lib.registerAction(ChatSwitchboard);
  lib.registerAction(DiscordGoLive);
  lib.registerAction(HueState);
  lib.registerAction(HueSetTheme);
  lib.registerAction(HueDisco);
  lib.registerAction(FH4KGPT);

  // Connect after a few seconds
  setTimeout(async () => await lib.connect(), 1e3);
})();
