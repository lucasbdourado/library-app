import React, {FC, useState} from 'react';
import Cookies from 'js-cookie';
import {FieldContainer, FieldsetContainer, FieldsetTitle, FormContainer} from "./styles";
import {NavbarInput} from "../NavbarInput";
import {LoginFormSubmitButton} from "../LoginFormSubmitButton";

export const LoginForm: FC = () => {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {

        e.preventDefault();
        setLoading(true);

        const payload = {
            email: username,
            password: password,
        };

        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Erro ao fazer login');
            }

            const data = await response.json();

            Cookies.set("token", data.token, { expires: data.expires });

        } catch (error) {
            console.error('Erro:', error);
            alert('Usuário ou senha inválidos');
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormContainer onSubmit={handleLogin}>
            <FieldsetContainer>
                <FieldsetTitle>Login</FieldsetTitle>
                <FieldContainer>
                    <NavbarInput type={"text"} name={"username"} placeholder={"RM/RA"} label={"RM/RA"}
                                 value={username}
                                 onChange={(e) => setUsername(e.target.value)}></NavbarInput>
                    <NavbarInput type={"password"} name={"password"} placeholder={"Senha"}
                                 label={"Senha"} value={password}
                                 onChange={(e) => setPassword(e.target.value)}></NavbarInput>
                </FieldContainer>
                {loading ? <p>Carregando...</p> : <LoginFormSubmitButton/>}
            </FieldsetContainer>
        </FormContainer>
    );
};