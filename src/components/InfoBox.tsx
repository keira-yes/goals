import { type FC } from 'react'
import styled from 'styled-components'
import Heading from '../ui/Heading'
import { max } from '../ui/Media'
import book from '../assets/img/book.svg'

type InfoBoxProps = {
    type: 'warning' | 'empty'
}

const InfoBoxStyled = styled.aside`
    margin: 24px 0;
    padding: 30px;
    border-radius: 14px;
`

const InfoBoxEmpty = styled(InfoBoxStyled)`
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: var(--light-grey);

    @media ${max.mobile} {
        flex-direction: column;
    }

    div {
        flex: 1;
    }

    figure {
        width: 100px;
    }
`

const InfoBoxWarning = styled(InfoBoxStyled)`
    background-color: var(--red);
    color: var(--white);
`

export const InfoBox: FC<InfoBoxProps> = ({ type }) => {
    if (type === 'warning') {
        return (
            <InfoBoxWarning>
                <Heading as='h2'>So many goals...</Heading>
                <p>You have added a lot of goals. Are you sure you can achieve them all?</p>
            </InfoBoxWarning>
        )
    }

    return (
        <InfoBoxEmpty>
            <div>
                <Heading as='h2'>No Goals</Heading>
                <p>There is no goals yet. Please add a new one.</p>
            </div>
            <figure>
                <img src={book} alt='Book' />
            </figure>
        </InfoBoxEmpty>
    )
}
