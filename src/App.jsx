import './App.css'

const welcome = {
  title: "react!",
  greeting: "hiya"
}

function App() {
  return (
    <div className="App">
      <h1>{welcome.title}</h1>
      <h2>{welcome.greeting}</h2>
      <label htmlFor="search">
        <p>search</p>
        <input id="search" type="text"/>
      </label>
    </div>
  )
}

export default App
