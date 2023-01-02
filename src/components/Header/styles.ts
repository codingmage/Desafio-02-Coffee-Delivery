import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
`
export const NavContainer = styled.span`
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

  button {
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
