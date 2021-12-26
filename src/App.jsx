import React, { useState } from 'react';

import Tasks from './componets/Tasks';
import AddTask from './componets/AddTask';
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

  const [tasks, setTasks] = useState(lista)

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  return (
    <div>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>

    </div>
  );
};

export default App;