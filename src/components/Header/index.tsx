import coffee from '../../assets/coffee.svg'
import { HeaderContainer, NavContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffee} alt="coffee" />
      <NavContainer>
        <div>
          <MapPin
            weight="fill"
            size={24}
            filter="drop-shadow(0px 4px 4px #00000036)"
          />
          Rio de Janeiro, RJ
        </div>
        <button>
          <ShoppingCart weight="fill" size={24} />
        </button>
      </NavContainer>
    </HeaderContainer>
  )
}
