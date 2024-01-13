import { type FormEvent } from 'react'

export const NewGoal = () => {
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('Submit')
    }

    return (
        <form name='new-goal' onSubmit={onSubmit}>
            <p>
                <label htmlFor='goal-title'>Goal Title</label>
                <input type='text' id='goal-title' name='goal-title' />
            </p>
            <p>
                <label htmlFor='goal-description'>Goal Description</label>
                <input type='text' id='goal-description' name='goal-description' />
            </p>
            <p>
                <button type='submit'>Add Goal</button>
            </p>
        </form>
    )
}
