import React, {useState} from 'react';

import Tasks from './componets/Tasks';
import './App.css';

const App = () => {
  const lista = [
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: "true",
    },
  ]

  const [tasks, setTasks] = useState(lista);

   return (
     <div>
      <div className="container">
         <Tasks tasks={tasks}/>
      </div>
     
    </div>
    );
   };

   export default App;