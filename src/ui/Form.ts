import styled from 'styled-components'

export const Form = styled.form`
    padding: 30px;
    border-radius: 14px;
    background-color: var(--light-grey);

    Button {
        width: 100%;
        margin-top: 10px;
    }
`

export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px 15px;
    border: 2px solid var(--black);
    border-radius: 8px;
    background-color: transparent;
`

export const Label = styled.label`
    display: block;
    font-family: var(--font-secondary);
`
