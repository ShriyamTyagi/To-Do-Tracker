import React, {useState, useEffect} from 'react'
import Header from "./Header";
import Footer from "../Footer";
import Note from "./Note";
import app from "../../firebase"
import { useAuth } from "../context/AuthContext"
import CreateArea from "./CreateArea";

function TodoApp() {
    const [notes, setnotes] = useState([]);
    const { currentUser } = useAuth();

  useEffect(() => {
    const items = [];
    const db = app.firestore();
    db.collection("todos").get().then((todos) => {
      // eslint-disable-next-line array-callback-return
      todos.docs.map((todo) => {
        if(todo.data().userid === currentUser.uid){
          items.push({
            content: todo.data().note,
            title: todo.data().title
          })
        }
      })
      setnotes(items);
    })
  }, [currentUser.uid])

  function Createnotes(note) {
    setnotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteitem(id) {
    setnotes((prevNotes) => {
      return prevNotes.filter((todo,index) => {
          return index !== id
      })
    })
  }

return (
    <div>
      <Header />
      <CreateArea onAdd={Createnotes} />
      {notes.map((note, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={note.title}
            content={note.content}
            onDelete={deleteitem}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default TodoApp
