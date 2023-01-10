import coffee from '../../assets/coffee.svg'
import { HeaderContainer, NavContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
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
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
