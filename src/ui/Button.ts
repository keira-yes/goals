import styled from 'styled-components'

const Button = styled.button`
  padding: 12px 35px;
  border: 2px solid var(--black);
  border-radius: 8px;
  font-weight: 700;
  font-size: 13px;
  transition: background-color 0.3s ease, color 0.3s ease;
`

export const PrimaryButton = styled(Button)`
  background-color: var(--black);
  color: var(--white);

  &:hover {
    background-color: transparent;
    color: var(--dark);
  }
`
