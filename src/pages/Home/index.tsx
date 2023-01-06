import {
  HomeContainer,
  DescriptionContainer,
  TextContainer,
  CoffeeList,
  BackgroundImage,
  CardBuy,
} from './styles'
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
import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  Plus,
  Minus,
} from 'phosphor-react'

interface SingleCoffee {
  image: string
  id: number
  name: string
  description: string
  tagTradicional?: boolean
  tagGelado?: boolean
  tagComLeite?: boolean
  tagEspecial?: boolean
  tagAlcoolico?: boolean
  price: string
  howMany: number
}

const coffees: SingleCoffee[] = [
  {
    id: Math.random(),
    image: Expresso,
    name: 'Expresso Tradicional',
    tagTradicional: true,
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    howMany: 1,
  },
  {
    id: Math.random(),
    image: Americano,
    name: 'Expresso Americano',
    tagTradicional: true,
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    howMany: 1,
  },
  {
    id: Math.random(),
    image: ExpressoCremoso,
    name: 'Expresso Cremoso',
    tagTradicional: true,
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    howMany: 1,
  },
  {
    id: Math.random(),
    image: CafeGelado,
    name: 'Expresso Gelado',
    tagTradicional: true,
    tagGelado: true,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    howMany: 1,
  },
  {
    id: Math.random(),
    image: CafeComLeite,
    name: 'Café com Leite',
    tagTradicional: true,
    tagComLeite: true,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    howMany: 1,
  },
  {
    id: Math.random(),
    image: Latte,
    name: 'Latte',
    tagTradicional: true,
    tagComLeite: true,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    howMany: 1,
  },
  {
    id: Math.random(),
    image: Capuccino,
    name: 'Capuccino',
    tagTradicional: true,
    tagComLeite: true,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    howMany: 1,
  },
  {
    id: Math.random(),
    image: Macchiato,
    name: 'Macchiato',
    tagTradicional: true,
    tagComLeite: true,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    howMany: 1,
  },
  {
    id: Math.random(),
    image: Mochaccino,
    name: 'Mochaccino',
    tagTradicional: true,
    tagComLeite: true,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    howMany: 1,
  },
  {
    id: Math.random(),
    image: ChocolateQuente,
    name: 'Chocolate Quente',
    tagComLeite: true,
    tagEspecial: true,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    howMany: 1,
  },
  {
    id: Math.random(),
    image: Cubano,
    name: 'Cubano',
    tagGelado: true,
    tagEspecial: true,
    tagAlcoolico: true,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    howMany: 1,
  },
  {
    id: Math.random(),
    image: Havaiano,
    name: 'Havaiano',
    tagEspecial: true,
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    howMany: 1,
  },
  {
    id: Math.random(),
    image: Arabe,
    name: 'Árabe',
    tagEspecial: true,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    howMany: 1,
  },
  {
    id: Math.random(),
    image: Irlandes,
    name: 'Irlandês',
    tagEspecial: true,
    tagAlcoolico: true,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    howMany: 1,
  },
]

export function Home() {
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
            <ul>
              <li>
                <span className={'cart'}>
                  <ShoppingCart weight="fill" color="white" />
                </span>
                Compra simples e segura
              </li>
              <li>
                <span className={'timer'}>
                  <Timer weight="fill" color="white" />
                </span>
                Entrega rápida e rastreada
              </li>
              <li>
                <span className={'package'}>
                  <Package weight="fill" color="white" />
                </span>
                Embalagem mantém o café intacto
              </li>
              <li>
                <span>
                  <Coffee weight="fill" color="white" />
                </span>
                O café chega fresquinho até você
              </li>
            </ul>
          </TextContainer>
          <img src={CoffeeBig} alt="Big coffee" className="bigCoffee" />
        </DescriptionContainer>
      </BackgroundImage>
      <CoffeeList>
        <h2 className="list-title">Nossos cafés</h2>
        <ul>
          {coffees.map((coffee) => {
            return (
              <div className="cardSettings" key={coffee.id}>
                <img src={coffee.image} alt="Foto do Café" />
                <ul className="tagSettings">
                  {coffee.tagTradicional ? (
                    <li className="tag">TRADICIONAL</li>
                  ) : null}
                  {coffee.tagEspecial ? (
                    <li className="tag">ESPECIAL</li>
                  ) : null}
                  {coffee.tagComLeite ? (
                    <li className="tag">COM LEITE</li>
                  ) : null}
                  {coffee.tagAlcoolico ? (
                    <li className="tag">ALCÓOLICO</li>
                  ) : null}
                  {coffee.tagGelado ? <li className="tag">GELADO</li> : null}
                </ul>
                <h3>{coffee.name}</h3>
                <label>{coffee.description}</label>
                <CardBuy>
                  <div className="price">
                    <b>R$</b>
                    <b className="thisPrice">{coffee.price}</b>
                  </div>
                  <div className="toBuy">
                    <span>
                      <Minus className="symbol" />
                      {coffee.howMany}
                      <Plus className="symbol" />
                    </span>
                    <button className="cart">
                      <ShoppingCart weight="fill" size={24} />
                    </button>
                  </div>
                </CardBuy>
              </div>
            )
          })}
        </ul>
      </CoffeeList>
    </HomeContainer>
  )
}
