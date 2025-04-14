import React, { FC } from 'react';
import {FieldContainer, FieldsetContainer, FieldsetTitle, FormContainer} from "./styles";
import {NavbarInput} from "../NavbarInput";
import {LoginFormSubmitButton} from "../LoginFormSubmitButton";

export const LoginForm: FC = () => {
    return (
        <FormContainer>
            <FieldsetContainer>
                <FieldsetTitle>Login</FieldsetTitle>
                <FieldContainer>
                    <NavbarInput type={"text"} name={"username"} placeholder={"RM/RA"} label={"RM/RA"}></NavbarInput>
                    <NavbarInput type={"password"} name={"password"} placeholder={"Senha"} label={"Senha"}></NavbarInput>
                </FieldContainer>
                <LoginFormSubmitButton></LoginFormSubmitButton>
            </FieldsetContainer>
        </FormContainer>
    );
};