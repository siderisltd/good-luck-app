import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from '../Link/Link.style';

const Header = (props) => {
  return (
    <React.Fragment>
      <div style={Navigation} className="header-navigation" >
        <Link href='https://qphotography.eu' target='_blank' userSelect='none'><img src={logo} style={Logo} /></Link>
      </div>
      <div style={HeaderBackground(props.backgroundId)}>
      </div>
    </React.Fragment>
  )
}

export default Header

const Logo = {
  maxWidth: '100%',
  verticalAlign: 'middle',
  maxHeight: '27px',
  margin: '1em',
}

const Navigation = {
  zIndex: '1',
  maxHeight: '57px',
  boxShadow: '0px 0px 5px 0px #111',
  width: '100%',
  position: 'fixed',
  top: '0',
  backgroundColor: 'black'
}

const HeaderBackground = (backgroundId) => ({
  backgroundImage: `url("/background-${backgroundId}.png")`,
  minHeight: '215px',
  minWidth: '100%',
  backgroundSize: '100%',
  marginTop: '57px',
  backgroundSize: 'cover'
})