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

    const addGoal = () => {
        const newGoal: GoalType = {
            id: Math.random(),
            title: 'Main Goal',
            description: 'Learn React + Typescript'
        }
        setGoals((prevGoals) => {
            return [...prevGoals, newGoal]
        })
    }

    return (
        <>
            <Header />
            <button type='button' onClick={addGoal}>
                Add new
            </button>
            <Goals goals={goals} />
        </>
    )
}

export default App
