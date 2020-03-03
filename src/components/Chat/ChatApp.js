    // src/Components/ChatApp.js

    import React, {Component} from 'react';
    import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
    import MessageList from './MessageList';
    import Input from './Input';

    class ChatApp extends Component {
        constructor(props) {
            super(props); 
            this.state = {
                currentUser: null,
                currentRoom: {users:[]},
                messages: [],
                users: []
            }
            this.addMessage = this.addMessage.bind(this);
        }

        componentDidMount() {
            const chatManager = new ChatManager({
                instanceLocator: 'v1:us1:6975310b-1b8c-46eb-8e37-266c835807a7',
                userId: this.props.currentId,
                tokenProvider: new TokenProvider({
                    url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/6975310b-1b8c-46eb-8e37-266c835807a7/token'
                })
            })
            chatManager
                .connect()
                .then(currentUser => {
                    this.setState({ currentUser: currentUser })
                    return currentUser.subscribeToRoom({
                        roomId: "b8ccf209-14b4-4a1b-98a9-c1929a8e60f1",
                        messageLimit: 100,
                        hooks: {
                            onMessage: message => {
                                this.setState({
                                    messages: [...this.state.messages, message],
                                })
                            },
                        }
                    })
                })
                .then(currentRoom => {
                    this.setState({
                        currentRoom,
                        users: currentRoom.userIds
                    })
                })
                .catch(error => console.log(error))
            }

        addMessage(text) {
            this.state.currentUser.sendMessage({
                text,
                roomId: this.state.currentRoom.id
            })
            .catch(error => console.error('error', error));
        }
        render() {
            return (
                <div>
                    <h2 className="header">Hi There, Ask us anything</h2>
                    <MessageList messages={this.state.messages} />
                    <Input className="input-field" onSubmit={this.addMessage} />
                </div>
            )
        }
    }
    export default ChatApp;