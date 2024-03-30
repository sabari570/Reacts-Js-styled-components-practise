import React from 'react'
import './header.styles';
import { Logo, NavBar, StyledHeader } from './header.styles';
import { Container } from '../../styled-components/container/container.styled';
import { Button } from '../../styled-components/button/button.styled';
export default function Header() {
    return (
        < StyledHeader>
            < Container>
                < NavBar>
                    <Logo src='./images/logo.svg' alt='' />
                    <Button>Try It Free</Button>
                </NavBar>
            </Container>
        </StyledHeader>
    )
}