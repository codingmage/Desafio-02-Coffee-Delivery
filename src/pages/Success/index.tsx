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
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Success() {
  const { newPaymentDetails } = useContext(CartContext)

  const creditPayment = newPaymentDetails?.paymentMethod === 'creditCard'
  const debitPayment = newPaymentDetails?.paymentMethod === 'debitCard'
  const cashPayment = newPaymentDetails?.paymentMethod === 'cash'

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
                <b>
                  Rua {newPaymentDetails?.street} {newPaymentDetails?.number}{' '}
                  {newPaymentDetails?.additional_information}
                </b>
                <p>
                  {newPaymentDetails?.district} - {newPaymentDetails?.city},{' '}
                  {newPaymentDetails?.state}
                </p>
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
                <BoldText>
                  {creditPayment ? 'Cartão de crédito' : null}
                  {debitPayment ? 'Cartão de débito' : null}
                  {cashPayment ? 'Dinheiro' : null}
                </BoldText>
              </div>
            </TextContainer>
          </AddressContainer>
        </BorderContainer>
        <img src={Scooter} alt="Entregador em uma scooter" />
      </MainContainer>
    </SuccessContainer>
  )
}
