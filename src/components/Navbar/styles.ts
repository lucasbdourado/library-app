import styled from "styled-components";


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    background-color: rgb(243, 244, 236);
`;

export const NavbarLogoContainer = styled.div`
    max-width: 240px;
`;

export const NavbarLogo = styled.img`
    width: 100%;
`;

export const NavbarItemList = styled.ul`
    display: flex;
    align-self: flex-start;
    margin-top: 1.5rem;
`;

export const NavbarItem = styled.li`
`;

export const NavbarItemLink = styled.a`
    font-size: 1.8rem;
    cursor: pointer;
    border-right: 1px solid rgb(124, 125, 117);
    padding: 0.25rem 1.25rem 0.25rem 1.25rem;
    font-weight: 400;
    font-style: italic;
    color: rgb(72, 73, 65);

    &:hover {
        background-color: rgb(181, 5, 7);
        color: rgb(243, 244, 236);
        transition: 0.3s ease;
    }
`;