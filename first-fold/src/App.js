import './App.css';
import FirstFold from './components/FirstFold';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Sponsors from './components/Sponsors';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <>
      <Navbar/>
      <FirstFold/>
      <Details/>
      <Sponsors/>
      <FeedbackForm />
    </>
  );
}

export default App;
