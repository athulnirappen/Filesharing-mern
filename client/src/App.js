import { useRef, useState, useEffect } from "react";
import { uploadFile } from "./services/api";
import "./App.css";

function App() {
  const [file,setFile]=useState('')
  const fileinput = useRef();
  const OnUploadClick = () => {
    fileinput.current.click();
  };


  useEffect(() => {
    const getImage =async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name)
        data.append("file", file)
      let response= await uploadFile(data)
      }
        
    }
    getImage()
  },[file])
  console.log(file);

  let logo =
    "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <div className="container">
      <img src={logo} alt="banner" />
      <div className="wrapper">
        <h1>Simple File Sharing</h1>
        <p>Upload and share the download link.</p>
        <button onClick={OnUploadClick}>Upload</button>
        <input type="file" ref={fileinput} style={{display:"none"}} onChange={(e)=>setFile(e.target.files)} />
      </div>
    </div>
  );
}

export default App;
