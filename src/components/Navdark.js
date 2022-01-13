import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"

const Navdark = () => {
  return (
    <Nav>
      <Navlink to="/"></Navlink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <Navlink to={item.link} key={index}>
            {item.title}
          </Navlink>
        ))}
      </NavMenu>
      <Navlink to="/"></Navlink>
    </Nav>
  )
}

export default Navdark

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1300px) / 2);
  z-index: 100;
  position: relative;
`
const Navlink = styled(Link)`
  color: #545454;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #cecece;
    transition: 0.5s ease-out;
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: #545454;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
