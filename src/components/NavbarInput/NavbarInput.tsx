import React, {FC} from "react";
import {Input, InputContainer, Label} from "./styles";
import {InputFormProps} from "./types";

export const NavbarInput: FC<InputFormProps> = ({ type, name, label, placeholder }) => {
    return (
        <InputContainer>
            <Label htmlFor={ name }>{ label }:</Label>
            <Input type={ type } name={ name } id={ name } placeholder={ placeholder }></Input>
        </InputContainer>
    );
};