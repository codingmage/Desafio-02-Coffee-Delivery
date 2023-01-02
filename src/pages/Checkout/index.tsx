import {
  CheckoutContainer,
  CoffeeBought,
  OrderContainer,
  OrderDetail,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderContainer>
        <h3>Complete seu pedido</h3>
        <OrderDetail>
          <div></div>
        </OrderDetail>
      </OrderContainer>
      <CoffeeBought>
        <h3>Cafés selecionados </h3>
        <div></div>
      </CoffeeBought>
    </CheckoutContainer>
  )
}
