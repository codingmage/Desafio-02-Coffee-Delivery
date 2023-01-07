import { AddressContainer, MainContainer, SuccessContainer } from './styles'
import Scooter from '../../assets/Illustration.png'
import { Timer, CurrencyDollar, MapPin } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <MainContainer>
        <div className="border">
          <AddressContainer>
            <div className="text-container">
              <span className="icon pin">
                <MapPin size={16} weight="fill" />
              </span>
              <div>
                Entrega em
                <span className="bold-address">
                  Rua João Daniel Martinelli, 102
                </span>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>
            <div className="text-container">
              <span className="icon timer">
                <Timer size={16} />
              </span>
              <div>
                Previsão de entrega
                <p className="bold-text">20 min - 30 min</p>
              </div>
            </div>
            <div className="text-container">
              <span className="icon currency">
                <CurrencyDollar size={16} />
              </span>
              <div>
                Pagamento na entrega
                <p className="bold-text">Cartão de Crédito</p>
              </div>
            </div>
          </AddressContainer>
        </div>
        <img src={Scooter} alt="Delivery Man" />
      </MainContainer>
    </SuccessContainer>
  )
}
