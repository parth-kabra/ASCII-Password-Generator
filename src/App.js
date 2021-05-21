import './App.css';
import Generator from "./Generator"
import Head from './Head';
import History from "./History"
import Footer from "./Footer"


function App() {
  return (
    <div className="App">
      <div className="topheader">
      <div className="appheader">
          <h2 className="AppName">Mr.Protector</h2>
          <div className="texts">
            <a className="Text1" href="#generator">Generate Password</a>
            <a className="Text1" href="#Foot">Contact Us</a>
          </div>
      </div>
        <Generator/>
      </div>
      <div className="generator" id="generator">
        <Head/>
      </div>
      <div id="Foot">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
