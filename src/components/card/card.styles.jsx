import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    /* Accessing props passed in styled components */
    flex-direction: ${ ({layout}) => layout };

    /* If there is any img tag inside of StyledCard this will be applied */
    img{
        width: 80%;
    }

    /* Setting the immediate div to flex 1 */
    & > div{
        flex: 1;
    }

    @media (max-width: ${ ({theme}) => theme.mobile }) {
        flex-direction: column;
    }
`;