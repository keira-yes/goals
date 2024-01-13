import { type FC } from 'react'
import { Goal } from './Goal'
import { GoalType } from '../App'

type GoalsProps = {
    goals: GoalType[]
}

export const Goals: FC<GoalsProps> = ({ goals }) => {
    return (
        <section>
            <h2>Goals</h2>
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <Goal title={goal.title}>{goal.description}</Goal>
                    </li>
                ))}
            </ul>
        </section>
    )
}
