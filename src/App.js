import './App.css';
import Confetti from './Confetti';

const shareMessage = 'I just ran my first container using Docker'
const shareLink = 'https://docker.com/'

const App = () => {
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>
          Congratulations!!!
        </h1>
        <p style={{ marginTop: "10px", marginBottom: "50px" }}>
          First Test.
        </p>
        <p>
          For what it stands
        </p>
        <button>Press Me</button>
        <div>
          <a target="_blank" href={"https://twitter.com/intent/tweet?text=" + shareMessage + "&url=" + shareLink} class="fa fa-twitter" rel="noopener noreferrer"> </a>
          <a target="_blank" href={"https://www.linkedin.com/sharing/share-offsite/?url=" + shareLink} class="fa fa-linkedin" rel="noopener noreferrer"> </a>
          <a target="_blank" href={"https://reddit.com/submit?title=" + shareMessage + "&url=" + shareLink} class="fa fa-reddit" rel="noopener noreferrer"> </a>
        </div>
      </header>
    </div>
  );
}

export default App;
