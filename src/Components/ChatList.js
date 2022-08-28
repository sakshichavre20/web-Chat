import React from "react";
import "../Styles/ChatList.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { Avatar, IconButton } from "@mui/material";

function ChatList() {
  return (
    <div className="chatList">
      <div className="chatList__header">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj85x9CMAI5lzsNWzR2HAOpbHEedklaFWa7gjDcQzR3Mly4u-4bS_wvJJ6A1ny5l-JcXk&usqp=CAU" />
        <div className="chatList__headerRight">
          <a>Sakshi Chavre</a>
          <a>Developer at Dwebox</a>
        </div>
      </div>
      <div className="chatList__searchbar">
        <div className="chatList__searchcontainer">
          <SearchTwoToneIcon style={{ color: "#848788" }} />
          <input
            type="text"
            placeholder="search or a new chat"
            style={{ background: "#323739", color: "#B1B3B5" }}
          />
        </div>
      </div>
      <div>
        <div className="list_Chat">
          <div className="list_Chat__Avatar">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj85x9CMAI5lzsNWzR2HAOpbHEedklaFWa7gjDcQzR3Mly4u-4bS_wvJJ6A1ny5l-JcXk&usqp=CAU" />
          </div>
          <div className="list_chat__info">
            <a className="list_Chat__name">Srushti</a>
            <a className="list_Chat__status">Hi didi</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
