import React from 'react'

const Notes = (props) => {

     const handleClick = () => {
        props.onNoteClick(props.id);
     }
  return (
    <>
        <div className='mt-4 myNotes'>
            <h4>{props.title}</h4>
            <hr />
            <p>{props.content}</p>
            <button className='dlt_btn' onClick={handleClick}><i className="fa-solid fa-trash"></i></button>
        </div>
    </>
  )
}

export default Notes
