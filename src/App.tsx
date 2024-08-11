import Navbar from '@/scenes/navbar/index';
import {useEffect, useState} from 'react'
import Home from '@/scenes/home'
import Benefits from '@/scenes/benefits'
import { SelectedPage } from '@/shared/types';
import Class from './scenes/ourClasses';
import ContactUs from './scenes/contactUs'
import Footer from '@/scenes/footer' 

function App(){
  const [selectPage,setSelectPage]=useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage,setIsTopOfPage]=useState(true)
  useEffect(()=>{
    const handleScroll=()=>{
    if (window.scrollY==0){
      setIsTopOfPage(true)
      setSelectPage(SelectedPage.Home)
    }
    if (window.scrollY!=0){
      setIsTopOfPage(false)
    }
  }
  window.addEventListener('scroll',handleScroll)
  return ()=>window.removeEventListener('scroll',handleScroll
  )
  },[]);
  return (
    <div className='app bg-gray-20'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectPage={selectPage}
        setSelectPage={setSelectPage}
      />
      <Home setSelectPage={setSelectPage} />
      <Benefits setSelectPage={setSelectPage} />
      <Class setSelectPage={setSelectPage} />
      <ContactUs setSelectPage={setSelectPage} />
      <Footer/>
    </div>
  )
}

export default App