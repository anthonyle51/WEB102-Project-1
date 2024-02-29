import './App.css';
import Album from './components/Album';

const App = () => {

  return (
    <div className="App">
      <h1>Favorite Albums</h1>
      <div className="Albums">
        <Album />
      </div>
    </div>
  )
}

export default App