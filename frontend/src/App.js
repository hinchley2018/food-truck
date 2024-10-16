import logo from './logo.svg';
import './App.css';
//functions - just does something, or it returns something
function doBackflip(){
  console.log("do backflip")
}

//pure js code with return
function makeSandwhich(){
  return {bread: 'white bread', 'toppings': ['tomato', 'lettuce','bacon']}
}

//async functions
async function getPokemon(){
  let response = await fetch('apiurl')
  let data = await response.json()
}

//React methods of interacting with data
//Props -> passed into a component
//State -> defined in a component or lifted to some context or reducer (manage complex)

//component returning html (jsx) to be used somewhere
//special function - returns html
//definition of recipe
//() how you get input
//"dumb" presentational components
function Taco(props){
  //props input object into the component
  console.log("Taco", props)
  //grab off data (destructuring)
  let {name, price} = props
  return(
    <div>
      {/* curly brackets allow us to display data in react */}
      <h2>{name}</h2>
      <h3>${price}</h3>
    </div>
  )
}


//component - entire application
function App() {
  //data about taco
  let tacos = [
    {
      name : 'Vegan Taco',
      price : 4.50,
      imageUrl : 'placeholder',
      description : 'lorem ipsum',
      allergens : ['flour', 'gluten', 'avocado']
    }
  ]

  //render smaller components
  return (
    <div className="App">
      <h1>Taco Truck</h1>
      {/* js code must be in curly brackets */}
      {tacos.map(t => <Taco name={t.name} price={t.price}/>)}
    </div>
  );
}

export default App;
