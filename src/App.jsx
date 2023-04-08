import './App.css'

const App = () => {

  const stories = [
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

 return (
    <div className="App">
      <h1 id="title">working title</h1>
      <Search />
      <List list={stories} />
    </div>
  )
 }

const List = (props) => (
  <ul>
    {props.listData?.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => {
  <li>
    <h2>{props.item.title}</h2>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
    <span>To learn more about {props.item.title}, click <a href={props.item.url} key={props.item.objectID}>here</a>.</span>
  </li>
}

const Search = () => {

  const handleChange = (event) =>{
    console.log(event);
    console.log(event.target.value);
  }

  return (
    <div id="search-box">
      <label htmlFor="search">search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  )
}

export default App
