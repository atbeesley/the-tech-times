import './App.css'

const list = [
  {
    title: "React",
    url: 'https://reactjs.org',
    author: "Fish Man",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: 'https://redux.js.org',
    author: "Andrew Clark, Dan Abramov",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

const welcome = {
  title: "react!",
  greeting: "hiya"
}

function App() {
  return (
    <div className="App">
      <h1>{welcome.title}</h1>
      <label htmlFor="search">
        <p>search</p>
        <input id="search" type="text"/>
      </label>
      <ul>
      {list.map(function (x){
        return <li key={x.objectID}>{x.title}</li>;
      })}
      </ul>
    </div>
  )
}

export default App
