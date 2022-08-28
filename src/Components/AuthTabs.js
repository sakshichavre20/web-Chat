import React, { useState } from "react";
import { Tab, Box, Tabs } from "@mui/material";
import { TabPanel } from "@mui/lab";

function AuthTabs() {
  const [value, setvalue] = useState("0");
  const handleChange = (value) => {
    setvalue(value);
  };
  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange(value)}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" value="0" />
          <Tab label="Item Two" value="1" />
        </Tabs>
      </Box>

      <TabPanel value={"0"} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={"1"} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
}

export default AuthTabs;
