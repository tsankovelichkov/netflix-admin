import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <Header />
      <div className='main-app-container'>
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
