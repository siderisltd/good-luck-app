import React from 'react'
import logo from '../../assets/logo.png';

const Header = (props) => {
  return (
    <div>
      <div style={Navigation} className="header-navigation" >
        <img src={logo} style={Logo}/>
      </div>
      <div style={HeaderBackground(props.backgroundId)}>
      </div>
    </div>
  )
}

export default Header

const Logo = {
  maxWidth: '100%',
  verticalAlign: 'middle',
  maxHeight: '27px',
  margin: '1em'
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