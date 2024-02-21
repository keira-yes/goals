import styled, { css } from 'styled-components'

const Heading = styled.h1`
    ${(props) =>
        props.as === 'h1' &&
        css`
            font-size: 36px;
            line-height: 1;
        `}

    ${(props) =>
        props.as === 'h2' &&
        css`
            margin-bottom: 15px;
            font-size: 24px;
            line-height: 1;
        `}
`

export default Heading
