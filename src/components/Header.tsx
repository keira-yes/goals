import { type FC } from 'react'
import styled from 'styled-components'
import user from '../assets/img/user.svg'
import Heading from '../ui/Heading'
import { max } from '../ui/Media'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 30px 30px 0;
  border-radius: 14px;
  background-color: var(--light-grey);

  @media ${max.mobile} {
    flex-direction: column;
    align-items: center;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 30px;

    @media ${max.mobile} {
      padding-bottom: 0;
      text-align: center;
    }
  }

  h1 {
    margin-bottom: 10px;
  }

  figure {
    width: 32%;
    max-width: 175px;
    margin-top: auto;

    @media ${max.mobile} {
      width: 40%;
    }
  }
`

export const Header: FC = () => {
  return (
    <HeaderStyled>
      <div>
        <Heading as='h1'>Hello Josh!</Heading>
        <p>It's good to see you again.</p>
      </div>
      <figure>
        <img src={user} alt='User' />
      </figure>
    </HeaderStyled>
  )
}
