import './App.css';
import Celebration from './components/Celebration';
import FirstFold from './components/FirstFold';
import HistoryFold from './components/HistoryFold';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <FirstFold/>
      <HistoryFold/>
      <Celebration/>
    </>
  );
}

export default App;
