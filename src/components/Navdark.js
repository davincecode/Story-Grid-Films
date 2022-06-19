import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GrMenu, GrClose } from 'react-icons/gr';
import { menuData } from "../data/MenuData"
import "../components/styles/global.css"

const Navdark = () => {

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
      
      <span className="menu-icon-dark" onClick={ toggleNav } onKeyDown={ closeNav } role ="button" tabIndex={0}>
        { toggleMenu ? <GrClose className='close-btn-dark'/> : <GrMenu className='open-btn-dark'/> }
      </span>
      
      <div className='menu-links-dark'>
        {(toggleMenu || screenWidth > 768) && (menuData.map((item, index) => (
          <NavlinkDark to={item.link} key={index}>
            {item.title}
          </NavlinkDark>
        )))}
      </div>
    </Nav>
    </>
  )
}

export default Navdark

const Nav = styled.nav`
  background: Transparent;
  padding: 0.5rem;
  height: 80px;
  z-index: 100;
  position: relative;
`

const NavlinkDark = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #545454;
  text-decoration: none;
  padding: 1.2rem;
  cursor: pointer;
`

