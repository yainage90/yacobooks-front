import React, { useReducer } from "react";

export const BookSearchContext = React.createContext();

const initialState = {
  searchedQuery: "",
  typedQuery: "",
  totalCount: 0,
  books: [],
  suggests: [],
  currentPage: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return action.value;
    case "SUGGESTS":
      return {
        ...state,
        suggests: action.value,
      };
    case "TYPING":
      return {
        ...state,
        typedQuery: action.value,
      };
    default:
      throw new Error("일치하는 명령이 존재하지 않습니다.");
  }
};

const BookSearchContextProvider = ({ children }) => {
  const [data, contextDispatch] = useReducer(reducer, initialState);

  return (
    <BookSearchContext.Provider
      value={{
        data,
        contextDispatch,
      }}
    >
      {children}
    </BookSearchContext.Provider>
  );
};

export default BookSearchContextProvider;
