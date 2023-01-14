import React from 'react'

const Header = (props) => {
  return (
    <div style={HeaderBackground(props.backgroundId)}>
    </div>
  )
}

export default Header

const HeaderBackground = (backgroundId) => ({ 
    backgroundImage: `url("/background-${backgroundId}.png")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'red',
    minHeight: '400px',
    minWidth: '100%',
})