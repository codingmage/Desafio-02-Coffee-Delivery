import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
`

export const OrderContainer = styled.div``

export const OrderDetail = styled.div`
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
