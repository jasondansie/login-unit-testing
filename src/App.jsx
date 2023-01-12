import './App.css';

function App() {

  const submitHadler = () => {
    console.log("button clicked");
  }

  return (
    <div>
      <button onClick={submitHadler()}>submit</button>
    </div>
  );
}

export default App;
