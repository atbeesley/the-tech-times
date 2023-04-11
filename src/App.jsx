import * as React from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log("searchTerm: ", searchTerm)
  }

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

  const searchedStories = stories.filter((story => {
    return story.title.toUpperCase().includes(searchTerm.toUpperCase());
  }));

  return (
    <div>
      <h1 id="title">working title</h1>
      <Search Search={searchTerm} onSearch={handleSearch} />
      <List list={searchedStories} />
    </div>
  );
};

const Search = (props) => {
  console.log("Search renders.")

  return (
    <div id="search-box">
      <label htmlFor="search">search: </label>
      <input 
        id="search" 
        type="text" 
        value={props.search}
        onChange={props.onSearch} 
      />
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

