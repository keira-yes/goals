import { useRef, type FC, type FormEvent } from 'react'
import { PrimaryButton } from '../ui/Button'
import { Form, Input, Label } from '../ui/Form'

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
        <Form name='new-goal' onSubmit={submitHandler}>
            <p>
                <Label htmlFor='goal-title'>Goal Title</Label>
                <Input type='text' id='goal-title' name='goal-title' ref={goalTitleRef} required />
            </p>
            <p>
                <Label htmlFor='goal-description'>Goal Description</Label>
                <Input
                    type='text'
                    id='goal-description'
                    name='goal-description'
                    ref={goalDescriptionRef}
                />
            </p>
            <p>
                <PrimaryButton type='submit'>Add Goal</PrimaryButton>
            </p>
        </Form>
    )
}
