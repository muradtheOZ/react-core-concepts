import logo from './logo.svg';
import './App.css';
var name = "Jhankar Mahbub"
function App() {
  const nameArray = ["Bari","Asfaq","Roshni"];
  const placeArray =["Rajsahi","Rangpur","khulna"];
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Dr {name}</p>
       <Person name = {nameArray[0]} place = {placeArray[0]}></Person>
       <Person name = {nameArray[1]} place = {placeArray[1]}></Person>
       <Person name = {nameArray[2]} place = {placeArray[2]}></Person>

      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    width: '400px',
    border: '2px solid tomato',
    margin: '10px',
    padding: '5px'
  }
  return (
    <div className="App" style ={personStyle}>
      <h1>Hello People I am {props.name}</h1>
      <p>I am from {props.place}</p>
    </div>

  )
}
export default App;
