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

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
/* import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod' */
import { useContext } from 'react'
import {
  CartContext,
  NewOrderData,
  SingleCoffee,
} from '../../contexts/CartContext'

/* const newOrderValidationSchema = zod.object({
  zip_code: zod.number().min(8).max(8, 'Informe seu CEP'),
  street: zod.string().min(1, 'Informe sua Rua'),
  number: zod.number().min(1, 'Informe seu número'),
  district: zod.string().min(1, 'Informe seu Bairro'),
  city: zod.string().min(1, 'Informe sua Cidade'),
  state: zod.string().min(2).max(2, 'Informe sua UF'),
}) */

export function Checkout() {
  const navigate = useNavigate()

  const {
    newCart,
    moreCoffeeOnCart,
    lessCoffeeOnCart,
    deleteFromNewCart,
    cartValue,
    createNewOrder,
  } = useContext(CartContext)

  const { register, handleSubmit, watch, reset /* formState */ } =
    useForm<NewOrderData>({
      /*       resolver: zodResolver(newOrderValidationSchema), */
      defaultValues: {
        zip_code: undefined,
        street: '',
        number: undefined,
        district: '',
        city: '',
        state: '',
        paymentMethod: '',
      },
    })

  function handleCreateNewOrder(data: NewOrderData) {
    createNewOrder(data)
    reset()
    navigate('../Success')
  }

  function handleMoreCoffeeOnCart(coffee: SingleCoffee) {
    moreCoffeeOnCart(coffee)
  }

  function handleLessCoffeeOnCart(coffee: SingleCoffee) {
    lessCoffeeOnCart(coffee)
  }

  function handleDeleteCoffee(coffee: SingleCoffee) {
    deleteFromNewCart(coffee)
  }

  const convertedItemPrice = cartValue.toFixed(2).replace('.', ',')
  /*   const zip_code = watch('zip_code')
  const street = watch('street')
  const number = watch('number')
  const district = watch('district')
  const city = watch('city')
  const state = watch('state')
 */

  const emptyCart = newCart?.length === 0

  const sum = cartValue + 3.5
  const convertedSum = sum.toFixed(2).replace('.', ',')

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
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
              <FirstInput
                id="zip_code"
                type="text"
                placeholder="CEP"
                required
                minLength={8}
                maxLength={8}
                {...register('zip_code')}
              />
              <BaseInput
                id="street"
                type="text"
                placeholder="Rua"
                required
                {...register('street')}
              />
              <div>
                <FirstInput
                  id="number"
                  type="number"
                  placeholder="Número"
                  required
                  {...register('number')}
                />
                <BaseInput
                  id="additional_information"
                  type="text"
                  placeholder="Complemento"
                  {...register('additional_information')}
                />
              </div>
              {/*               <div className="optional">Opcional</div> */}
              <div>
                <FirstInput
                  id="district"
                  type="text"
                  placeholder="Bairro"
                  required
                  {...register('district')}
                />
                <BaseInput
                  id="city"
                  type="text"
                  placeholder="Cidade"
                  required
                  {...register('city')}
                />
                <LastInput
                  id="state"
                  type="text"
                  placeholder="UF"
                  required
                  minLength={2}
                  maxLength={2}
                  {...register('state')}
                />
              </div>
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
              <ButtonSelection>
                <input
                  type="radio"
                  id="creditCard"
                  value="creditCard"
                  required
                  {...register('paymentMethod')}
                />
                <label htmlFor="creditCard">
                  <span className="icon">
                    <CreditCard size={16} />
                  </span>
                  CARTÃO DE CRÉDITO
                </label>
              </ButtonSelection>
              <ButtonSelection>
                <input
                  type="radio"
                  id="debitCard"
                  value="debitCard"
                  {...register('paymentMethod')}
                />
                <label htmlFor="debitCard">
                  <span className="icon">
                    <Bank size={16} />
                  </span>
                  CARTÃO DE DÉBITO
                </label>
              </ButtonSelection>
              <ButtonSelection>
                <input
                  type="radio"
                  id="cash"
                  value="cash"
                  {...register('paymentMethod')}
                />
                <label htmlFor="cash">
                  <span className="icon">
                    <Money size={16} />
                  </span>
                  DINHEIRO
                </label>
              </ButtonSelection>
            </PaymentButton>
          </PaymentDetail>
        </div>
        <CoffeeBought>
          <h2>Cafés selecionados </h2>
          <CartContainer>
            <ul>
              {newCart?.map((coffee) => {
                return (
                  <li key={coffee.id}>
                    <CoffeeContainer>
                      <img src={coffee.image} alt="foto do café" />
                      <div>
                        <p>{coffee.name}</p>
                        <CartButtonWrapper>
                          <QuantityButton>
                            <button
                              type="button"
                              onClick={() => handleLessCoffeeOnCart(coffee)}
                            >
                              <Minus />
                            </button>
                            <span>{coffee.coffeeQuantity}</span>
                            <button
                              type="button"
                              onClick={() => handleMoreCoffeeOnCart(coffee)}
                            >
                              <Plus />
                            </button>
                          </QuantityButton>
                          <CardButton
                            type="button"
                            onClick={() => handleDeleteCoffee(coffee)}
                          >
                            <span>
                              <Trash size={16} className="icon" />
                              REMOVER
                            </span>
                          </CardButton>
                        </CartButtonWrapper>
                      </div>
                    </CoffeeContainer>
                    <CoffeePrice>
                      R${' '}
                      {(coffee.price * coffee.coffeeQuantity)
                        .toFixed(2)
                        .replace('.', ',')}
                    </CoffeePrice>
                    <hr />
                  </li>
                )
              })}
            </ul>
            <TotalContainer>
              <span>
                Total de items
                <span>R$ {convertedItemPrice}</span>
              </span>
              <span>
                Entrega <span>R$ 3,50</span>
              </span>
              <span>
                Total <span>R$ {convertedSum}</span>
              </span>
            </TotalContainer>
            <ConfirmButton disabled={emptyCart} type="submit">
              CONFIRMAR PEDIDO
            </ConfirmButton>
          </CartContainer>
        </CoffeeBought>
      </form>
    </CheckoutContainer>
  )
}
