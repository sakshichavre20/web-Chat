import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const Colors = {
  primary: "#21295c",
  accent: "#1b3b6f",
  green1: "#628a61",
  red: " #E50914",
  white: "#ffffff",
  black: "#000000",
  grey: "#9eb3c2",
  neel: "#1c7293",
  sea: "#065a82",
  // lightblue: "#1b3b6f",
};

const styles = {
  textInput: {
    display: "flex",
    paddingLeft: 20,
    fontFamily: "Poppins",
    borderRadius: 20,
    //  outline: "none",
    //  borderWidth: 5,
    borderColor: Colors.accent,
    backgroundColor: "transparent",
    height: 40,
    width: "100%",
    // minWidth: 300,
    //  marginTop: 20,
    // marginBottom: 20,
    color: Colors.white,
  },
  textBox: {
    display: "flex",
    flexDirection: "row",

    height: 40,
    width: "100%",

    marginTop: 15,
    marginBottom: 15,

    fontFamily: "Poppins",
    borderRadius: 10,
    outline: "none",
    border: 0,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
};
export { styles, useWindowDimensions, Colors };
