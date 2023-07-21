import React from 'react'

const Fix_Grammer = () => {
  return (
    <>
    <section className='box m1'>
            <div className="box-item">
              <div className="text">
                <h3><i className="fa-solid fa-pen"></i>Fix Grammer</h3>
                <p>Regex Some based on the syntext provided</p>
              </div>
              <div className="code">
                <h5>Paste your code bellow:</h5>
                <div className="function">
                  <p> <span style={{color: "blue"}}>function</span> <span style={{color: "red"}}>HelloWorld</span>(text){'{'} </p>
                  <p> echo text || "<span style={{color: "rgb(80, 154, 114)"}}>Hello World</span>" </p>
                  <p> echo text || "<span style={{color: "rgb(80, 154, 114)"}}>Hello World</span>" </p>
                  <p> {'}'} </p>
                </div>
              </div>
              <button><i className="fa-regular fa-paste"></i>Enhance with AI</button>
            </div>
            <div className="box-item">
              <div className='head'>
                <h4><i className="fa-solid fa-circle-right"></i>What does this code do ?</h4>
                <p>The following code does: </p>
              </div>
              <div className='main'>
                <ul>
                  <li><i className="fa-regular fa-circle-right"></i>lorem lorem lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                  <li><i className="fa-regular fa-circle-right"></i>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam molestiae assumenda tenetur ipsa sint!</li>
                  <li><i className="fa-regular fa-circle-right"></i>Lorem ipsum dolor sit amet.</li>
                </ul>
              </div>
              <button><i className="fa-regular fa-paste"></i>Copy Output</button>
            </div>
          </section>
    </>
  )
}

export default Fix_Grammer