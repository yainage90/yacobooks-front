import React, { useReducer } from "react";

export const BookSearchContext = React.createContext();

const initialState = {
  query: "",
  totalCount: 0,
  books: [],
  suggests: [],
  currentPage: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DATA":
      return action.value;
    case "SUGGESTS":
      return {
        ...state,
        suggests: action.value,
      };
    case "PAGE":
      return {
        ...state,
        books: action.value.books,
        currentPage: action.value.currentPage,
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
