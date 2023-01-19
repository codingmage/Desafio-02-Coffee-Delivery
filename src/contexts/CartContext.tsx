import Americano from '../assets/Coffee-Types/Type=Americano.png'
import Arabe from '../assets/Coffee-Types/Type=Árabe.png'
import CafeComLeite from '../assets/Coffee-Types/Type=Café com Leite.png'
import CafeGelado from '../assets/Coffee-Types/Type=Café Gelado.png'
import Capuccino from '../assets/Coffee-Types/Type=Capuccino.png'
import ChocolateQuente from '../assets/Coffee-Types/Type=Chocolate Quente.png'
import Cubano from '../assets/Coffee-Types/Type=Cubano.png'
import Expresso from '../assets/Coffee-Types/Type=Expresso.png'
import ExpressoCremoso from '../assets/Coffee-Types/Type=Expresso Cremoso.png'
import Havaiano from '../assets/Coffee-Types/Type=Havaiano.png'
import Irlandes from '../assets/Coffee-Types/Type=Irlandês.png'
import Latte from '../assets/Coffee-Types/Type=Latte.png'
import Macchiato from '../assets/Coffee-Types/Type=Macchiato.png'
import Mochaccino from '../assets/Coffee-Types/Type=Mochaccino.png'
import { createContext, ReactNode, useState } from 'react'

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
  deleteFromNewCart: ({ id }: SingleCoffee) => void
  sendToCart: ({ id }: SingleCoffee) => void
  allCoffees: SingleCoffee[]
  moreCoffee: ({ id }: SingleCoffee) => void
  lessCoffee: ({ id }: SingleCoffee) => void
  moreCoffeeOnCart: ({ id }: SingleCoffee) => void
  lessCoffeeOnCart: ({ id }: SingleCoffee) => void
  cartQuantity: number
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
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

  function moreCoffeeOnCart({ id }: SingleCoffee) {
    setNewCart(
      newCart.map((coffeeOnCart) => {
        if (coffeeOnCart.id === id) {
          return {
            ...coffeeOnCart,
            coffeeQuantity: coffeeOnCart.coffeeQuantity + 1,
          }
        } else {
          return coffeeOnCart
        }
      }),
    )
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

  function lessCoffeeOnCart({ id }: SingleCoffee) {
    setNewCart(
      newCart.map((coffeeOnCart) => {
        if (coffeeOnCart.id === id && coffeeOnCart.coffeeQuantity > 1) {
          return {
            ...coffeeOnCart,
            coffeeQuantity: coffeeOnCart.coffeeQuantity - 1,
          }
        } else {
          return coffeeOnCart
        }
      }),
    )
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

  function deleteFromNewCart(data: SingleCoffee) {
    setNewCart(newCart.filter((coffee) => coffee.id !== data.id))
  }

  const cartQuantity = newCart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.coffeeQuantity,
    0,
  )

  return (
    <CartContext.Provider
      value={{
        newCart,
        sendToCart,
        allCoffees,
        moreCoffee,
        lessCoffee,
        lessCoffeeOnCart,
        moreCoffeeOnCart,
        deleteFromNewCart,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
