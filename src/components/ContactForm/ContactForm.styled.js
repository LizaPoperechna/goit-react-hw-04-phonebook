import styled from '@emotion/styled';

export const Form = styled.form`
    padding: 15px;
    width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 1px solid black;
`

export const Input = styled.input`
    width: 285px;
    justify-content: center;
    :hover {
    border-color: lightgrey;
`

export const Button = styled.button`
    width: 130px;
    height: 30px;
    text-align: center;
    justify-content: center;
    background-color: lightgrey;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-right: auto;
    margin-left: auto;
    :hover {
    background-color: dodgerblue;
    border: none;
}`