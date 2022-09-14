import React from "react";
import { useState } from "react";

const CreateNote = (props) => {
  const [data, setData] = useState({
    title: "",
    content: ""
  });

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setData((prevData) => {
        return {
            ...prevData,
            [name] : value
        }
    })
    // console.log(data);
  }

  const createNote = (e) => {
    e.preventDefault();

    props.catchdata(data);
    // console.log(data)
    setData({ 
        title: "",
        content: ""
    })
  }

  return (
    <>
      <div className="the_note mt-3">
        <form className="create_note">
          <h3>Add a note..</h3>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="tile"
            value={data.title}
            onChange={changeHandler}
          />
          <textarea
            type="text"
            placeholder="Write a note..."
            name="content"
            className="content mt-2"
            rows={5}
            value={data.content}
            onChange={changeHandler}
          />
            <button className="plus_sign" onClick={createNote}>
            <i className="fa-light fa-plus"></i>
            </button>
          
        </form>
      </div>
    </>
  );
};

export default CreateNote;
