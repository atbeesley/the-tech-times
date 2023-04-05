import './App.css'

const welcome = {
  title: "hacker stories!",
  greeting: "hiya"
}

const listData = [
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

function App() {
  return (
    <div className="App">
      <Search />
      <List />
    </div>
  )
}

function List(){
  return (
    <ul>
    {listData.map(function (x){
      return (
      <li key={x.objectID}>
        <h2>{x.title}</h2>
        <ul>
          <li><span>{x.num_comments}</span></li>
          <li><span>{x.points}</span></li>
          <li><span>To learn more about {x.title}, click <a href={x.url} key={x.objectID} target="_blank">here</a>.</span></li>
        </ul>
      </li>
      )
    })}
    </ul>
  )
}

function Search(){
  return (
    <div id="search-box">
      <h1>{welcome.title}</h1>
        <label htmlFor="search">search: </label>
      <input id="search" type="text" />
    </div>
  )
}

export default App
