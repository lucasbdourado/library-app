import React, { FC } from 'react';
import {
    NavbarContainer,
    NavbarItem, NavbarItemLink,
    NavbarItemList,
    NavbarLogo,
    NavbarLogoContainer
} from "./styles";
import logo from '../../assets/img/logo.png';
import {LoginForm} from "../LoginForm";

export const Navbar: FC = () => {
    return (
        <NavbarContainer>
            <NavbarLogoContainer>
                <NavbarLogo src={logo} alt="Logo Falero">
                </NavbarLogo>
            </NavbarLogoContainer>
            <NavbarItemList>
                <NavbarItem>
                    <NavbarItemLink>Home</NavbarItemLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarItemLink>Sistema</NavbarItemLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarItemLink>Por que Falero?</NavbarItemLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarItemLink>Contato Falero</NavbarItemLink>
                </NavbarItem>
            </NavbarItemList>
            <LoginForm></LoginForm>
        </NavbarContainer>
    );
};