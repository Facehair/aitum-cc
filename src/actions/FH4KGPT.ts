import { ICCActionInputs, ICustomCode } from "aitum.js/lib/interfaces";
import { StringInput } from "aitum.js/lib/inputs";
import { AitumCC } from "aitum.js";
import { DeviceType } from "aitum.js/lib/enums";
import { CreateChatCompletionRequestMessage } from "openai/resources/chat";
import { openai } from "..";

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
  const { chatMessage, chatterUsername } = inputs;
  const messages: CreateChatCompletionRequestMessage[] = [
    { role: "system", content: "You are a helpful Twitch Chatbot." }, // replace content with context file
  ];
  console.log("am I working?");
  //Add user message to  messages
  messages.push({ role: "user", content: chatMessage });
  //Check if message history is exceeded
  console.log(
    "Conversations in History: " +
      (messages.length / 2 - 1) +
      "/" +
      process.env.HISTORY_LENGTH
  );
  if (messages.length > 25 * 2 + 1) {
    console.log(
      "Message amount in history exceeded. Removing oldest user and agent messages."
    );
    messages.splice(1, 2);
  }
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 0.95,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  console.log("env?", process.env.OPENAI_API_KEY);

  console.log("gpt resp -> \n", response);

  const lib = AitumCC.get().getAitumJS();

  const aitumDevice = (await lib.getDevices(DeviceType.AITUM))[0];
}

/*********** DON'T EDIT BELOW ***********/
export default { name, inputs, method } as ICustomCode;
