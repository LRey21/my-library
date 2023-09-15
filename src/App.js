import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import SideBar from './components/SideBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Notes from './components/Notes';
import Quotes from './components/Quotes';
import Timer from './components/Timer';
import AddBook from './components/AddBook';
import MyLibrary from './components/MyLibrary';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <SideBar>
        <Routes>
          <Route path="/" exact element={<Dashboard/>}/>
          <Route path="/dashboard" exact element={<Dashboard/>}/>
          <Route path="/new" exact element={<AddBook/>}/>
          <Route path="/timer" exact element={<Timer/>}/>
          <Route path="/quotes" exact element={<Quotes/>}/>
          <Route path="/notes" exact element={<Notes/>}/>
          <Route path="/library" exact element={<MyLibrary/>}/>
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
