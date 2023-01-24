import React from 'react'
import { withRouter } from 'react-router-dom'
import { ThemeContainer } from './ThemeContainer/ThemeContainer.styles'
import { ThemeText } from './ThemeText/ThemeText.styles'
import { Container } from '../Container/Container.styles'
import { HeadingShape } from './HeadingShape/HeadingShape.styles'
import { QuoteText } from './QuoteText/QuoteText.styles'
import GoodLuck from '../GoodLuck';

const Quote = () => {
  return (
    <div>
        {/*<ThemeContainer className="theme-heading">
            <ThemeText><HeadingShape>дневен късмет</HeadingShape></ThemeText>
        </ThemeContainer>
        <Container>
            <QuoteText>{text}</QuoteText>
        </Container>*/}
    </div>
  )
}

export default Quote

