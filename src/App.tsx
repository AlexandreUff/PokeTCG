import './App.scss'
import Header from './components/Header'
import Main from './components/Main'
import ModalProvider from './provider/modal'

function App() {
  return (
    <div className='app'>
        <ModalProvider>
            <Header />
            <Main />
        </ModalProvider>
    </div>
  )
}

export default App
