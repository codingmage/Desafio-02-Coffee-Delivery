import styled from 'styled-components'
import Background from '../../assets/Background.png'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const BackgroundImage = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
`

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  height: 34rem;
  margin-left: 10rem;
  margin-right: 10rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 36.75rem;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  li {
    display: flex;
    align-items: center;
  }
`

export const PositivePointsContainer = styled.ul`
  margin-top: 3.125rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.25rem;
  list-style-type: none;
  padding-left: 0;
  font: 1rem;
  justify-content: center;
  height: 5.25rem;
  line-height: 1.3rem;
`

const ICON_BACKGROUND_COLOR = {
  purple: 'purple',
  darkYellow: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
} as const

interface IconProps {
  iconBackgroundColor: keyof typeof ICON_BACKGROUND_COLOR
}

export const IconContainer = styled.span<IconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  margin-right: 0.75rem;
  padding: 0.5rem;
  gap: 0.5rem;
  background-color: ${(props) =>
    props.theme[ICON_BACKGROUND_COLOR[props.iconBackgroundColor]]};
  display: flex;
  align-items: center;
`

export const CoffeeList = styled.div`
  width: auto;
  flex: 1 0 1;
  padding: 2rem 10rem;

  h2 {
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
  }

  label {
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin: 0 1.25rem;
  }
`

export const AllCoffeesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2.5rem;
`
