import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { nanoid } from "nanoid";

const MainDiv = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  margin-top: 60px;
  // background: #f0ecec;
  background: rgb(244, 182, 100);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  margin-bottom:50px;
`;

const InnerDiv = styled.div`
  width: 308px;
  text-align: center;
  margin: auto;
`;
const Title = styled.h2`
  font-weight: 400;
  font-size: 18px;
  color: #1e1f21;
  margin: 0;
`;

const Div1 = styled.div`
  margin-top: 8px;
  input {
    width: 96%;
    font-size: 14px;
    height: 34px;
    outline: none;
    padding-left: 10px;
    border: 2px solid rgb(247, 143, 6);
    border-radius: 30px;
    padding-left: 20px;
  }
  input:nth-child(1),input:nth-child(2) {
    display: ${(props) => props.isLoggedIn === false && "none"};
    border-radius: 30px;
    padding-left: 20px;
  }
`;
const Div2 = styled.div`
  margin-top: 8px;
  input {
    width: 96%;
    font-size: 14px;
    height: 34px;
    outline: none;
    padding-left: 10px;
    border: 2px solid rgb(247, 143, 6);
    border-radius: 30px;
    padding-left: 20px;
  }
`;

const Button = styled.button`
  width: 290px;
  height: 37px;
  margin-top: 25px;
  background: rgb(247, 143, 6);
  // background: #1c1c1c;
  color: #fff;
  font-weight: 550;
  cursor: pointer;
  letter-spacing: 0.3px;
  border-radius: 30px;
`;
const P2 = styled.p`
text-decoration: underline;
margin-top: 10px;
cursor:pointer;
display: ${(props) => props.isLoggedIn === false && "none"};
`;
const P3 = styled.p`
text-decoration: underline;
margin-top: 10px;
cursor:pointer;
display: ${(props) => props.isLoggedIn && "none"};
`;

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loginForm, setLoginForm] = useState({});
  const [existingUser, setExistingUser] = useState({});
  let auth = JSON.parse(localStorage.getItem("auth")) || [];
  const ref = useRef();

  const onChange = (e) => {
    if (isLoggedIn) {
      const { name } = e.target;
      setLoginForm({
        ...loginForm,
        [name]: e.target.value,
        id: nanoid(),
      });
    } else {
      const { name } = e.target;
      setExistingUser({
        ...existingUser,
        [name]: e.target.value,
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (isLoggedIn) {
      auth.push(loginForm);
      // save into local storage
      localStorage.setItem("auth", JSON.stringify(auth));
      setIsLoggedIn(false);

      console.log(loginForm);
    } else {
      let success = false;
      auth.map((item) => {
        if (
          existingUser.email === item.email &&
          existingUser.password === item.password
        ) {
          success = true;
          alert("Login successful");
        }
      });
      if(!success){
        alert("Wrong credentials");
      }
      // setIsLoggedIn(true);
      console.log(existingUser);
    }
  };

  return (
    <MainDiv>
      <InnerDiv>
        <Title>
          {isLoggedIn ? "Create an account" : "Log in to your account"}
        </Title>
        <Div1 isLoggedIn={isLoggedIn}>
          <input
            type="text"
            name="first_name"
            // value={isLoggedIn ? existingUser.name : loginForm.name}
            onChange={onChange}
            placeholder="First Name"
          />
        </Div1>
        <Div1 isLoggedIn={isLoggedIn}>
          <input
            type="text"
            name="last_name"
            // value={isLoggedIn ? existingUser.name : loginForm.name}
            onChange={onChange}
            placeholder="Last Name"
          />
        </Div1>
        <Div2>
          <input
            type="email"
            name="email"
            // value={isLoggedIn ? existingUser.name : loginForm.name}
            onChange={onChange}
            placeholder="Email"
          />
        </Div2>
        <Div2>
          <input
            type="password"
            name="password"
            // value={isLoggedIn ? existingUser.name : loginForm.name}
            onChange={onChange}
            placeholder="Password"
          />
        </Div2>
        <Button onClick={onSubmit}>{isLoggedIn ? "Sign Up" : "Log In"}</Button>
        <P2 onClick={(e)=>setIsLoggedIn(false)} isLoggedIn={isLoggedIn}>Already have an account?</P2>
        <P3 onClick={(e)=>setIsLoggedIn(true)} isLoggedIn={isLoggedIn}>Don't have an account?</P3>
      </InnerDiv>
    </MainDiv>
  );
};

export default Login;
