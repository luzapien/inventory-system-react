import styled from 'styled-components'

export default function HomeTemplate() {
    return (
        <Container>
            <div>Home Template Component</div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    background-color: ${(props) => props.theme.bgTotal};
    color: ${({ theme }) => theme.text};
    width: 100%;
`
