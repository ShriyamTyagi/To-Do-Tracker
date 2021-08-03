import React, { useState } from "react"
import DatePicker from "react-datepicker"
import app from "../../firebase"
import { useAuth } from "../context/AuthContext"
import "react-datepicker/dist/react-datepicker.css"

function CreateArea(props) {
  const [newnote, setnewnote] = useState({ title: "", content: "" });
  const [Deadline, setDeadline] = useState(new Date());
  const { currentUser } = useAuth();

  function handlechange(event) {
    const { name, value } = event.target;

    setnewnote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleclick(event) {
    event.preventDefault();

    const db = app.firestore();

    db.collection("todos").add({
      note: newnote.content,
      title: newnote.title,
      userid: currentUser.uid
    })
    props.onAdd(newnote)
    setnewnote({
        title:"",
        content:""
    })
  }

  // console.log(newnote.content);

  return (
    <div>
      <form className="form-keeper">
        <textarea
          onChange={handlechange}
          value={newnote.title}
          name="title"
          placeholder="Title"
          rows="1"
        />
        <textarea
          onChange={handlechange}
          value={newnote.content}
          name="content"
          placeholder="Take a note..."
          rows="2"
        />
        <label>Click below to Set Deadline</label>
        <br />
        <DatePicker
        filterDate={d => {
          return new Date() > d;
        }}
        placeholderText="Select Deadline"
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mmaa"
        selected={Deadline}
        selectsEnd
        Deadline={Deadline}
        minDate={Deadline}
        onChange={date => setDeadline(date)}
        />
        <button disabled={!newnote.content} onClick={handleclick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
