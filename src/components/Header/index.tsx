import coffee from '../../assets/coffee.svg'
import { BubbleContainer, HeaderContainer, NavContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { newCart, cartQuantity } = useContext(CartContext)

  const isNewCartEmpty = newCart?.length === 0

  const showNonEmptyCart = <BubbleContainer>{cartQuantity}</BubbleContainer>

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffee} alt="coffee" />
      </NavLink>
      <NavContainer>
        <div>
          <MapPin
            weight="fill"
            size={24}
            filter="drop-shadow(0px 4px 4px #00000036)"
          />
          Rio de Janeiro, RJ
        </div>
        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart weight="fill" size={24} />
          {isNewCartEmpty ? null : showNonEmptyCart}
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
