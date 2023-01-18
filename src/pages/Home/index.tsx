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
import { QuantityButton } from '../Checkout/styles'
import CoffeeBig from '../../assets/coffee_big.png'
import Americano from '../../assets/Coffee-Types/Type=Americano.png'
import Arabe from '../../assets/Coffee-Types/Type=Árabe.png'
import CafeComLeite from '../../assets/Coffee-Types/Type=Café com Leite.png'
import CafeGelado from '../../assets/Coffee-Types/Type=Café Gelado.png'
import Capuccino from '../../assets/Coffee-Types/Type=Capuccino.png'
import ChocolateQuente from '../../assets/Coffee-Types/Type=Chocolate Quente.png'
import Cubano from '../../assets/Coffee-Types/Type=Cubano.png'
import Expresso from '../../assets/Coffee-Types/Type=Expresso.png'
import ExpressoCremoso from '../../assets/Coffee-Types/Type=Expresso Cremoso.png'
import Havaiano from '../../assets/Coffee-Types/Type=Havaiano.png'
import Irlandes from '../../assets/Coffee-Types/Type=Irlandês.png'
import Latte from '../../assets/Coffee-Types/Type=Latte.png'
import Macchiato from '../../assets/Coffee-Types/Type=Macchiato.png'
import Mochaccino from '../../assets/Coffee-Types/Type=Mochaccino.png'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { createContext, useState } from 'react'
import { CoffeeCardBase } from './components/CoffeeCardBase'

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

const initialCoffees: SingleCoffee[] = [
  {
    id: 1,
    image: Expresso,
    name: 'Expresso Tradicional',
    tagTradicional: true,
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    coffeeQuantity: 1,
  },
  {
    id: 2,
    image: Americano,
    name: 'Expresso Americano',
    tagTradicional: true,
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    coffeeQuantity: 1,
  },
  {
    id: 3,
    image: ExpressoCremoso,
    name: 'Expresso Cremoso',
    tagTradicional: true,
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    coffeeQuantity: 1,
  },
  {
    id: 4,
    image: CafeGelado,
    name: 'Expresso Gelado',
    tagTradicional: true,
    tagGelado: true,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    coffeeQuantity: 1,
  },
  {
    id: 5,
    image: CafeComLeite,
    name: 'Café com Leite',
    tagTradicional: true,
    tagComLeite: true,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    coffeeQuantity: 1,
  },
  {
    id: 6,
    image: Latte,
    name: 'Latte',
    tagTradicional: true,
    tagComLeite: true,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    coffeeQuantity: 1,
  },
  {
    id: 7,
    image: Capuccino,
    name: 'Capuccino',
    tagTradicional: true,
    tagComLeite: true,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    coffeeQuantity: 1,
  },
  {
    id: 8,
    image: Macchiato,
    name: 'Macchiato',
    tagTradicional: true,
    tagComLeite: true,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    coffeeQuantity: 1,
  },
  {
    id: 9,
    image: Mochaccino,
    name: 'Mochaccino',
    tagTradicional: true,
    tagComLeite: true,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    coffeeQuantity: 1,
  },
  {
    id: 10,
    image: ChocolateQuente,
    name: 'Chocolate Quente',
    tagComLeite: true,
    tagEspecial: true,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    coffeeQuantity: 1,
  },
  {
    id: 11,
    image: Cubano,
    name: 'Cubano',
    tagGelado: true,
    tagEspecial: true,
    tagAlcoolico: true,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    coffeeQuantity: 1,
  },
  {
    id: 12,
    image: Havaiano,
    name: 'Havaiano',
    tagEspecial: true,
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    coffeeQuantity: 1,
  },
  {
    id: 13,
    image: Arabe,
    name: 'Árabe',
    tagEspecial: true,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    coffeeQuantity: 1,
  },
  {
    id: 14,
    image: Irlandes,
    name: 'Irlandês',
    tagEspecial: true,
    tagAlcoolico: true,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    coffeeQuantity: 1,
  },
]

interface CartContextType {
  newCart: SingleCoffee[] | undefined
  sendToCart: ({ id }: SingleCoffee) => void
  allCoffees: SingleCoffee[]
  moreCoffee: ({ id }: SingleCoffee) => void
  lessCoffee: ({ id }: SingleCoffee) => void
}

export const CartContext = createContext({} as CartContextType)

export function Home() {
  const [allCoffees, setAllCoffees] = useState(initialCoffees)
  const [newCart, setNewCart] = useState<SingleCoffee[]>([])

  function moreCoffee({ id }: SingleCoffee) {
    setAllCoffees(
      allCoffees.map((coffeetype) => {
        if (coffeetype.id === id) {
          return {
            ...coffeetype,
            coffeeQuantity: coffeetype.coffeeQuantity + 1,
          }
        } else {
          return coffeetype
        }
      }),
    )
    console.log(newCart)
  }

  function lessCoffee({ id }: SingleCoffee) {
    setAllCoffees(
      allCoffees.map((coffeetype) => {
        if (coffeetype.id === id && coffeetype.coffeeQuantity > 1) {
          return {
            ...coffeetype,
            coffeeQuantity: coffeetype.coffeeQuantity - 1,
          }
        } else {
          return coffeetype
        }
      }),
    )
    console.log(newCart)
  }

  function sendToCart(data: SingleCoffee) {
    const coffeeAlreadyThere = newCart.find((isThere) => isThere.id === data.id)
    if (coffeeAlreadyThere) {
      setNewCart(
        newCart.map((isThere) =>
          isThere.id === data.id
            ? {
                ...coffeeAlreadyThere,
                coffeeQuantity:
                  coffeeAlreadyThere.coffeeQuantity + data.coffeeQuantity,
              }
            : isThere,
        ),
      )
      console.log(newCart)
    } else {
      setNewCart((state) => [...state, data])
      console.log(newCart)
    }
  }
  /*   const [cart, setCart] = useState<SingleCoffee[]>([])

  function handleSendToNewCart(data: SingleCoffee) { */
  /*     const newCart: SingleCoffee = {
    } 
     setCart([...cart, newCart]) 
    } 
    
    const coffeeAlreadyThere = newCart.find((isThere) => isThere.id === data.id)
    if (coffeeAlreadyThere) {
      setNewCart(
        newCart.map((isThere) =>
          isThere.id === data.id
            ? { ...coffeeAlreadyThere, howMany: coffeeAlreadyThere.howMany + 1 }
            : isThere,
        ),
      )
    } else {
      setNewCart((state) => [...state, data])
      console.log(newCart)
    }
    
    
    */

  return (
    <HomeContainer>
      <CartContext.Provider
        value={{ newCart, sendToCart, allCoffees, moreCoffee, lessCoffee }}
      >
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
          {newCart.map((cart) => {
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
      </CartContext.Provider>
    </HomeContainer>
  )
}
