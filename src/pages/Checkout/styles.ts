import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-left: 10rem;
  margin-right: 10rem;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }

  header {
    display: flex;
  }

  header span {
    margin-right: 0.715rem;
  }

  header div {
    display: flex;
    flex-direction: column;
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

  .icon {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddressInput = styled.div`
  margin-top: 2rem;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  div {
    display: flex;
    flex: auto;
    flex-grow: 1;
    gap: 0.75rem;
    justify-content: space-between;
  }

  .cidade {
    flex-grow: 1;
  }

  .complemento {
    flex-grow: 1;
  }

  .firstBox {
    width: 12.5rem;
  }

  .last {
    width: 3.75rem;
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
`

export const PaymentDetail = styled.div`
  display: flex;
  flex-direction: row;
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

export const CoffeeBought = styled.div`
  div {
    width: 16rem;
    height: 17.3rem;
    background-color: ${(props) => props.theme['base-card']};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 6px 36px;
  }
`
