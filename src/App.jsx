import { Suspense, useState} from 'react'
import './App.css'
import Issues from './assets/component/Customer/Issues'
import Footer from './assets/component/footer/Footer'
import Nav from './assets/component/nav/Nav'
import Status from './assets/component/status/Status'
import Task from './assets/component/task/Task'
import { ToastContainer } from 'react-toastify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fas, far, fab)

const fetchdata = async () =>{
const url = '/data.json';
const res = await fetch(url)
return  res.json()
}

const fetchPromise = fetchdata();

function App() {
const [count,setCount] = useState(0);
const [resolved,setResolved] = useState(0);
const [selected,setSelected] = useState([]);
const [completed,setCompleted] = useState([]);
  return (
    <>
      <header>
        <nav className='shadow-sm'>
          <Nav></Nav>
        </nav>      
      </header>
      <div className='fontFamily bg-[#f5f5f5]'>
        <Status count={count} resolved={resolved}></Status>
        <div className='flex flex-col md:flex-row gap-7 px-4 mb-20  my-7 mx-auto md:max-w-[1420px]'>
          <Suspense fallback ={<div className='flex-2 md:flex-3 flex justify-center items-center'><span className="loading loading-ring loading-xl"></span></div>} >
            <Issues count={count} setCount={setCount} fetchPromise={fetchPromise} selected={selected} setSelected={setSelected} completed={completed}></Issues>
          </Suspense>
          <Task selected={selected} setSelected={setSelected} count={count} setCount={setCount} resolved={resolved} setResolved={setResolved} completed={completed} setCompleted={setCompleted}></Task>
        </div>
        <Footer></Footer>
        <ToastContainer autoClose={2000}/>
      </div>
    </>
  )
}

export default App
