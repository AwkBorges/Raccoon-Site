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
`

export const WrapContainer = styled.div`

  display: flex;
  flex-wrap: wrap;

`

export const Title = styled.h2`


    color: #FFFFFF;
    font-family: "Roboto", sans-serif;

`

export const AboutCard = styled.div`

  flex: 0 0 29%;
  padding: 40px 40px 40px 40px;
  box-sizing: border-box;
  background: #2D2D2D;
  margin: 15px 20px 15px 20px;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  text-align: center;

`

export const TextAbout = styled.p`

  color: white;
  font-family: "Roboto", sans-serif;
  font-style: italic;


`