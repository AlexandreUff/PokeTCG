import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Modal from './components/Modal'

function App() {
  return (
    <div className='app'>
        <Modal />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

console.log('Não esqueça do "A fazer"')

/* 

A fazer:

    - Substituir a tipagem das imagens

*/

// primary: #FCC737
// secondary: #F26B0F
// third: #E73879
// fourth: #7E1891

export default App
