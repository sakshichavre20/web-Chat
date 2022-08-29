import React from "react";
import "../Styles/ChatSection.css";
import { Avatar, IconButton } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
function ChatSection() {
  return (
    <div className="Chat">
      <div className="chat__header">
        <div className="chat__header--Left">
          <Avatar />
        </div>
        <div className="chat__header__middle">
          <a className="Chat__name">Srushti</a>
          <a className="Chat__status"> Student at SFS</a>
        </div>
      </div>
      <div className="chat__body">
        {/* <p className="chat__msg__reciever">
          <span className="Chat__text">This is a message </span>
          <span className="chat__timeStamp">{new Date().toUTCString()}</span>
        </p>
        
        <p className="chat__msg__sender">
          <span className="Chat__text">This is a message</span>
          <span className="chat__timeStamp">{new Date().toUTCString()}</span>
        </p> */}
      </div>
      <div className="chat_inputcontainer">
        {/* <form className="chat_inputcontainer"> */}
        <input
          type="text"
          placeholder="search or a new chat"
          style={{
            // background: "#22223b",
            paddingLeft: 20,
            color: "white",
            border: "1px solid #4a4e69",
          }}
          className="chat__searchcontainer"
        />
        <SendOutlinedIcon style={{ color: "white" }} className="send_icon" />
        {/* </form> */}
      </div>
    </div>
  );
}

export default ChatSection;
