import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
  <Navbar title="TextUtils" aboutText="About"/>
  <div className="container my-3"></div>
  <Textform heading="Enter the text to analyze below"/>
</>
  );
}

export default App;
