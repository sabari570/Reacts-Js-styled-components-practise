import styled from "styled-components";

export const StyledSocialMediaIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    li{
        list-style-type: none;
        padding: 10px;
    }

    a{
        color: #fff;
        border: 1px solid #fff;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        text-decoration: none;

        &:hover{
        background-color: #F461A2;
        transform: scale(1.2);
    }
    }
`;