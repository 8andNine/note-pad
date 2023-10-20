import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import notes from './notes';

const App = () =>{
    return (
        <div >
         <Header/>
        
        {notes.map((noteitem)=>
         <Note 
         key={noteitem.key}
         title={noteitem.title}
         content={noteitem.content}
         />)

      }
       <Footer/>
        </div>
    )
 
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
