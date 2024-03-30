import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    /* This means if their is any direct div or ul tag */
    /* inside the Flex component then it applies these styles */
    & > div,
    & > ul{
        flex: 1;
    }

    @media(max-width: ${ ( {theme} ) => theme.mobile }) {
        flex-direction: column;
        text-align: center;
    }
`;