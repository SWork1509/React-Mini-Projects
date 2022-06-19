import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa';
import App from './App';
import { AppContext, useGlobalContext } from './context';

const Home = () => {

  // const data = useContext(AppContext);
  // console.log(data)

  const { openSidebar, openModal } = useGlobalContext();

  return <main>
    <button className="sidebar-toggle" onClick={openSidebar}><FaBars /></button>
    <button className="btn" onClick={openModal} > Show Modal</button>
  </main >
}

export default Home
