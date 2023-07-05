import styled from 'styled-components';

export const GlobalContainer = styled.div`
      
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #8B00FF;
`

export const ColumnContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const RowContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 1350px) {
      width: 99%
    }
    @media (max-width: 900px) {
      flex-direction: column;
    }

`

export const GridContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  
`

export const Title = styled.h2`


    color: #FFFFFF;
    font-family: "Roboto", sans-serif;

`

export const AboutCard = styled.div`

  width: 300px;
  padding: 50px;
  margin: 15px;
  background: #2D2D2D;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  text-align: center;

`

export const NumberCard = styled.div`

  background: #2D2D2D;
  width: 350px;
  height: 150px;
  margin: 20px;
  padding: 30px 20px 10px 20px;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  
`
export const Number = styled.p`


  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-weight: bold;
  :hover{
    color: #8B00FF;
  }


`

export const TextAbout = styled.p`

  color: white;
  font-family: "Roboto", sans-serif;
  font-style: italic;


`