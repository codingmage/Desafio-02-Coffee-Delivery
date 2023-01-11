import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  margin-left: 10rem;
  margin-right: 10rem;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;

  form {
    display: flex;
    gap: 2rem;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 2.5rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }

  .icon {
    color: ${(props) => props.theme.purple};
    display: flex;
  }
`

export const CardButton = styled.button`
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  border-radius: 6px;
  padding: 1rem;
  gap: 0.75rem;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  line-height: 160%;
  border: 0;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const ButtonSelection = styled(CardButton)`
  &:focus {
    background-color: ${(props) => props.theme['purple-light']};
    outline: 1px solid;
    outline-color: ${(props) => props.theme.purple};
  }

  /* .active {
        background-color: ${(props) => props.theme['purple-light']};
    outline: 1px solid;
    outline-color: ${(props) => props.theme.purple};
  }
  check bookmark active element */
`

export const LabelContainer = styled.label`
  display: flex;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const OrderDetail = styled.div`
  width: 40rem;
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 6px 36px;
  height: fit-content;
  margin-top: 0.938rem;
  padding: 2.5rem;
  margin-bottom: 2rem;
`

export const AddressInput = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    flex: auto;
    flex-grow: 1;
    gap: 0.75rem;
    justify-content: space-between;
  }

  input {
    background-color: ${(props) => props.theme['base-button']};
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 0.75rem;
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  input:focus {
    outline: 1px solid;
    outline-color: ${(props) => props.theme['yellow-dark']};
  }

  /*   .optional {
    width: 0;
    height: 0;
    position: relative;
    left: 88%;
    top: -3rem;
    color: ${(props) => props.theme['base-label']};
    font-style: italic;
  } */
`

export const BaseInput = styled.input`
  background-color: ${(props) => props.theme['base-button']};
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme['base-text']};
  font-weight: 400;
  border: 1px solid #e6e5e5;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0.75rem;
  flex-grow: 1;
`

export const FirstInput = styled(BaseInput)`
  max-width: 12.5rem;
`

export const LastInput = styled(BaseInput)`
  max-width: 3.8rem;
`

export const PaymentDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  height: fit-content;
  margin-top: 0.938rem;
  padding: 2.5rem;
  margin-bottom: 2rem;

  .icon {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  flex-grow: 0;
`

export const CoffeeBought = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
`

export const CartContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  width: 28rem;
  height: fit-content;
  background-color: ${(props) => props.theme['base-card']};
  justify-content: flex-start;
  border-radius: 6px 36px;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 23rem;
  }

  li {
    list-style: none;
  }

  hr {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border: 1px solid;
    color: ${(props) => props.theme['base-button']};
  }

  div span {
    display: flex;
    justify-content: space-between;
  }

  a {
    flex-grow: 1;
    width: 100%;
  }
`

export const CoffeeContainer = styled.div`
  display: flex;
  align-items: center;

  div p {
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }
`

export const CoffeePrice = styled.span`
  float: inline-end;
  margin-top: -3.8rem;
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  span:nth-child(3) {
    size: 1.25rem;
    font-weight: bold;
  }
`

export const CartButtonWrapper = styled.span`
  display: flex;
  gap: 0.5rem;
  height: 2rem;
  justify-content: center;

  button span {
    display: flex;
    gap: 0.4rem;
  }
`

export const QuantityButton = styled.span`
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.531rem 0.5rem;
  line-height: 20.8px;
  align-items: center;
  gap: 0.3rem;
  border-radius: 6px;
  width: 4.5rem;

  span {
    margin-right: 0.15rem;
  }

  button {
    color: ${(props) => props.theme.purple};
    vertical-align: bottom;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0;
    outline: none;
  }

  button:hover {
    color: ${(props) => props.theme['purple-dark']};
    box-shadow: none;
    background-color: ${(props) => props.theme['base-button']};
    cursor: pointer;
  }

  button:first-child {
    margin-right: 0.25rem;
  }
`

export const ConfirmButton = styled.button`
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme.yellow};
  border: 0;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`
