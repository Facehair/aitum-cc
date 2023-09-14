import { ICCActionInputs, ICustomCode } from "aitum.js/lib/interfaces";
import { StringInput } from "aitum.js/lib/inputs";
import { AitumCC, AitumJS } from "aitum.js";
import { DeviceType } from "aitum.js/lib/enums";
import { CreateChatCompletionRequestMessage } from "openai/resources/chat";
import { openai } from "..";
import fs from "fs";

/*********** CONFIG ***********/
// The custom code action name
const name: string = "FH4K GPT";

// The custom code inputs
const inputs: ICCActionInputs = {
  chatMessage: new StringInput("Chat message", { required: true }),
  chatterUsername: new StringInput("Chatter username", { required: true }),
};

// The code executed.
async function method(inputs: {
  chatMessage: string;
  chatterUsername: string;
}) {
  const aitumJs = AitumJS.get();
  const lib = AitumCC.get().getAitumJS();
  const aitumDevice = (await lib.getDevices(DeviceType.AITUM))[0];
  const twitch = (await lib.getDevices(DeviceType.TWITCH))[0];

  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  const data: any = fs.readFileSync(
    "C:/Users/jdcar/src/aitum-cc/src/cavemanState/GPTState.json",
    "utf8"
  );
  const { chatMessage, chatterUsername } = inputs;

  const triggerWords = ["fh4k", " ad", " ads"];

  let {
    messages,
    messagesSinceLastGPTReq,
    context,
  }: {
    messages: CreateChatCompletionRequestMessage[];
    messagesSinceLastGPTReq: number;
    context: CreateChatCompletionRequestMessage;
  } = JSON.parse(data);

  //Add user message to  messages
  messages.push({ role: "user", content: chatMessage });
  //Check if message history is exceeded
  console.log(
    "Conversations in History: " + (messages.length / 2 - 1) + "/" + 25
  );
  if (messages.length > 25 * 2 + 1) {
    console.log(
      "Message amount in history exceeded. Removing oldest user and agent messages."
    );
    messages.splice(0, 1);
  }

  const normalizedChatMessage = chatMessage.toLowerCase();
  let shouldSendMessage = false;

  for (let i = 0; i < triggerWords.length - 1; i++) {
    if (normalizedChatMessage.includes(triggerWords[i])) {
      shouldSendMessage = true;
      break;
    }
  }
  const randomlyMessage =
    messagesSinceLastGPTReq > 25 && getRandomArbitrary(0, 25) === 1;

  if (shouldSendMessage || randomlyMessage) {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [context, ...messages],
      temperature: 0.7,
      max_tokens: 256,
      top_p: 0.95,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log("gpt resp -> \n", response.choices[0].message);
    messagesSinceLastGPTReq = 0;
    twitch.sendMessage(
      `@${chatterUsername} - ${response.choices[0].message.content}`
    );
  } else {
    messagesSinceLastGPTReq = messagesSinceLastGPTReq + 1;
  }

  fs.writeFileSync(
    "C:/Users/jdcar/src/aitum-cc/src/cavemanState/GPTState.json",
    JSON.stringify({ context, messages, messagesSinceLastGPTReq })
  );
}

/*********** DON'T EDIT BELOW ***********/
export default { name, inputs, method } as ICustomCode;
