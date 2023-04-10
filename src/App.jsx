import * as React from 'react';

const App = () => {
  console.log("App renders.")
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
  ];

  const handleSearch = () => {
    console.log("event.target.value");
  }

  return (
    <div>
      <h1 id="title">working title</h1>
      <Search onSearch={handleSearch} />
      <List list={stories} />
    </div>
  );
};

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  console.log("Search renders.")
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };

  return (
    <div id="search-box">
      <label htmlFor="search">search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

const List = (props) => {
  console.log("List renders.")
  return (<ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>)
  };

const Item = (props) => {
  console.log("Item renders.")
  return (
  <div>
    <h3>{props.item.title}</h3>
    <li>author: {props.item.author}</li>
    <li>number of comments: {props.item.num_comments}</li>
    <li>number of points: {props.item.points}</li>
    <li>
      want to learn more about {props.item.title}? click <a href={props.item.url}>here</a>.
    </li>
  </div>
)};

export default App;

