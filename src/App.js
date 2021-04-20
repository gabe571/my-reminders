import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h3> Reminders </h3>
    < br />
    <h3> New Reminders </h3>
    <form>
      <label htmlFor='id'> ID </label>
      <br />
      <input name='id' placeholder='id'></input>
      <br />
      <label  htmlFor='reminder'> Reminder </label>
      <br />
      <input name='reminder'placeholder='reminder'></input>  
      <br />
      <label htmlFor='time'> Time </label>
      <br />
      <input name='time' placeholder='time'></input>
      < br />
      <button type='submit'> Add </button>
    </form>
    </div>
  );
}

export default App;
