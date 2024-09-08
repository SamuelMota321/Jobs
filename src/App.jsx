import { RoutesMain } from "./assets/routes/RoutesMain"
import { Footer } from './assets/components/Footer/index.jsx'
import { Header } from './assets/components/Header/index.jsx'
import './styles/index.scss'

function App() {

  return (
    <>
      <Header />
      <RoutesMain />
      <Footer/>
    </>
  )
}

export default App
