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
import { Link, NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

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

/* const newOrderValidationSchema = zod.object({
  cep: zod.number().min(1, 'Informe seu CEP'),
  rua: zod.string().min(1, 'Informe sua rua'),
  numero: zod.number().min(1, 'Informe seu número'),
  bairro: zod.string().min(1, 'Informe seu bairro'),
  cidade: zod.string().min(1, 'Informe sua cidade'),
  uf: zod.string().min(2).max(2, 'Informe sua UF'),
}) */

interface NewOrderData {
  cep: number
  rua: string
  numero: number
  bairro: string
  cidade: string
  uf: string
  complemento?: string
}

export function Checkout() {
  const { register, handleSubmit, watch, reset } = useForm<NewOrderData>({
    /* resolver: zodResolver(newOrderValidationSchema), */
    defaultValues: {
      cep: undefined,
      rua: '',
      numero: undefined,
      bairro: '',
      cidade: '',
      uf: '',
    },
  })
  function handleCreateNewOrder(data: NewOrderData) {
    console.log(data)
    reset()
  }

  /*   const cep = watch('cep')
  const rua = watch('rua')
  const numero = watch('numero')
  const bairro = watch('bairro')
  const cidade = watch('cidade')
  const uf = watch('uf')
 */
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
                id="cep"
                type="text"
                placeholder="CEP"
                required
                {...register('cep')}
              />
              <BaseInput
                id="rua"
                type="text"
                placeholder="Rua"
                required
                {...register('rua')}
              />
              <div>
                <FirstInput
                  id="numero"
                  type="text"
                  placeholder="Número"
                  required
                  {...register('numero')}
                />
                <BaseInput
                  id="complemento"
                  type="text"
                  placeholder="Complemento"
                  {...register('complemento')}
                />
              </div>
              {/*               <div className="optional">Opcional</div> */}
              <div>
                <FirstInput
                  id="bairro"
                  type="text"
                  placeholder="Bairro"
                  required
                  {...register('bairro')}
                />
                <BaseInput
                  id="cidade"
                  type="text"
                  placeholder="Cidade"
                  required
                  {...register('cidade')}
                />
                <LastInput
                  id="uf"
                  type="text"
                  placeholder="UF"
                  required
                  {...register('uf')}
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
            <ConfirmButton /* disabled  */ type="submit">
              CONFIRMAR PEDIDO
            </ConfirmButton>
            {/*             <NavLink to={'/success'}>
              
            </NavLink> */}
          </CartContainer>
        </CoffeeBought>
      </form>
    </CheckoutContainer>
  )
}
