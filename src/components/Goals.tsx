import { type FC } from 'react'
import { Goal } from './Goal'
import { GoalType } from '../App'

type GoalsProps = {
    goals: GoalType[]
    deleteGoalHandler: (id: number) => void
}

export const Goals: FC<GoalsProps> = ({ goals, deleteGoalHandler }) => {
    return (
        <section>
            <h2>Goals</h2>
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <Goal id={goal.id} title={goal.title} deleteGoalHandler={deleteGoalHandler}>
                            {goal.description}
                        </Goal>
                    </li>
                ))}
            </ul>
        </section>
    )
}
