import React from 'react'
import { Container } from '../../styled-components/container/container.styled'
import { Flex } from '../../styled-components/flex/flex.styled'
import { StyledFooter } from './footer.styles'
import SocialMediaIcons from '../social-media-icons/social-media.component'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='' />

        <Flex>
            <ul>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus rerum sapiente deleniti reprehenderit ratione magni explicabo perspiciatis provident, nemo illum.</li>
                <li>+1-343-345-3423</li>
                <li>example@huddle.com</li>
            </ul>

            <ul>
                <li>About Us</li>
                <li>What We Do</li>
                <li>FAQ</li>
            </ul>

            <ul>
                <li>Career</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>

            {/* Social media icons */}
            <SocialMediaIcons />
        </Flex>

        <p>&copy; 2024 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}
