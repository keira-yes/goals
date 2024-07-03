import { useState } from 'react'
import { Header } from './components/Header'
import { NewGoal } from './components/NewGoal'
import { Goals } from './components/Goals'
import GlobalStyle from './assets/css/GlobalStyle'

export type GoalType = {
  id: number
  title: string
  description: string
}

function App() {
  const [goals, setGoals] = useState<GoalType[]>([])

  const addGoalHandler = (title: string, description: string) => {
    const newGoal: GoalType = {
      id: Math.random(),
      title,
      description
    }
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal]
    })
  }

  const deleteGoalHandler = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <NewGoal addGoal={addGoalHandler} />
      <Goals goals={goals} deleteGoalHandler={deleteGoalHandler} />
    </>
  )
}

export default App
