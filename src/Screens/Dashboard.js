import React from "react";
import "../Styles/Dashboard.css";
// ICONS
import SettingsIcon from "@mui/icons-material/Settings";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import ChatList from "../Components/ChatList";
function Dashboard() {
  return (
    <div className="container">
      <div className="container_Body">
        {/*=======================SIDE BAR=================*/}
        <div
          className="side_bar"
          style={{
            width: 60,
            //   backgroundColorminWidth: 60,
            //   backgroundColor: "pink",
          }}
        >
          <ChatBubbleOutlineIcon
            style={{ color: "white" }}
            className="side_bar_icon"
          />
          <div
            style={{
              // backgroundColor: "pink",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              minHeight: 200,
            }}
          >
            <SettingsIcon
              style={{ color: "white" }}
              className="side_bar_icon"
            />
            <PersonSearchIcon
              style={{ color: "white" }}
              className="side_bar_icon"
            />
            <NotificationsNoneIcon
              style={{ color: "white" }}
              className="side_bar_icon"
            />
          </div>
          <LogoutTwoToneIcon
            style={{ color: "white" }}
            className="side_bar_icon"
          />
        </div>
        {/*=======================SIDE BAR=================*/}
        {/*=======================CHAT LIST =================*/}
        <ChatList />
        {/*=======================CHAT LIST =================*/}
        {/*=======================CHAT SCETION =================*/}

        {/*=======================CHAT SCETION =================*/}
      </div>
    </div>
  );
}

export default Dashboard;
