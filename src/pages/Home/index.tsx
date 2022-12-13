import { HomeContainer, DescriptionContainer, TextContainer } from './styles'
import coffeeBig from '../../assets/coffee_big.png'
import { ShoppingCart } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <DescriptionContainer>
        <TextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <ul>
            <li>
              <span>
                <ShoppingCart />
              </span>
              Compra simples e segura
            </li>
            <li>
              <span>
                <ShoppingCart />
              </span>
              Entrega rápida e rastreada
            </li>
            <li>
              <span>
                <ShoppingCart />
              </span>
              Embalagem mantém o café intacto
            </li>
            <li>
              <span>
                <ShoppingCart />
              </span>
              O café chega fresquinho até você
            </li>
          </ul>
        </TextContainer>
        <img src={coffeeBig} alt="Big coffee" className="bigCoffee" />
      </DescriptionContainer>
      <div>
        <h1>Coffee</h1>
        <h2>Coffee 1</h2>
        <h2>Coffee 2</h2>
      </div>
    </HomeContainer>
  )
}
