import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
const{onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className='main'> 
    <div className="nav">
      <p className='opacity-90'>Tutorly<span className='text-blue-600'>.ai</span></p>
      <button id='getbtn' className='bg-blue-500  text-black w-50 h-10 outline-0 rounded-md text-sm px-3 py-5 '>Get Tutorly 2.0 <span className='text-xl text-black '>↗</span>
      </button>
      <img src={assets.user_icon} alt="" />
    </div>
    <div className="main-container">
{!showResult
?<>
<div className="greet">
          <p><span className="bg-gradient-to-r from-blue-500 via-teal-600 to-cyan-700 bg-clip-text text-transparent">Hello</span>👋,</p>
          <p><span className='bg-gradient-to-r from-gray-400 via-gray-500 to-black  bg-clip-text text-transparent'>How Can I help you ?</span></p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Difference between Libraries and Framework</p>
            <img src={assets.code_icon} alt="" />
          </div>
          <div className="card">
            <p>Define Osmosis with example</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>What is Pythagoros Theorem??</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Suggest beautiful places in India</p>
            <img src={assets.compass_icon} alt="" />
          </div>
        </div>
</>
: <div className='result'>
  <div className="result-title">
<img src={assets.user_icon} alt="" />
<p>{recentPrompt}</p>
</div>
<div className="result-data">
  <img id='logo-design' src="logo_ai.png" alt="" />
  {loading
  ?<div className='loader'>
    <hr />
    <hr />
    <hr />
  </div>
  :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
  }
</div>
</div>
}


        

        <div className="main-bottom">
          <div className=" search">
            <input onChange={(e)=>
               setInput(e.target.value)} value={input} type="text" placeholder='Enter Your prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
             {input? <img onClick={()=>
                onSent()}  src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className='bottom-info text-center text-sm font-light text-gray-500'>Tutorly.ai can make mistakes. Check important information.</p>
        </div>
    </div>
      
    </div>
  )
}

export default Main
