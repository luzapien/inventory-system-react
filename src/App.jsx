import styled, { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { AuthContextProvider } from './context/AuthContext'
import MyRoutes from './routers/routes'
import { createContext } from 'react'
import { Light, Dark } from '../src/styles/themes'
import { Device } from '../src/styles/breackpoints'

export const ThemeContext = createContext(null)

function App() {
    const [themeUsed, setThemeUsed] = useState('dark')
    const theme = themeUsed === 'light' ? ' light' : 'dark'
    const themeStyle = theme === 'light' ? Light : Dark

    return (
        <>
            <ThemeContext.Provider value={{ theme, setThemeUsed }}>
                <ThemeProvider theme={themeStyle}>
                    <AuthContextProvider>
                        <Container>
                            <section className='ContenSidebar'>Sidebar</section>
                            <section className='ContentBurgerMenu'>Burger Menu</section>
                            <section className='ContentRoutes'></section>
                            <MyRoutes />
                        </Container>
                    </AuthContextProvider>
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    )
}

const Container = styled.main`
    display: grid;
    grid-template-column: 1fr;
    background-color: ${({ theme }) => theme.bgtotal};
    .ContentSidebar {
        display: none;
    }
    .ContentBurgerMenu {
        display: block;
        position: absolute;
        left: 20px;
    }
    @media ${Device.tablet} {
        grid-template-columns: 65px 1fr;
        
    }
`

export default App
