import { type FC, type PropsWithChildren } from 'react'
import styled from 'styled-components'

type GoalProps = PropsWithChildren<{
  id: number
  title: string
  deleteGoalHandler: (id: number) => void
}>

const GoalStyled = styled.li`
  padding: 20px;
  border-radius: 14px;
  background-color: var(--light-grey);

  article {
    position: relative;
    padding-right: 70px;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    font-family: var(--font-secondary);
  }

  h2 {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 1.4;
  }
`

export const Goal: FC<GoalProps> = ({ id, title, deleteGoalHandler, children }) => {
  return (
    <GoalStyled>
      <article>
        <h2>{title}</h2>
        {children}
        <button type='button' onClick={() => deleteGoalHandler(id)}>
          Remove
        </button>
      </article>
    </GoalStyled>
  )
}
