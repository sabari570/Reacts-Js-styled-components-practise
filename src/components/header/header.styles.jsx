import styled from "styled-components";


export const StyledHeader = styled.header`
    background-color: ${ ({ theme }) => theme.colors.header };
    padding: 40px 0;
`;

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media(max-width: ${ ( {theme} ) => theme.mobile }) {
        flex-direction: column;
    }
`;

export const Logo = styled.img`
     @media(max-width: ${ ( {theme} ) => theme.mobile }) {
        margin-bottom: 30px;
    }
`;