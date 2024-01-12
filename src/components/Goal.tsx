import { type FC, type PropsWithChildren } from 'react'

type GoalProps = PropsWithChildren<{ title: string }>

export const Goal: FC<GoalProps> = ({ title, children }) => {
    return (
        <article>
            <h2>{title}</h2>
            {children}
        </article>
    )
}
