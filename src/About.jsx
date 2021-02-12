import logo from './logo-jjf.png';

function About() {
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the Dailies app for tracking daily execution of tasks
        </p>
        <button>
          Start
        </button>
      </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         This is the Dailies app for tracking daily execution of tasks
  //       </p>
  //       <button>
  //         Start
  //       </button>
  //     </header>
  //   </div>
  // );
}
export default About;
