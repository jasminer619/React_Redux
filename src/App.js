import { useState } from 'react';
import photo from "./images/IMG_0833-2.jpg";
import './App.css';
import Display from "./Component/Display"
import Count from "./Component/Count"

function App() {

  const [skills, setSkills] = useState("My Name is Jasmine")

  const handleName =()=> {
    setSkills("My Name is Jasmine")
  }

  const handleSkills =()=> {
    setSkills("I'm a Frontend Developer")
  }

  const [count, setCount] = useState(0)

  return (
  <>
  <main>
    <div className="card">
        <img src={photo} alt="photo" className="photo"/>
        <h1>Hi!</h1>
      <div className="function">
          <Display tech ={skills}/>
            <div className="btns">
              <button onClick ={handleName} class = "Name"> Name </button>
              <button onClick ={handleSkills} class = "Skills"> Skills </button>
            </div>
      </div>
      <div className="likes">
            <Count likes ={count}/>
           <i class="fas fa-heart" onClick ={() => setCount(count + 1)}></i>
      </div> 
        <br/>
            <a href="https://www.twitter.com" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <i class="fab fa-linkedin-in"></i>
            </a>
      </div>
    </main>
  </>
  );
}

export default App;
