import {
  HomeContainer,
  DescriptionContainer,
  TextContainer,
  CoffeeList,
  BackgroundImage,
  PositivePointsContainer,
  IconContainer,
  AllCoffeesContainer,
} from './styles'
import CoffeeBig from '../../assets/coffee_big.png'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeCardBase } from './components/CoffeeCardBase'
import { CartContext } from '../../contexts/CartContext'

export function Home() {
  const { allCoffees, newCart } = useContext(CartContext)

  return (
    <HomeContainer>
      <BackgroundImage>
        <DescriptionContainer>
          <TextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
            <PositivePointsContainer>
              <li>
                <IconContainer iconBackgroundColor="darkYellow">
                  <ShoppingCart weight="fill" color="white" />
                </IconContainer>
                Compra simples e segura
              </li>
              <li>
                <IconContainer iconBackgroundColor="yellow">
                  <Timer weight="fill" color="white" />
                </IconContainer>
                Entrega rápida e rastreada
              </li>
              <li>
                <IconContainer iconBackgroundColor="gray">
                  <Package weight="fill" color="white" />
                </IconContainer>
                Embalagem mantém o café intacto
              </li>
              <li>
                <IconContainer iconBackgroundColor="purple">
                  <Coffee weight="fill" color="white" />
                </IconContainer>
                O café chega fresquinho até você
              </li>
            </PositivePointsContainer>
          </TextContainer>
          <img src={CoffeeBig} alt="Big coffee" />
        </DescriptionContainer>
      </BackgroundImage>
      <CoffeeList>
        <h2>Nossos cafés</h2>
        <AllCoffeesContainer>
          {allCoffees.map((coffee) => {
            return (
              <CoffeeCardBase
                key={coffee.id}
                id={coffee.id}
                image={coffee.image}
                name={coffee.name}
                description={coffee.description}
                tagTradicional={coffee.tagTradicional}
                tagGelado={coffee.tagGelado}
                tagComLeite={coffee.tagComLeite}
                tagEspecial={coffee.tagEspecial}
                tagAlcoolico={coffee.tagAlcoolico}
                price={coffee.price}
                coffeeQuantity={coffee.coffeeQuantity}
              />
            )
          })}
        </AllCoffeesContainer>
      </CoffeeList>
      <span>
        {newCart?.map((cart) => {
          return (
            <span key={cart.id}>
              {cart.coffeeQuantity}
              {cart.name}
              {cart.id}
              <br />
            </span>
          )
        })}
      </span>
    </HomeContainer>
  )
}
