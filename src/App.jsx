import './App.css'

const welcome = {
  title: "react!",
  greeting: "hiya"
}

const arr = [1, 2, true, "fish", NaN]

function App() {
  return (
    <div className="App">
      <h1>{welcome.title}</h1>
      <label htmlFor="search">
        <p>search</p>
        <input id="search" type="text"/>
      </label>
    </div>
  )
}

export default App
