import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React, {useState} from "react";


export default function App() {
  // const state = useState();
  const [count, setCount] = useState(0);
  const IncrNum = ()=>{
    setCount(count+1);
    // console.log("button clicked");
    
  };

  return (
    <>
    <div className="maindiv_style">
    <div className="divstyle text-center border bg-light">
   <h1>{count}</h1>
    <button onClick={IncrNum} className="btn btn-success">CLICK ME</button>
   </div>
    </div>
   </>
  );
}


