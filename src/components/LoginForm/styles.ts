import styled from "styled-components";

export const FormContainer = styled.form`
`;

export const FieldsetContainer = styled.fieldset`
    display: flex;
    align-items: center;
    gap: 1.0rem;
    border: 1px solid rgb(72, 73, 65);
    border-radius: 0.25rem;
    padding: 10px;
    color: rgb(72, 73, 65);
`;

export const FieldsetTitle = styled.legend`
    font-weight: bold;
    padding: 0 0.5rem;
    font-size: 1.2rem;
    color: rgb(72, 73, 65);
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;