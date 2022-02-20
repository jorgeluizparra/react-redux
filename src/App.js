import { useEffect } from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setState } from './store/users/usersSlice';

// APIs
import { fetchUsers } from './apis/usersAPI'

// Pages
import HomePage from './pages/home/home';
import AddUserPage from './pages/add-user/add-user';
import EditUserPage from './pages/edit-user/edit-user';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchUsers()
      dispatch(setState({ users: data }))
    }
    fetchData();
  });

  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="add-user" element={<AddUserPage />} />
        <Route path="edit-user/:id" element={<EditUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
