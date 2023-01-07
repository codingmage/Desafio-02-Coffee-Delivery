import {
  AddressInput,
  CheckoutContainer,
  CoffeeBought,
  CartContainer,
  OrderDetail,
  PaymentButton,
  PaymentDetail,
  QuantityButton,
  CartButtonWrapper,
} from './styles'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'

import Expresso from '../../assets/Coffee-Types/Type=Expresso.png'

interface CoffeesBought {
  image: string
  name: string
  price: string
  howMany: number
  id: number
}

const cartCoffees: CoffeesBought[] = [
  {
    image: Expresso,
    name: 'Expresso Tradicional',
    price: '9,90',
    id: 1,
    howMany: 1,
  },
  {
    image: Expresso,
    name: 'Latte',
    price: '9,90',
    id: 2,
    howMany: 1,
  },
]

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
              {/*               <div className="optional">Opcional</div> */}
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
          <PaymentButton>
            <button className="cardButton">
              <span className="icon">
                <CreditCard size={16} />
              </span>
              CARTÃO DE CRÉDITO
            </button>
            <button className="cardButton">
              <span className="icon">
                <Bank size={16} />
              </span>
              CARTÃO DE DÉBITO
            </button>
            <button className="cardButton">
              <span className="icon">
                <Money size={16} />
              </span>
              DINHEIRO
            </button>
          </PaymentButton>
        </PaymentDetail>
      </div>
      <CoffeeBought>
        <h2>Cafés selecionados </h2>
        <CartContainer>
          <ul>
            {cartCoffees.map((coffee) => {
              return (
                <li key={coffee.id}>
                  <div className="coffee-holder">
                    <img src={coffee.image} alt="foto do café" />
                    <div>
                      <p>{coffee.name}</p>
                      <CartButtonWrapper>
                        <QuantityButton>
                          <button>
                            <Minus className="symbol" />
                          </button>
                          <span>{coffee.howMany}</span>
                          <button>
                            <Plus className="symbol" />
                          </button>
                        </QuantityButton>
                        <button className="cardButton">
                          <span>
                            <Trash size={16} className="icon" />
                            REMOVER
                          </span>
                        </button>
                      </CartButtonWrapper>
                    </div>
                  </div>
                  <span className="price">R$ {coffee.price}</span>
                  <hr />
                </li>
              )
            })}
          </ul>
          <div className="total-container">
            <span>
              Total de items<span>R$ 29,70</span>
            </span>
            <span>
              Entrega <span>R$ 3,50</span>
            </span>
            <span className="total-amount">
              Total <span>R$ 33,20</span>
            </span>
          </div>
          <button className="confirm-button">CONFIRMAR PEDIDO</button>
        </CartContainer>
      </CoffeeBought>
    </CheckoutContainer>
  )
}
