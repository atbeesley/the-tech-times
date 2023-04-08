import * as React from 'react';

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
  ];

  return (
    <div>
      <h1 id="title">working title</h1>
      <Search />
      <List list={stories} />
    </div>
  );
};

const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  };

  return (
    <div id="search-box">
      <label htmlFor="search">search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <div>
    <li>
      <a href={props.item.url}>{props.item.title}</a>
    </li>
    <li>{props.item.author}</li>
    <li>{props.item.num_comments}</li>
    <li>{props.item.points}</li>
  </div>
);

export default App;

