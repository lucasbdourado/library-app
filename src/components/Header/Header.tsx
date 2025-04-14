import React, { FC } from 'react';
import {HeaderContainer} from "./styles";
import {Navbar} from "../Navbar";

export const Header: FC = () => {
    return (
        <HeaderContainer>
            <Navbar></Navbar>
        </HeaderContainer>
    );
};