import logo from './logo.svg';
import './App.css';
import AddPhoto from './Components/AddPhoto';
import SearchPhoto from './Components/SearchPhoto';
import DeletePhoto from './Components/DeletePhoto';
import ViewPhoto from './Components/ViewPhoto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Add" element={<AddPhoto/>}/>
      <Route path="/View" element={<ViewPhoto/>}/>
      <Route path="/Search" element={<SearchPhoto/>}/>
      <Route path="/Delete" element={<DeletePhoto/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
