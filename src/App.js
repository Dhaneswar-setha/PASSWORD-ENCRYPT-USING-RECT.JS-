import { useState } from "react";
import jwt from "jsonwebtoken";

export default function App() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState([]);
  function handelData() {
    var d = [...data];
    d.push({
      email: email,
      Password: jwt.sign(Password, "Dhanes")
    });
    setData(d);
  }
  console.log(data);
  return (
    <div style={{ backgroundColor: "aqua" }}>
      <center>
        <h1 style={{ backgroundColor: "yellow", color: "red" }}>
          Enter email and Password
        </h1>
        <b style={{ fontSize: "30px" }}>email</b>
        <br />
        <input
          style={{ backgroundColor: "black", color: "white", fontSize: "20px" }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <b style={{ fontSize: "30px" }}> Password </b>
        <br />
        <input
          type="password"
          style={{ backgroundColor: "black", color: "white", fontSize: "20px" }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button
          style={{
            color: "white",
            fontSize: "40px",
            backgroundColor: "blue",
            border: "25px"
          }}
          onClick={handelData}
        >
          Submit
        </button>
        <button
          style={{
            color: "white",
            fontSize: "40px",
            backgroundColor: "red",
            border: "25px"
          }}
          onClick={() => {
            setShowPass(true);
          }}
        >
          Showpassword
        </button>
        <br />
        {data.map((obj, i) => {
          return (
            <div>
              <b style={{ fontSize: "30px" }}>email: {obj.email}</b>
              <br />

              <b style={{ fontSize: "30px" }}>
                {" "}
                Password:{" "}
                {showPass === false
                  ? obj.Password
                  : jwt.verify(obj.Password, "Dhanes")}
              </b>
            </div>
          );
        })}
      </center>
    </div>
  );
}
