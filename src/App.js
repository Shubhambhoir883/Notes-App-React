import { useState } from 'react';
import './App.css';
import CreateNote from './CreateNote';
import Header from './Header';
import Notes from './Notes';
import Footer from './Footer';

function App() {
  const [note, setNote] = useState([]);

  const checkData = (data) => {
    setNote((prevData)=> {
      return [...prevData, data]
    })
  }

  const onDelete = (id) =>{
    setNote((oldData)=>{
      return oldData.filter((arrElement,index)=>{ 
        return index!==id
      });
    })
  }
  
  return (
    <>
      <Header/>
      <CreateNote catchdata={checkData}/>
      {
        note.map((elem, index) => {
          return (
          <Notes
            key = {index}
            id={index}
            title={elem.title}
            content={elem.content}
            onNoteClick={onDelete}
          />
          )
        })
      }
      <Footer/>
    </>
  );
}

export default App;
