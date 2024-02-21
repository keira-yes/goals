import { useRef, type FC, type FormEvent } from 'react'
import styled from 'styled-components'

type NewGoalProps = {
    addGoal: (title: string, description: string) => void
}

const Form = styled.form`
    padding: 30px;
    border-radius: 14px;
    background-color: var(--light-grey);

    Button {
        width: 100%;
        margin-top: 10px;
    }
`

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px 15px;
    border: 2px solid var(--black);
    border-radius: 8px;
    background-color: transparent;
`

const Label = styled.label`
    display: block;
    font-family: var(--font-secondary);
`

const Button = styled.button`
    padding: 12px 35px;
    border: 2px solid var(--black);
    border-radius: 8px;
    font-weight: 700;
    font-size: 13px;
    transition: background-color 0.3s ease, color 0.3s ease;
`

const PrimaryButton = styled(Button)`
    background-color: var(--black);
    color: var(--white);

    &:hover {
        background-color: transparent;
        color: var(--dark);
    }
`

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
