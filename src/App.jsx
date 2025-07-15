import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

// Import components
import Navbar from './components/Navbar.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import ChatBox from './components/ChatBox.jsx'
import profilePic from './assets/profile.jpeg'

// This whole function is a react component
// It is the main component of the application 
function App() {

  // Listens at a certain adress (Learn promises!)
  const fetchAPI = async () => {
    const response = await axios.get("https://portfolio-server-production-315f.up.railway.app")
    console.log(response.data)
  }

  // Hook that runs after the App component renders, used to stay connected to an external system (backend in this case)
  useEffect(() => {
    fetchAPI();
  }, []);

  // This is the visual layout of my frontend
  return (
    <>
    <Navbar/>
    <About/>

    <div className="h-40 bg-gray-950 text-white flex justify-center py-6">
      <ChatBox />
    </div>

    </>
  )
}


// Smaller/simpler components that don't need their own files
function About() {
  return (
    <section className="w-full h-[300px] flex justify-start items-stretch">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 w-1/2 p-8 text-left rounded-xl shadow-lgtext-white bg-gradient-to-br from-[#0f1117] to-[#1a1d24]">
        <h2 className="text-4xl font-bold mb-1 font-mono">Julio Duran</h2>
        <p className="text-gray-400 text-lg">
          21-year-old software developer & CS student @PUC
        </p>
        <p className="text-gray-400 text-lg flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
          Open to work
        </p>
        <br></br>
        <p>&#x1F4CD; Santiago, Chile</p>
        <SocialLinks/>
      </div>

      <div className="ml-auto py-5 font-inter text-center rounded-lg shadow-lg text-white">
        <ProfilePicture />
      </div>
    </section>
  )
}

function ProfilePicture() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img
        src={profilePic}
        alt="Profile"
        className="w-full h-full rounded-xl object-cover shadow-md"
      />
    </div>
  );
}

export default App
