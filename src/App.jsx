import './App.css'

const App = () =>{
  
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

 return (
    <div className="App">
      <Search />
      <List list={listData} />
    </div>
  )
 }

const List = (props) => (
  <ul>
    {props.listData.map((x) => (
      <li key={x.objectID}>
        <h2>{x.title}</h2>
        <ul>
          <li><span>{x.num_comments}</span></li>
          <li><span>{x.points}</span></li>
          <li><span>To learn more about {x.title}, click <a href={x.url} key={x.objectID}>here</a>.</span></li>
          </ul>
      </li>
    ))}
    </ul>
   );

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
