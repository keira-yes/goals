interface GoalProps {
    title: string
    description: string
}

export const Goal = ({ title, description }: GoalProps) => {
    return (
        <article>
            <h2>{title}</h2>
            <p>{description}</p>
        </article>
    )
}
