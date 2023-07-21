import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import Explain_code from '../../Components/Menu/Explain-code'
import Regex from '../../Components/Menu/Regex'
import Convert_Code from '../../Components/Menu/Convert-Code'
import Fix_Grammer from '../../Components/Menu/Fix_Grammer'
import Todo from '../../Components/Menu/Todo'

const Home = () => {

  const [select, setSelect] = useState('Regex')

  return (
    <>
        <Navbar />
        
        <section className='main-text p1'>
          <h1><strong>AI</strong> to write code, blogs & more</h1>
          <p>Enhance everything you do by using the latest from OpenAI to solve problems, write solutions and make life easier</p>
          <button>Get Started</button>
          <img className="third" src="./Icon/shape2.png" alt="third" />
        </section>

        <section className='menu-box'>
          {(select === 'Explain Code')?<Explain_code/> : <></> }
          {(select === 'Regex')?<Regex/> : <></> }
          {(select === 'Convert Code')?<Convert_Code/> : <></> }
          {(select === 'Fix Grammer')?<Fix_Grammer/> : <></> }
          {(select === 'Todo')?<Todo/> : <></> }
          <div className='menu-item m1'>
            <ul>
              <li><button className={(select === "Explain Code" )?"active": ""} 
              onClick={
                () => {setSelect('Explain Code')}
              }><i className="fa-regular fa-message"></i>Explain Code</button></li>            
              <li><button className={(select === "Regex" )?"active": ""} onClick={
                () => {setSelect('Regex')}
              }><i className="fa-solid fa-code"></i>Regex</button></li>            
              <li><button className={(select === "Convert Code" )?"active": ""} 
              onClick={
                () => {setSelect('Convert Code')}
              }><i className="fa-solid fa-arrow-right-arrow-left"></i>Convert Code</button></li>            
              <li><button className={(select === "Fix Grammer" )?"active": ""} 
              onClick={
                () => {setSelect('Fix Grammer')}
              }><i className="fa-solid fa-pen"></i>Fix Grammer</button></li>            
              <li><button className={(select === "Todo" )?"active": ""} 
              onClick={
                () => {setSelect('Todo')}
              }><i className="fa-regular fa-square-check"></i>Todo</button></li>       
            </ul>
            <p><i className="fa-solid fa-globe"></i>Open AI</p>
          </div>
          <div className="btn m1">
            <button><i className="fa-regular fa-user"></i>Free Signup</button>
          </div>
          <div className="bg">
            <img src="./Icon/shape1.png" alt="shape1" />
          </div>
        </section>

    </>
  )
}

export default Home