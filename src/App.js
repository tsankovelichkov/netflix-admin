import { Routes,Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Users from './components/Users/Users';

function App() {
  return (
    <>
      <Header />
      <div className='main-app-container'>
        <Sidebar />
        <Routes>
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
