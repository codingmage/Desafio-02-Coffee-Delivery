import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;

  a {
    height: 2.3rem;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme.purple};
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    outline: 0;
    outline-color: blue;
    border: 0;
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 8px;
    color: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
  }
`

export const BubbleContainer = styled.span`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-dark']};
  border-radius: 999px;
  width: 1.2rem;
  height: 1.22rem;
  position: absolute;
  top: 1.5rem;
  right: 9.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: bold;
`
