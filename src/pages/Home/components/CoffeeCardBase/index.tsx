import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
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
  coffeeQuantity: number
}

export function CoffeeCardBase(coffee: SingleCoffee) {
  const { sendToCart, moreCoffee, lessCoffee } = useContext(CartContext)

  function handleMoreCoffee({ id }: SingleCoffee) {
    moreCoffee(coffee)
  }

  function handleLessCoffee() {
    lessCoffee(coffee)
  }

  function handleAddToCart(data: SingleCoffee) {
    sendToCart(data)
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
            {coffee.coffeeQuantity}
            <button onClick={() => handleMoreCoffee(coffee)}>
              <Plus className="two" />
            </button>
          </QuantityButton>
          <CartButton onClick={() => handleAddToCart(coffee)}>
            <ShoppingCart weight="fill" size={24} />
          </CartButton>
        </div>
      </CardBuy>
    </CardSettings>
  )
}
