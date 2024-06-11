import styled from 'styled-components'
import { BtnSave } from '../molecules/BtnSave'
import { useAuthStore } from '../../store/AuthStore'

export default function HomeTemplate() {
    const {signOut} = useAuthStore()
    return (
        <Container>
            <div>Home Template Component</div>
            <BtnSave titulo={'Cerrar Sesión'} bgcolor='#fff' funcion={signOut}/>
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
