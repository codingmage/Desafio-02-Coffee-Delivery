import {
  AddressContainer,
  BoldText,
  BorderContainer,
  IconContainer,
  MainContainer,
  SuccessContainer,
  TextContainer,
} from './styles'
import Scooter from '../../assets/Illustration.png'
import { Timer, CurrencyDollar, MapPin } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <MainContainer>
        <BorderContainer>
          <AddressContainer>
            <TextContainer>
              <IconContainer className="pin">
                <MapPin size={16} weight="fill" />
              </IconContainer>
              <div>
                Entrega em
                <b>Rua João Daniel Martinelli, 102</b>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </TextContainer>
            <TextContainer>
              <IconContainer className="timer">
                <Timer size={16} />
              </IconContainer>
              <div>
                Previsão de entrega
                <BoldText>20 min - 30 min</BoldText>
              </div>
            </TextContainer>
            <TextContainer>
              <IconContainer className="currency">
                <CurrencyDollar size={16} />
              </IconContainer>
              <div>
                Pagamento na entrega
                <BoldText>Cartão de Crédito</BoldText>
              </div>
            </TextContainer>
          </AddressContainer>
        </BorderContainer>
        <img src={Scooter} alt="Entregador em uma scooter" />
      </MainContainer>
    </SuccessContainer>
  )
}
