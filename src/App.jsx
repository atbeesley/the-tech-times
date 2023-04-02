import './App.css'

const welcome = {
  title: "react!",
  greeting: "hiya"
}

const getTitle = (title) => {
  return title
}

const arr = [1, 2, true, "fish", NaN]

function App() {
  return (
    <div className="App">
      <h1>{welcome.title}</h1>
      <h1>{getTitle("hiiiiiii")}</h1>
      <h2>{welcome.greeting}</h2>
      {arr.map((x) => (
        <h1 key={x}>{x}</h1>
      ))}
      <label htmlFor="search">
        <p>search</p>
        <input id="search" type="text"/>
      </label>
    </div>
  )
}

export default App
