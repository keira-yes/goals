import { useRef, type FC, type FormEvent } from 'react'

type NewGoalProps = {
    addGoal: (title: string, description: string) => void
}

export const NewGoal: FC<NewGoalProps> = ({ addGoal }) => {
    const goalTitleRef = useRef<HTMLInputElement>(null)
    const goalDescriptionRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const goalTitle = goalTitleRef.current!.value
        const goalDescription = goalDescriptionRef.current!.value

        e.currentTarget.reset()
        addGoal(goalTitle, goalDescription)
    }

    return (
        <form name='new-goal' onSubmit={submitHandler}>
            <p>
                <label htmlFor='goal-title'>Goal Title</label>
                <input type='text' id='goal-title' name='goal-title' ref={goalTitleRef} required />
            </p>
            <p>
                <label htmlFor='goal-description'>Goal Description</label>
                <input
                    type='text'
                    id='goal-description'
                    name='goal-description'
                    ref={goalDescriptionRef}
                />
            </p>
            <p>
                <button type='submit'>Add Goal</button>
            </p>
        </form>
    )
}
