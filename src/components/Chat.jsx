import React from "react";
import {
  ChatkitProvider,
  TokenProvider,
  withChatkit
} from "@pusher/chatkit-client-react";

const tokenProvider = new TokenProvider({
  url:
    "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/6975310b-1b8c-46eb-8e37-266c835807a7/token"
});

const userId = "sam";
const instanceLocator = "v1:us1:6975310b-1b8c-46eb-8e37-266c835807a7";

const WelcomeMessage = withChatkit(props => {
    return (
        <div>
            {props.chatkit.isLoading
            ? 'Connecting to chatkit...'
            : `Hello ${props.chatkit.currentUser.name}!`}
        </div>
    )
})

const Chat = () => {
  return (
    <div>
      <ChatkitProvider
        instanceLocator={instanceLocator}
        tokenProvider={tokenProvider}
        userId={userId}
      >
          <WelcomeMessage />
      </ChatkitProvider>
    </div>
  );
};

export default Chat;
