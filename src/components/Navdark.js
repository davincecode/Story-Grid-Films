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
      
      <div className={toggleMenu ? 'nav-menu__open' : 'nav-menu__close'}>
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

export default Navdark

const Nav = styled.nav`
  background: Transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem calc((100vw-1300px) / 2);
  height: 80px;
  z-index: 100;
  position: relative;
`

const Navlink = styled(Link)`
  color: #545454;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #545454;
    transition: 0.5s ease-out;
  }

  @media (max-width: 300px) {
    display: flex;
  }
`
