import { type FC } from 'react'
import user from '../assets/img/user.svg'

export const Header: FC = () => {
    return (
        <header>
            <div>
                <h1>Hello Josh!</h1>
                <p>It’s good to see you again.</p>
            </div>
            <figure>
                <img src={user} alt='User' />
            </figure>
        </header>
    )
}
