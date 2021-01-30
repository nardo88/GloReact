import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImage from '../../img/logo.svg';
import imgLogIn from '../../img/sign.svg';
import { Context } from '../Functions/context';

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

const User = styled.div`
    display: flex;
    align-items: center;
    text-align: center;

`;

const LogOut = styled.span`
    font-size: 20px;
    cursor: pointer;
    font-weight: 700;
    margin-right: 30px;
    margin-left: 30px;
`;

const LogoIcon = styled.img`
    width: 40px;
    border-radius: 10px;
    border: 2px solid #fff;
`;



export const NavBar = () => {
    const { auth } = useContext(Context);
    const { authentication, login, logOut } = auth;
    return (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImage} alt="logo" />
            <H1>MrDonal's</H1>
        </Logo>
        { authentication ? 
            <User>
                <figure>
                    <LogoIcon src={authentication.photoURL} alt={authentication.displayName}/>
                    <figcaption>{authentication.displayName}</figcaption>
                </figure>
                <LogOut onClick={logOut} title="Выйти">X</LogOut>
            </User> :
            <LoginBtn onClick={ login }>
            <img src={imgLogIn} alt="login"/>
            <p>войти</p>
            </LoginBtn>
            
        }
        
    </NavBarStyled>
    )
}
