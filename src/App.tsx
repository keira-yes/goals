import { useState } from 'react'
import { Header } from './components/Header'
import { Goals } from './components/Goals'

export type GoalType = {
    id: number
    title: string
    description: string
}

function App() {
    const [goals, setGoals] = useState<GoalType[]>([])

    const onAddGoal = () => {
        const newGoal: GoalType = {
            id: Math.random(),
            title: 'Main Goal',
            description: 'Learn React + Typescript'
        }
        setGoals((prevGoals) => {
            return [...prevGoals, newGoal]
        })
    }

    const onDeleteGoal = (id: number) => {
        setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
    }

    return (
        <>
            <Header />
            <button type='button' onClick={onAddGoal}>
                Add new
            </button>
            <Goals goals={goals} onDeleteGoal={onDeleteGoal} />
        </>
    )
}

export default App
