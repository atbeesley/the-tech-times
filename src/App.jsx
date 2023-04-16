import * as React from 'react';

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const App = () => {
  const [searchTerm, setSearchTerm] = useStorageState(
    'search',
    ''
  )

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

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
      <InputWithLabel
       id="search" 
       value={searchTerm}
       onInputChange={handleSearch} 
      >
      search:
      </InputWithLabel>
      <List list={searchedStories} />
      <Button handleClick={() => console.log("Hi this is a button")}>
        Hi, this is a button.
      </Button>
    </div>
  );
};

const InputWithLabel = ({ 
  id, 
  value, 
  type = "text",
  onInputChange,
  children
}) => (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input 
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </>
  )

const List = ({ list }) => {
  return (
  <ul>
    {list.map(({ objectID, ...item }) => (
      <Item key={item.objectID} {...item} />
    ))}
  </ul>
  )};

const Item = ({ title, url, author, num_comments, points }) => 
  (<div>
    <h3>{title}</h3>
    <li>author: {author}</li>
    <li>number of comments: {num_comments}</li>
    <li>number of points: {points}</li>
    <li>
      want to learn more about {title}? click <a href={url}>here</a>.
    </li>
  </div>
);

const Button = ({ type = 'button', handleClick, children }) => (
  <button type={type} onClick={handleClick}>
    {children}
  </button>
)

export default App;


