import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GrMenu, GrClose } from 'react-icons/gr';
import { menuData } from "../data/MenuData"
import "../components/styles/global.css"

const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  const closeNav = () => {
    setToggleMenu(false)
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  }, [])


  return (
    <>
      <Nav onMouseLeave={ closeNav }>
      
      <span className="menu-icon" onClick={ toggleNav } onKeyDown={ closeNav } role ="button" tabIndex={0}>
        { toggleMenu ? <GrClose className='close-btn'/> : <GrMenu className='open-btn'/> }
      </span>
      
      <div className='menu-links'>
        {(toggleMenu || screenWidth > 768) && (menuData.map((item, index) => (
          <Navlink to={item.link} key={index}>
            {item.title}
          </Navlink>
        )))}
      </div>
    </Nav>
    </>
  )
}

export default Header

const Nav = styled.nav`
  background: Transparent;
  padding: 0.5rem;
  height: 80px;
  z-index: 100;
  position: relative;
`

const Navlink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #f9f6f2;
  text-decoration: none;
  padding: 1.2rem;
  cursor: pointer;
`
