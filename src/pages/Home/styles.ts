import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  .bigCoffee {
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-size: 1.25rem;
  }

  ul {
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
  }

  ul span {
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    margin-right: 0.75rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.purple};
  }
`
