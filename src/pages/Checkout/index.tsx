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
  BaseInput,
  FirstInput,
  LabelContainer,
  CardButton,
  ButtonSelection,
  LastInput,
  CoffeeContainer,
  CoffeePrice,
  TotalContainer,
  ConfirmButton,
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
      <form action="">
        <div>
          <h2>Complete seu pedido</h2>
          <OrderDetail>
            <LabelContainer>
              <span>
                <MapPinLine size={22} />
              </span>
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </LabelContainer>
            <AddressInput>
              <form action="">
                <FirstInput type="text" placeholder="CEP" required />
                <BaseInput type="text" placeholder="Rua" required />
                <div>
                  <FirstInput type="text" placeholder="Número" required />
                  <BaseInput type="text" placeholder="Complemento" />
                </div>
                {/*               <div className="optional">Opcional</div> */}
                <div>
                  <FirstInput type="text" placeholder="Bairro" required />
                  <BaseInput type="text" placeholder="Cidade" required />
                  <LastInput type="text" placeholder="UF" required />
                </div>
              </form>
            </AddressInput>
          </OrderDetail>
          <PaymentDetail>
            <LabelContainer>
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
            </LabelContainer>
            <PaymentButton>
              {/* add active button class function */}
              <ButtonSelection type="button">
                <span className="icon">
                  <CreditCard size={16} />
                </span>
                CARTÃO DE CRÉDITO
              </ButtonSelection>
              <ButtonSelection type="button">
                <span className="icon">
                  <Bank size={16} />
                </span>
                CARTÃO DE DÉBITO
              </ButtonSelection>
              <ButtonSelection type="button">
                <span className="icon">
                  <Money size={16} />
                </span>
                DINHEIRO
              </ButtonSelection>
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
                    <CoffeeContainer>
                      <img src={coffee.image} alt="foto do café" />
                      <div>
                        <p>{coffee.name}</p>
                        <CartButtonWrapper>
                          <QuantityButton>
                            <button type="button">
                              <Minus />
                            </button>
                            <span>{coffee.howMany}</span>
                            <button type="button">
                              <Plus />
                            </button>
                          </QuantityButton>
                          <CardButton type="button">
                            <span>
                              <Trash size={16} className="icon" />
                              REMOVER
                            </span>
                          </CardButton>
                        </CartButtonWrapper>
                      </div>
                    </CoffeeContainer>
                    <CoffeePrice>R$ {coffee.price}</CoffeePrice>
                    <hr />
                  </li>
                )
              })}
            </ul>
            <TotalContainer>
              <span>
                Total de items<span>R$ 29,70</span>
              </span>
              <span>
                Entrega <span>R$ 3,50</span>
              </span>
              <span>
                Total <span>R$ 33,20</span>
              </span>
            </TotalContainer>
            <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
          </CartContainer>
        </CoffeeBought>
      </form>
    </CheckoutContainer>
  )
}
