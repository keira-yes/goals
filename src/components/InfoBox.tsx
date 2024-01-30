import { type FC } from 'react'
import styled from 'styled-components'
import Heading from '../ui/Heading'
import book from '../assets/img/book.svg'

type InfoBoxProps = {
    type: 'warning' | 'empty'
}

const InfoBoxEmpty = styled.aside`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 30px;
    border-radius: 14px;
    background-color: var(--light-grey);

    div {
        flex: 1;
    }

    figure {
        width: 100px;
    }
`

export const InfoBox: FC<InfoBoxProps> = ({ type }) => {
    if (type === 'warning') {
        return (
            <aside>
                <Heading as='h2'>So many goals...</Heading>
                <p>You have added a lot of goals. Are you sure you can achieve them all?</p>
            </aside>
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
