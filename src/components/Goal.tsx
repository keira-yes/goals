import { type FC, type PropsWithChildren } from 'react'

type GoalProps = PropsWithChildren<{
    id: number
    title: string
    onDeleteGoal: (id: number) => void
}>

export const Goal: FC<GoalProps> = ({ id, title, onDeleteGoal, children }) => {
    return (
        <article>
            <h2>{title}</h2>
            {children}
            <button type='button' onClick={() => onDeleteGoal(id)}>
                X
            </button>
        </article>
    )
}
