import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../data/MenuData"
import "../components/styles/global.css"

const Header = () => {

  return (
    <>
      <Nav>
      <div className='menu-links'>
        {(menuData.map((item, index) => (
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
  color: #545454;
  text-decoration: none;
  padding: 1.2rem;
  cursor: pointer;
`
