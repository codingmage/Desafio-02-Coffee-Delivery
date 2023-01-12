import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { QuantityButton } from '../../../Checkout/styles'
import {
  CardBuy,
  CardSettings,
  CartButton,
  TagContainer,
  Tags,
  ThisCoffeePrice,
} from './styles'

export interface SingleCoffee {
  image: string
  id: number
  name: string
  description?: string
  tagTradicional?: boolean
  tagGelado?: boolean
  tagComLeite?: boolean
  tagEspecial?: boolean
  tagAlcoolico?: boolean
  price: string
  howMany: number
}

export function CoffeeCardBase(coffee: SingleCoffee) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(coffee.howMany)
  const [cart, setCart] = useState<SingleCoffee[]>([])

  function handleMoreCoffee() {
    setCoffeeQuantity((state) => {
      return state + 1
    })
  }

  function handleLessCoffee() {
    if (coffeeQuantity === 1) {
      return console.log('Já é 1')
    } else {
      setCoffeeQuantity((state) => {
        return state - 1
      })
    }
  }

  function handleAddToCart({ id, name, price, howMany, image }: SingleCoffee) {
    setCart([...cart, { id, name, price, howMany, image }])
    // tentar mover a funcao pro home que tem o array com os cafes e adaptar o codigo aqui
    // improvavel pq se nao ele n mostraria nada no resto... hmm...
    console.log(cart)
    /*     const exist = cart.find((onecoffee) => onecoffee.id === data.id)
    if (exist) {
      setCart(
        cart.map((onecoffee) =>
          onecoffee.id === data.id
            ? {
                ...exist,
                howMany: exist.howMany + coffeeQuantity,
              }
            : onecoffee,
        ),
      )
    } else {
      setCart((state) => [...state, { ...data.howMany }])
    }

    console.log(cart)
 */
    console.log(coffee.id, coffeeQuantity)
  }

  return (
    <CardSettings key={coffee.id}>
      <img src={coffee.image} alt="Foto do Café" />
      <TagContainer>
        {coffee.tagTradicional ? <Tags>TRADICIONAL</Tags> : null}
        {coffee.tagEspecial ? <Tags>ESPECIAL</Tags> : null}
        {coffee.tagComLeite ? <Tags>COM LEITE</Tags> : null}
        {coffee.tagAlcoolico ? <Tags>ALCÓOLICO</Tags> : null}
        {coffee.tagGelado ? <Tags>GELADO</Tags> : null}
      </TagContainer>
      <h3>{coffee.name}</h3>
      <label>{coffee.description}</label>
      <CardBuy>
        <ThisCoffeePrice>
          <b>R$</b>
          <b>{coffee.price}</b>
        </ThisCoffeePrice>
        <div>
          <QuantityButton>
            <button onClick={handleLessCoffee}>
              <Minus />
            </button>
            {coffeeQuantity}
            <button onClick={handleMoreCoffee}>
              <Plus className="two" />
            </button>
          </QuantityButton>
          <CartButton onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={24} />
          </CartButton>
        </div>
      </CardBuy>
    </CardSettings>
  )
}
