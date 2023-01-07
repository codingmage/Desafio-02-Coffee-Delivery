import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 10rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const MainContainer = styled.main`
  display: flex;
  margin-top: 2.5rem;
  gap: 6.375rem;
  justify-content: space-around;

  img {
    width: 30.75rem;
    height: 18.313rem;
  }

  .border {
    padding: 0.75rem;
    background: linear-gradient(to right, #dbac2c, #8047f8);
    border-radius: 6px 36px;
  }
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme.background};
  /*   border: 1px solid;
  border-radius: 6px 36px;
  border-image: linear-gradient(to right, #dbac2c, #8047f8) 1; */

  p {
    font-size: 1rem;
  }

  .bold-address {
    font-weight: bold;
    margin-left: 5px;
  }

  .bold-text {
    font-weight: bold;
  }

  .text-container {
    display: flex;
    align-items: center;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    margin-right: 0.75rem;
    padding: 0.5rem;
    gap: 0.5rem;
    border-radius: 999px;
    color: ${(props) => props.theme.background};
  }

  .pin {
    background-color: ${(props) => props.theme.purple};
  }

  .timer {
    background-color: ${(props) => props.theme.yellow};
  }

  .currency {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
