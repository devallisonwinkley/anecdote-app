import { useState } from "react";
import "./App.css";

// Rendering a collection in react
// For react to be able to run your list efficiently and properly, you should add a key attribute to your list

function App(props) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addNote = (event) => {
    event.preventDefault();
    const noteObj = {
      content: newNote,
      important: false,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObj));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      {/* <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul> */}
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;

// Loop through instead of doing thousands of lines for items

// Map and forEach has another parameter > index
// You can use the index as an id, but it is not a good practice - just use the id you have declared for your collection

// To avoid duplication rendering in react, you should use a key to tell react that this list is a unique item
// An ID is also a unique identinfier
// Make it a habit to add a key attribute to your list
// A key is a required property/attribute by react
// Attributes that can be ussed in LI > class, list, id. etc
// forEach won't work, only map
// Map - creates a new array with the input that you have initially provided/created | make it  habit to use map instead of forEach

// We use the onSubmit property and just go ahead and use type="submit", because this is a <form action="" className=""></form>
