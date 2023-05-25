
import './App.css';
import Header from './Pages/Header'
import Sidebar from './Pages/Sidebar'
import Main from './Pages/Main'
import Rightside from './Pages/Rightside'

function App() {
  return (
    <div className="container">
      <div className='header'>
        <Header/>
      </div>
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='content'>
        <Main/>
      </div>
      <div className='side-content'>
        <Rightside/>
      </div>
    </div>
  );
}

export default App;
