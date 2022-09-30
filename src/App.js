import './App.css';
import {useState} from "react";

function App() {

  const [content, setContent] = useState(<Blue />);

  return (
    <main>
      <div className='flexing'>
        <Button onClick={()=>{setContent(<Red />)}}>red</Button>
        <Button onClick={()=>{setContent(<Blue />)}}>blue</Button>
        <Button onClick={()=>{setContent(<Green />)}}>green</Button>
      </div>
    {content}
    </main>
  );
}


const Button = (props) =>{
  return(
    <p onClick={props.onClick} className ={"button " + props.children}>{props.children}</p>
  )

}

const Blue = () =>{
  return(
    <div className='blue box'>
    </div>
  )
}

const Red = () =>{
  return(
    <div className='red box'/>
  )
}

const Green = () =>{
  return(
    <div className='green box'/>
  )
}

export default App;
