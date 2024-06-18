import React, { useState } from 'react';
import Home from './src/screens/home';
import AddNote from './src/screens/addNote';
import EditNote from './src/screens/editNote';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note Pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ]);

  const [selectedNote, setSelectedNote] = useState(null); // State untuk menyimpan catatan yang dipilih

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const editNote = (title, desc) => {
    setNoteList(noteList.map((note) => (note.id === selectedNote.id ? { ...note, title, desc } : note)));
  };

  const deleteNote = (id) => {
    console.log('Deleting note with ID:', id); //mengecek delete
    setNoteList(noteList.filter((note) => note.id !== id));
  };

  const selectNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      editNote={editNote}
      deleteNote={deleteNote} // Sampaikan fungsi deleteNote ke CurrentPageWidget
      selectedNote={selectedNote}
      selectNote={selectNote}
    />
  );
};

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, editNote, deleteNote, selectedNote, selectNote }) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote} // Sampaikan fungsi deleteNote ke Home
          selectNote={selectNote}
        />
      );
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} editNote={editNote} existingTitle={selectedNote.title} existingDesc={selectedNote.desc} />;
    default:
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote} // Sampaikan fungsi deleteNote ke Home
          selectNote={selectNote}
        />
      );
  }
};

export default App;
