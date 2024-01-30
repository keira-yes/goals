import { type FC } from 'react'
import { Goal } from './Goal'
import { type GoalType } from '../App'
import { InfoBox } from './InfoBox'

type GoalsProps = {
    goals: GoalType[]
    deleteGoalHandler: (id: number) => void
}

export const Goals: FC<GoalsProps> = ({ goals, deleteGoalHandler }) => {
    if (goals.length === 0) {
        return <InfoBox type='empty' />
    }

    return (
        <>
            {goals.length > 2 && <InfoBox type='warning' />}
            <section>
                <h2>Goals</h2>
                <ul>
                    {goals.map((goal) => (
                        <li key={goal.id}>
                            <Goal
                                id={goal.id}
                                title={goal.title}
                                deleteGoalHandler={deleteGoalHandler}>
                                {goal.description}
                            </Goal>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
