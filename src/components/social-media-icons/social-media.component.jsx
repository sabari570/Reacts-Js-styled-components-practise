import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { StyledSocialMediaIcons } from './social-media-icons.styles'

function SocialMediaIcons() {
    return (
        <StyledSocialMediaIcons>
            <li>
                <a href='#'>
                    < FaTwitter />
                </a>
            </li>

            <li>
                <a href='#'>
                    < FaFacebook />
                </a>
            </li>

            <li>
                <a href='#'>
                    < FaInstagram />
                </a>
            </li>

            <li>
                <a href='#'>
                    < FaLinkedin />
                </a>
            </li>
        </StyledSocialMediaIcons>
    )
}

export default SocialMediaIcons;
