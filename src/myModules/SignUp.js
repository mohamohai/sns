import { useEffect, useState } from "react";
import styled from "styled-components";

import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function SignUp(){
    const [loginid,setloginid]=useState('')
    const [loginpassword,setloginpassword]=useState('')

    return(
           <SignInFull>
                <SignInForm>
                    <SignTitle>Login</SignTitle>
                    <SignBox type="text" onChange={(e)=>setloginid(e.target.value)} placeholder="ID"></SignBox>
                    <SignBox type="password" onChange={(e)=>setloginpassword(e.target.value)} placeholder="PASSWORD"></SignBox>
                <SignLoginBtn/>
                </SignInForm>
           </SignInFull>)
    
}
const SignInFull = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, salmon, plum);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const SignInForm = styled.div`
    width: 30%;
    height: 70%;
    background:white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 15px;
`

const SignTitle = styled.h2`
`

const SignBox = styled.input`
    width:70%;
    padding:10px;
`
const SignLoginBtn = styled.div`
    width: 70%;
    height: 30px;
    background-color: red;
`
export default SignUp

