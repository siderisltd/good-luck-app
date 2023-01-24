import React from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import { BigIcon } from '../Link/Link.style'
import { ShareContainer } from './ShareContainer/ShareContainer.styles'
import { Heading } from './Heading/Heading.styles'
import { Container } from '../Container/Container.styles'

const Share = () => {
  return (
    <ShareContainer className='share-container'>
        <Heading className='heading'>Share on</Heading>
        <Container className='social-media-icons' display='flex' justifyContent='center'>
            <BigIcon href='https://google.com' target="_blank"><FontAwesomeIcon icon={faFacebookSquare} className="icon"/></BigIcon>
            <BigIcon href='https://google.com' target="_blank"><FontAwesomeIcon icon={faTwitterSquare} className="icon"/></BigIcon>
            <BigIcon href='https://google.com' target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon"/></BigIcon>
            {
                //TODO: Import the scripts for the icon-links
            }
        </Container>
    </ShareContainer>
  )
}

export default Share

