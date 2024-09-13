import { RoutesMain } from "./routes/RoutesMain"
import { Footer } from './components/Footer/index.jsx'
import { Header } from './components/Header/index.jsx'
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
