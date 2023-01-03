import {
  AddressInput,
  CheckoutContainer,
  CoffeeBought,
  OrderDetail,
  PaymentDetail,
} from './styles'

import { CurrencyDollar, MapPinLine } from 'phosphor-react'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <OrderDetail>
          <header>
            <span className="icon">
              <MapPinLine size={22} />
            </span>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <AddressInput>
            <form action="">
              <input
                type="text"
                placeholder="CEP"
                className="firstBox"
                required
              />
              <input type="text" placeholder="Rua" className="rua" required />
              <div>
                <input
                  type="text"
                  placeholder="Número"
                  className="firstBox"
                  required
                />
                <input
                  type="text"
                  placeholder="Complemento"
                  className="complemento"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Bairro"
                  className="firstBox"
                  required
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  className="cidade"
                  required
                />
                <input type="text" placeholder="UF" className="last" required />
              </div>
            </form>
          </AddressInput>
        </OrderDetail>
        <PaymentDetail>
          <header>
            <span className="icon">
              <CurrencyDollar size={22} />
            </span>
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar.
              </p>
            </div>
          </header>
        </PaymentDetail>
      </div>
      <CoffeeBought>
        <h2>Cafés selecionados </h2>
        <div></div>
      </CoffeeBought>
    </CheckoutContainer>
  )
}
