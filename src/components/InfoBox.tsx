import { type FC } from 'react'

type InfoBoxProps = {
    type: 'warning' | 'info'
}

export const InfoBox: FC<InfoBoxProps> = ({ type }) => {
    if (type === 'warning') {
        return (
            <aside>
                <h2>So many goals...</h2>
                <p>You have added a lot of goals. Are you sure you can achieve them all?</p>
            </aside>
        )
    }

    return (
        <aside>
            <h2>No Goals</h2>
            <p>There is no goals yet. Please add a new one.</p>
        </aside>
    )
}
