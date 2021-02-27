import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import userEvent from '@testing-library/user-event';
var name = "Jhankar Mahbub";
function App() {
  const Peeps = [{name:"Bari",place:"Rajsahi"},{name:"Asfaq",place:"Rangpur"},{name:"Roshni",place:"Khulna"},{name:"Boka",place:"Tkhinabihin"}];
  const products =[{name:"Photoshop", price:"$200"},{name:"Illustrator", price:"$250"},
  {name:"Animate", price:"$200"}, {name:"After Effect", price:"$250"}];
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Dr {name}</p>
        <Counter></Counter>
        <Users> </Users>
        <Posts> </Posts>

        {
          Peeps.map(peeps =>{
            return(<Person peep = {peeps}></Person>);
          })
        }
       {
         products.map(products=>{
          return (<Product product ={products}></Product>);
           
         })
       }
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
      <h1>Hello People I am {props.peep.name}</h1>
      <p>I am from {props.peep.place}</p>
    </div>

  )
}
function Product(props){
  const[name,price] = [props.product.name, props.product.price];
  console.log(props);
  const productStyle = {
    width: '250px',
    height:'250px',
    float:'left',
    border: '2px solid gray',
    margin: '10px',
    padding: '5px',
    borderRadius:'7px',
    backgroundColor:'gray'  
  }
  return(
    <div  style ={productStyle}>
      <h3>Product {name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>

  )
}
function Counter(){
  const [count,setCount] = useState(30);
  const clickHandler = () =>{
    const newCount = count +1;
    setCount(newCount);
  }
  return(
    <div>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count-1)}>Decrease</button>
    <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  )
}
function Users(){
  const[users,setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data) )
  })

  return(
    <div>
      {users.map(user => <h3> {user.name}</h3>)}
    </div>
  )
}

function Posts(props){
  const postStyle = {
    width: '250px',
    height:'250px',
    float:'left',
    border: '2px solid gray',
    margin: '10px',
    padding: '5px',
    borderRadius:'7px',
    backgroundColor:'gray',
    overflow: 'hidden'  
  }
  const [posts, setPost] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
  })
  return(
    <div style = {postStyle}>
      {posts.map(post => <h4>{post.title}</h4> )}
      {posts.map(post => <p>{post.body}</p> )}
    </div>
  
  )
  

}
export default App;
