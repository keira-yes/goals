import { useState, type FC } from 'react'
import { Goal } from './Goal'

type Goal = {
    id: number
    title: string
    description: string
}

export const Goals: FC = () => {
    const [goals, setGoals] = useState<Goal[]>([])

    const addGoal = () => {
        const newGoal: Goal = {
            id: Math.random(),
            title: 'Main Goal',
            description: 'Learn React + Typescript'
        }
        setGoals((prevGoals) => {
            return [...prevGoals, newGoal]
        })
    }

    return (
        <section>
            <h2>Goals</h2>
            <button type='button' onClick={addGoal}>
                Add new
            </button>
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
