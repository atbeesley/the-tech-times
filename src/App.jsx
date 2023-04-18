import * as React from "react";
import axios from 'axios';

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

const storiesReducer = (state, action) => {
  switch (action.type) {
    case "STORIES_FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "STORIES_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case "STORIES_FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case "REMOVE_STORY":
      return {
        ...state,
        data: state.data.filter(
          (story) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};

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
  const [searchTerm, setSearchTerm] = useStorageState("search", "");

  const [url, setUrl] = React.useState(
    `${API_ENDPOINT}${searchTerm}`
  );

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = () => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
  }

  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
  { data: [], isLoading: false, isError: false}
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const handleFetchStories = React.useCallback(async () => {
    if(!searchTerm) return;

    dispatchStories({ type: "STORIES_FETCH_INIT" });

    try{ 
    const result = await axios.get(url);

    dispatchStories({
          type: "STORIES_FETCH_SUCCESS",
          payload: result.data.hits,
        });
      } catch {
        dispatchStories({ type: "STORIES_FETCH_FAILURE" });
      }
      setIsLoading(false);
  }, [url]);

  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = (item) => {
    dispatchStories({
      type: "REMOVE_STORY",
      payload: item,
    });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.data.filter((story) => {
    return story.title.toUpperCase().includes(searchTerm.toUpperCase());
  });

  return (
    <div>
      <h1 id="title">the tech times</h1>
      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearchInput}
      >
        search:
      </InputWithLabel>
      <button  
        type="button"
        disabled={!searchTerm}
        onClick={handleSearchSubmit}
      >
        submit
      </button>
      {stories.isError && <h4>Error fetching data :(</h4>}
      {stories.isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
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
  isFocused,
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

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
  );
};

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
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
        want to learn more about {item.title}? click <a href={item.url} target="_blank">here</a>
        .
      </li>
      <button type="button" onClick={onRemoveItem.bind(null, item)}>
        ok i read this one, now u can remove it.
      </button>
    </div>
  );
};

const Button = ({ type = "button", handleClick, children }) => (
  <button type={type} onClick={handleClick}>
    {children}
  </button>
);

export default App;
