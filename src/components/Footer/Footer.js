import React from 'react'
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FooterBox } from '../Container/Container.styles'
import { Link } from '../Link/Link.style'
import { SmallIcon } from '../Link/Link.style'
import { Container } from '../Container/Container.styles';
import { Paragraph } from '../Paragraph/Paragraph.styles';

const Footer = () => {
  return (
    <div>
      <FooterBox className='footer-box'>
        <Container padding='0 15px' className='footer-sec'>
          <span class="footer-logo">
            <img class="site_logo" style={LogoStyle} alt="Q-Photography Logo" src={logo}/>
          </span>
          <Paragraph margin='20px 0 10px'>
            Повече от добре дошли сте да ни последвате в социалните мрежи, да ни пишете, 
            да ни задавате въпроси и да станете част от нашето голямо семейство.
          </Paragraph>
          <Container display='flex' flexDirection='row' justifyContent='flex-start' verticalAlign='flex-start' width='100px' height='40px' margin='20px 0 0 0'>
            <SmallIcon borderRadius='5px'  href="https://www.facebook.com/qphotographymagic" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook-f']} inverse aria-hidden="true" /></SmallIcon>
            <SmallIcon borderRadius='5px' border='1px solid white' href="https://www.instagram.com/qphotographymagic/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} inverse aria-hidden="true" /></SmallIcon>
          </Container>
        </Container>
      </FooterBox>
      <Container lassName='footer-bottom' justifyContent='space-around' display='flex' flexDirection='row' alignItems='center' backgroundColor='#000' padding='20px 0'>
        <Container width='40%'>
          <Link href="/Home/CookiePolicy"><span>Политика за бисквитки</span></Link><br />
          <Link href="/Home/Privacy"><span>Политика за поверителност</span></Link><br />
          <Link href="/Home/GeneralTerms"><span>Общи условия</span></Link>
        </Container>
        <Container color='white' width='40%' alignSelf='flex-start'>
          <Paragraph>Copyright 2023  All Right Reserved</Paragraph>
          <Link href="/"><span>Q-Photography</span></Link>
        </Container>
      </Container>
    </div>
  )
}

export default Footer

const LogoStyle = {
  width: '220px', 
  height: '40px'
}