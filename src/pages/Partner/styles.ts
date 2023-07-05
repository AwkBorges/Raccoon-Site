import styled from 'styled-components';


export const Title = styled.h1`

    color: #FFFFFF;
    font-family: "Roboto", sans-serif;
    margin: 70px;
    text-align: center;

`
export const FormContainer = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;

`;
    
export const FormGroup = styled.div`

    margin-bottom: 20px;

`;
    
export const Label = styled.label`

    margin-bottom: 5px;
    font-weight: bold;

`;
    
export const Input = styled.input`

    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;

`;
    
export const TextArea = styled.textarea`

    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;

`;
    
export const CheckboxGroup = styled.div`

    display: flex;
    align-items: center;

`;
    
export const CheckboxLabel = styled.label`

    margin-right: 10px;

`;
    
export const SubmitButton = styled.button`

    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

`;