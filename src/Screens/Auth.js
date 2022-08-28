import React, { useState } from "react";
import { Colors, styles, useWindowDimensions } from "../Constants";
import { Tab, Box, Tabs } from "@mui/material";
import { TabPanel } from "@mui/lab";
import AuthTabs from "../Components/AuthTabs";
import { useNavigate } from "react-router";
//icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
//css
import "../Styles/Auth.css";

function Auth() {
  const [value, setvalue] = useState("Login");
  const { width, height } = useWindowDimensions();
  const navigate = useNavigate();

  const [remMe, setRemMe] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [gendershow, setGendershow] = useState(false);
  const [error, setError] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const Login = async () => {
    if (email === "") {
      setError("Email cannot be empty");
    } else if (password === "") {
      setError("Password cannot be empty");
    } else {
      navigate("/dashboard");
    }

    //    await API.Login({
    //      email: email,
    //      password: password,
    //    })
    //      .then((res) => {
    //        localStorage.setItem("token", res?.data?.token);
    //        localStorage.setItem("user", JSON.stringify(res?.data?.user));
    //        window.localStorage.setItem("isLoggedIn", true);
    //        console.log(res.data);
    //        navigate("/dashboard");
    //      })
    //      .catch((err) => {
    //        console.log(err.response.data.title);
    //        setError(err.response.data.title);
    //      });
    //  }
  };

  const blurViewWidth = () => {
    if (width < 385) {
      return "100vw";
    } else {
      return "50vw";
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        //  alignItems: "center",
        //  justifyContent: "center",
        //  backgroundColor: "#02231C",
        // backgroundImage:
        //   "url(https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb)",

        // objectFit: "cover",
      }}
    >
      <img
        //  key={bgImage}
        src={"https://wallpaperaccess.com/full/147476.jpg"}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          objectFit: "cover",
          //   zIndex: -10,
        }}
      />
      <div
        style={{
          // backgroundColor: "pink",
          // backgroundColor: "rgba(0,0,0,0.5)",
          height: "100%",
          width: "100%",
          position: "relative",
          paddingLeft: width < 385 ? 0 : 25,
          // justifyContent: "center",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(to left , black, black, #000000cf, #000000cf, #000000cf, #00000066, rgba(0, 0, 0, 0)",

          //  zIndex: -20,
        }}
        //  className="poster_fade"
      >
        <div
          style={{
            // width: blurViewWidth,
            width: width > 385 ? "50vw" : "100vw",
            //  backgroundColor: "rgb(0,0,225,0.1)",
            height: width < 385 ? "100%" : "80%",
            borderRadius: 20,
            marginLeft: width < 385 ? 0 : 25,
            paddingLeft: 25,
            backgroundColor: "rgba(225, 225, 225, 0.1)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div
            style={{
              //  backgroundColor: Colors.neel,
              height: 40,
              // width: "40%",
              marginTop: 30,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "flex-start",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <a
              onClick={() => setvalue("Login")}
              style={{
                textAlign: "left",
                textShadow: value === "Login" ? "4px 4px 5px #0007" : null,
                color: value === "Login" ? Colors.white : Colors.grey,
                fontWeight: value === "Login" ? "bold" : null,
                cursor: "pointer",
                fontSize: value === "Login" ? 18 : 15,
              }}
            >
              Login
            </a>

            <a
              onClick={() => setvalue("Signup")}
              style={{
                textAlign: "left",
                fontWeight: value === "Signup" ? "bold" : null,
                textShadow: value === "Signup" && "4px 4px 5px #0007",
                marginLeft: 20,
                color: value === "Signup" ? Colors.white : Colors.grey,
                cursor: "pointer",
                fontSize: value === "Signup" ? 18 : 15,
              }}
            >
              Signup
            </a>
          </div>
          <div
            style={{
              //  backgroundColor: "orange",
              display: "flex",
              height: "75%",
              width: "90%",
              paddingRight: 30,
              paddingTop: 30,
              paddingBottom: 30,
            }}
          >
            {value === "Login" ? (
              <div
                style={{
                  flex: 1,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    textAlign: "left",
                    textShadow: "4px 4px 5px #0007",
                  }}
                >
                  Hello we are glad to see you back again !
                </h3>
                <div style={styles.textBox}>
                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.textInput}
                  />
                </div>
                <div style={styles.textBox}>
                  <input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={passwordType}
                    style={styles.textInput}
                  />
                  <button
                    className="btn btn-outline-primary"
                    onClick={togglePassword}
                    style={{
                      backgroundColor: "transparent",
                      outline: "none",
                      border: `0px`,
                    }}
                  >
                    {passwordType === "password" ? (
                      <VisibilityIcon style={{ color: Colors.white }} />
                    ) : (
                      <VisibilityOffIcon style={{ color: Colors.white }} />
                    )}
                  </button>
                </div>

                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    //  height: 40,
                    //  backgroundColor: Colors.neel,
                    //  width: "50%",
                    minWidth: 100,
                    marginTop: 20,
                    marginBottom: 20,
                    alignSelf: "flex-start",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={remMe}
                    name="todo"
                    value={remMe}
                    style={{
                      cursor: "pointer",
                      outline: "none",
                    }}
                    onChange={() => setRemMe(!remMe)}
                  />
                  <a style={{ marginLeft: 10 }}> Remeber Me</a>
                </div>
                {error.length > 0 && (
                  <a
                    style={{
                      color: "#f57",
                      fontWeight: "bold",
                      fontSize: 14,
                      //  marginTop: 5,
                      marginBottom: 20,
                      alignSelf: "flex-start",
                    }}
                  >
                    {error}
                  </a>
                )}
                <button
                  onClick={() => {
                    // navigate("/dashboard");
                    Login();
                  }}
                  className="button_style"
                  style={{
                    //  height: 30,
                    // marginTop: 10,
                    borderRadius: 5,
                    backgroundColor: Colors.primary,
                    padding: 10,
                    width: 90,
                    alignSelf: "flex-start",
                    borderColor: Colors.accent,
                  }}
                >
                  <a style={{ color: "white", fontWeight: "bold" }}>Login</a>
                </button>
              </div>
            ) : (
              <div
                style={{
                  flex: 1,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    textAlign: "left",
                    textShadow: "4px 4px 5px #0007",
                  }}
                >
                  Hello 👋🏻 <br />
                  We are glad to see you!
                </h3>
                <div
                  style={{
                    //  backgroundColor: "pink",
                    flexDirection: width < 385 ? "column" : "row",
                    display: "flex",
                  }}
                >
                  <div style={styles.textBox}>
                    <input
                      placeholder="Username"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={styles.textInput}
                      type="text"
                    />
                  </div>
                  <div style={styles.textBox}>
                    <input
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={styles.textInput}
                    />
                  </div>
                </div>
                <div
                  style={{
                    //  backgroundColor: "pink",
                    flexDirection: width < 385 ? "column" : "row",
                    display: "flex",
                  }}
                >
                  <div style={styles.textBox}>
                    <input
                      placeholder="Company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      style={styles.textInput}
                    />
                  </div>
                  <div style={styles.textBox}>
                    <input
                      placeholder="Designation"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      style={styles.textInput}
                    />
                  </div>
                </div>
                <div
                  style={{
                    //  backgroundColor: "pink",
                    flexDirection: width < 385 ? "column" : "row",
                    display: "flex",
                  }}
                >
                  <div style={styles.textBox}>
                    <input
                      placeholder="DOB"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      style={styles.textInput}
                      type="date"
                    />
                  </div>
                  <div style={styles.textBox}>
                    {/* <input
                      placeholder="Gender"
                      value={gender}
                      // onClick={setGendershow(!gendershow)}
                      onChange={() => setGendershow(!gendershow)}
                      style={styles.textInput}
                    /> */}
                    {/* {gendershow ? ( */}
                    <select style={styles.textInput}>
                      <option value="Male" onChange={() => setGender("Male")}>
                        Male
                      </option>
                      <option value="Female" onChange={() => setGender("Male")}>
                        <a style={{ color: "black" }}> Female</a>
                      </option>
                    </select>
                    {/* ) : null} */}
                  </div>
                </div>

                <div style={styles.textBox}>
                  <input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={passwordType}
                    style={styles.textInput}
                  />
                  <button
                    className="btn btn-outline-primary"
                    onClick={togglePassword}
                    style={{
                      backgroundColor: "transparent",
                      outline: "none",
                      border: `0px`,
                    }}
                  >
                    {passwordType === "password" ? (
                      <VisibilityIcon style={{ color: Colors.white }} />
                    ) : (
                      <VisibilityOffIcon style={{ color: Colors.white }} />
                    )}
                  </button>
                </div>

                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    //  height: 40,
                    //  backgroundColor: Colors.neel,
                    //  width: "50%",
                    minWidth: 100,
                    marginTop: 20,
                    marginBottom: 20,
                    alignSelf: "flex-start",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={remMe}
                    name="todo"
                    value={remMe}
                    style={{
                      cursor: "pointer",
                      outline: "none",
                    }}
                    onChange={() => setRemMe(!remMe)}
                  />
                  <a style={{ marginLeft: 10 }}> Remeber Me</a>
                </div>
                {error.length > 0 && (
                  <a
                    style={{
                      color: "#f57",
                      fontWeight: "bold",
                      fontSize: 14,
                      //  marginTop: 5,
                      marginBottom: 20,
                      alignSelf: "flex-start",
                    }}
                  >
                    {error}
                  </a>
                )}
                <button
                  onClick={() => {
                    // navigate("/dashboard");
                    Login();
                  }}
                  className="button_style"
                  style={{
                    //  height: 30,
                    // marginTop: 10,
                    borderRadius: 5,
                    backgroundColor: Colors.primary,
                    padding: 10,
                    //  width: 90,
                    alignSelf: "flex-start",
                    borderColor: Colors.accent,
                  }}
                >
                  <a style={{ color: "white", fontWeight: "bold" }}>
                    Create Account
                  </a>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
