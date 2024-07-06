import { type FC } from 'react'
import { Goal } from './Goal'
import { type GoalType } from '../App'
import { InfoBox } from './InfoBox'
import styled from 'styled-components'

type GoalsProps = {
  goals: GoalType[]
  deleteGoalHandler: (id: number) => void
}

const GoalsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export const Goals: FC<GoalsProps> = ({ goals, deleteGoalHandler }) => {
  if (goals.length === 0) {
    return <InfoBox type='empty' />
  }

  return (
    <>
      {goals.length > 2 && <InfoBox type='warning' />}
      <section>
        <h2>Goals</h2>
        <GoalsStyled>
          {goals.map((goal) => (
            <Goal
              key={goal.id}
              id={goal.id}
              title={goal.title}
              deleteGoalHandler={deleteGoalHandler}>
              {goal.description}
            </Goal>
          ))}
        </GoalsStyled>
      </section>
    </>
  )
}
