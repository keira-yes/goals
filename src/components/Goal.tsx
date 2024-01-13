import { type FC, type PropsWithChildren } from 'react'

type GoalProps = PropsWithChildren<{
    id: number
    title: string
    deleteGoalHandler: (id: number) => void
}>

export const Goal: FC<GoalProps> = ({ id, title, deleteGoalHandler, children }) => {
    return (
        <article>
            <h2>{title}</h2>
            {children}
            <button type='button' onClick={() => deleteGoalHandler(id)}>
                X
            </button>
        </article>
    )
}
