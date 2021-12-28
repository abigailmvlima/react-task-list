import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tasks from './componets/Tasks';
import AddTask from './componets/AddTask';
import Header from './componets/Header';
import TaskDetails from './componets/TaskDetails';

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

  useEffect(() => {
    const fetchTasks = async () => {
			const { data } = await axios.get(
				"https://jsonplaceholder.cypress.io/todos?_limit=10"
			);

			setTasks(data);
		};

		fetchTasks();
  }, [tasks])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      return { ...task, completed: task.id == taskId }
    });
    setTasks(newTasks)
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId)
    console.log(77,taskId, newTasks)
    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" 
        exact 
        render={() => (
            <div>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion} />
            </div>
          )}
        />
          <Route path="/:taskTitle" exact component={TaskDetails} />
          
      </div>

    </Router>
  );
};

export default App;