import * as React from 'react';

const initialStories = [
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



  const [stories, setStories] = React.useState(initialStories);

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );
    setStories(newStories);
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }
  
  const searchedStories = stories.filter((story => {
    return story.title.toUpperCase().includes(searchTerm.toUpperCase());
  }));

  return (
    <div>
      <h1 id="title">stories</h1>
      <InputWithLabel
       id="search" 
       value={searchTerm}
       onInputChange={handleSearch} 
      >
      search:
      </InputWithLabel>
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
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
  children,
  isFocused
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if(isFocused && inputRef.current){
      inputRef.current.focus();
    }
  }, [isFocused])

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input 
        id={id}
        type={type}
        value={value}
        ref={inputRef}
        onChange={onInputChange}
      />
    </>
  )
} 

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item 
        key={item.objectID} 
        item={item} 
        onRemoveItem={onRemoveItem} 
      />
    ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => {

  return (
    <div>
      <h3>{item.title}</h3>
      <li>author: {item.author}</li>
      <li>number of comments: {item.num_comments}</li>
      <li>number of points: {item.points}</li>
      <li>
        want to learn more about {item.title}? click <a href={item.url}>here</a>.
      </li>
      <button type="button" onClick={onRemoveItem.bind(null, item)}>
        delete
      </button>
    </div>
  )};

const Button = ({ type = 'button', handleClick, children }) => (
  <button type={type} onClick={handleClick}>
    {children}
  </button>
)

export default App;


