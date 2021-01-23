import React from 'react';
import styled from 'styled-components';
import logoImage from '../../img/logo.svg';
import imgLogIn from '../../img/sign.svg'

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: #fff;
`;


const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const LoginBtn = styled.button`
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    outline: none;
`;



export const NavBar = () => {
    return (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImage} alt="logo" />
            <H1>MrDonal's</H1>
        </Logo>
       
        <LoginBtn>
            <img src={imgLogIn} alt="login"/>
            войти
        </LoginBtn>
    </NavBarStyled>
    )
}
