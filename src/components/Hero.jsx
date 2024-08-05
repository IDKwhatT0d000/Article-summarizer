import React from 'react'
import {logo} from '../assets'
const Hero = () => {
  return (
    <header className="w-full justify-center items-center"> 
        <nav className=" w-full mb-10 pt-5 flex justify-between items-center">
            <img src={logo} alt="sumz_logo" className="w-28 object-contain mx-80"></img>
            <button  type="button" onClick={()=>window.open("https://github.com/IDKwhatT0d000")} className="black_btn">
                IDKwhatTOd000
            </button>
        </nav>

        <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc text-center'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero