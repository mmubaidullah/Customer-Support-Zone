import Footer from './components/footer/Footer'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Container from './components/container/Container'

function App() {
  return (
    <>
    <header>
      <nav className='shadow-sm'>
          <Navbar></Navbar>
      </nav>
      {/* <section className='bg-[#F5F5F5]'>
        <Hero tasks={tasks} resolvedTasks={resolvedTasks}></Hero>
      </section> */}

    </header>
    
    <Footer></Footer>
    <Container></Container>
           
    </>
  )
}

export default App