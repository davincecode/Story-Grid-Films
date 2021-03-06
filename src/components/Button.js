import styled from "styled-components"

const StyledButton = styled.button`
  background-color: #212226;
  color: #f9f6f2;
  font-size: 16px;
  padding: 1.2rem 4rem;

  transition: background-color 0.4s;
  margin-bottom: 5rem;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background: #f9f6f2;
    color: #212226;
    border-color: 1px solid #212226;
  }
`

export default StyledButton
