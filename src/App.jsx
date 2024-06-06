import styled, { ThemeProvider } from 'styled-components'
import { useState, createContext } from 'react'
import { AuthContextProvider } from './context/AuthContext'
import MyRoutes from './routers/routes'
import { Light, Dark } from '../src/styles/themes'
import { Device } from '../src/styles/breackpoints'
import { Sidebar } from './components/organisms/sidebar/Sidebar'

export const ThemeContext = createContext(null)

function App() {
    const [themeUsed, setThemeUsed] = useState('dark')
    console.log(themeUsed)
    const theme = themeUsed === 'light' ? Light : Dark

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <ThemeContext.Provider value={{ theme, setThemeUsed }}>
                <ThemeProvider theme={theme}>
                    <AuthContextProvider>
                        <Container className={sidebarOpen ? 'active' : ''}>
                            <section className='contentSidebar'>
                                <Sidebar state={sidebarOpen} setState={() => setSidebarOpen(!sidebarOpen)} />
                            </section>
                            <section className='contentBurgerMenu'>Burger Menu</section>
                            <section className='contentRoutes'>
                                <MyRoutes />
                            </section>
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
    .contentSidebar {
        display: none;
    }
    .contentBurgerMenu {
        display: block;
        position: absolute;
        left: 20px;
    }
    @media ${Device.tablet} {
        grid-template-columns: 65px 1fr;
        &.active {
            grid-template-columns: 220px 1fr;
        }
        .contentSidebar {
            display: initial;
        }
        .contentBurgerMenu {
            display: none;
        }
    }
    .contentRoutes {
        grid-column: 1;
        width: 100%;
        @media ${Device.tablet} {
            grid-column: 2;
        }
    }
`

export default App
