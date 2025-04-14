import React, { FC } from 'react';
import {SubmitButton} from "./styles";

export const LoginFormSubmitButton: FC = () => {
    return (
        <SubmitButton type={"submit"} name={"submit"} id={"submit"} value={"ok"}></SubmitButton>
    );
};