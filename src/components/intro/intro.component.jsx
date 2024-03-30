import React from 'react'
import { Flex } from '../../styled-components/flex/flex.styled'
import { Button } from '../../styled-components/button/button.styled'
import { Image } from './intro.styles'
import { Container } from '../../styled-components/container/container.styled'
import { useTheme } from 'styled-components'

export default function Intro() {
    const theme = useTheme();
    return (
        <Container bg={theme.colors.header}>
            <Flex>

                {/* Left side content */}
                <div>
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis, assumenda, quis modi facere minima repellat praesentium porro iste ab numquam, dolor nesciunt fugiat magni totam ipsam odit quidem. Dolorem aperiam nostrum doloremque, ullam voluptatibus architecto harum veritatis exercitationem consequuntur mollitia maxime, dignissimos veniam labore, ad facere est blanditiis ipsa eaque tempore. Ea alias, iusto quae nisi quibusdam animi beatae.
                    </p>

                    <Button bg='#ff0099' color='#fff' bottommargin='20px'>Get Started For Free</Button>
                </div>

                {/* Right side content */}
                < Image src='./images/illustration-mockups.svg' alt='' />
            </Flex>
        </Container>
    )
}
