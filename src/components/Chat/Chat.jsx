// src/App.js
import React, { Component } from "react";
import ChatMessage from "./ChatMessage";
import Signup from "./Signup";
import ChatApp from './ChatApp';
import { default as Chatkit } from "@pusher/chatkit-server";

const chatkit = new Chatkit({
  instanceLocator: "v1:us1:6975310b-1b8c-46eb-8e37-266c835807a7",
  key:
    "9ee83a08-1ddf-4a99-996f-bc80248ca393:Ip4DZWroeixciUZ/fnCW+P7i/bZ2GnHKvFfHBimu8ww="
});

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "ChatMessage",
      currentId: "",
      currentUsername: ""
    };
    this.changeView = this.changeView.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  createUser(username) {
    chatkit
      .createUser({
        id: username,
        name: username
      })
      .then(currentUser => {
        this.setState({
          currentUsername: username,
          currentId: username,
          currentView: "chatApp"
        });
      })
      .catch(err => {
        if (err.status === 400) {
          this.setState({
            currentUsername: username,
            currentId: username,
            currentView: "chatApp"
          });
        } else {
          console.log(err.status);
        }
      });
  }

  changeView(view) {
    this.setState({
      currentView: view
    });
  }

  render() {
    let view = "";
    if (this.state.currentView === "ChatMessage") {
      view = <ChatMessage changeView={this.changeView} />;
    } else if (this.state.currentView === "signup") {
      view = <Signup onSubmit={this.createUser}/>;
    } else if (this.state.currentView === "chatApp") {
        view = <ChatApp currentId={this.state.currentId} />
    }
    return <div className="Chat">{view}</div>;
  }
}
export default Chat;
