import { useState } from "react";
export const Mylogin = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [usererr, setUsererr] = useState(false);
  const [passerr, setPasserr] = useState(false);
  const [emailerr, setEmailerrr] = useState(false);
  function loginhandler(e) {
    if (user.length < 3 || pass.length < 3 || email.length<3) {
      window.alert("please enter the correct values");
    } else {
      window.alert("good to go ");
    }
    e.preventDefault();
  }
  function userhandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUsererr(true);
    } else {
      setUsererr(false);
    }
    setUser(item);
  }
  function emailhandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setEmailerrr(true);
    } 
     else {
      setEmailerrr(false);
    }
    setEmail(item);
  }
  function passhandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPasserr(true);
    } else {
      setPasserr(false);
    }
    setPass(item);
  }
  return (
    <div className="Mylogin">
      <h1>login form</h1>
      <form onSubmit={loginhandler}>
        <div>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            placeholder="username"
            id="name"
            onChange={userhandler}
          />
          {usererr ? <span className="spa">Username invalid</span> : ""} <br />
          <br />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={emailhandler}
          />
          {emailerr ? <span className="spa">Email is invalid</span> : ""}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Passoword"
            id="password"
            onChange={passhandler}
          />
          {passerr ? <span className="spa">Password invalid</span> : ""} <br />
          <br />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
