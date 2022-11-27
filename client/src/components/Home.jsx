import './Home.css';
import { useReducer, useState } from 'react';
import Login from './Login';
import UserList from './UserList';
import ProjectList from './ProjectList';
import TaskList from './TaskList';
import { Link } from 'react-router-dom';


import { ApplicationContext, defaultState, useApplicationDispatch, useApplicationState } from '../hooks/useApplicationData';
import dataReducer from '../reducer/data_reducer';
import ProjectForm from './ProjectForm';

const Home = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div className="App">
      <ul>
        <ProjectList />
      </ul>
      <h1>Users</h1>
      <div className='user--list'>
        <UserList />
      </div>
    </div >
  );
};

export default Home;
