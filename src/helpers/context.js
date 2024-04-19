import React, { createContext, useState, useEffect } from "react";
import { getAllArticles } from "./api";

const BookmarkContext = createContext([]);
const BookmarkDispatchContext = createContext([]);
const ArticleContext = createContext([]);

function BookmarkProvider({ children }) {
  const [bookmarkList, setBookmarkList] = useState(new Array(50).fill(false));
  const [articles, setArticles] = useState([]);
  const getAllArticlesData = () => {
    getAllArticles().then((response) => {
      const allArticles = response.data;
      setArticles(allArticles);
    });
  };
  useEffect(() => {
    getAllArticlesData();
  }, []);

  return (
    <ArticleContext.Provider value={articles}>
      <BookmarkContext.Provider value={bookmarkList}>
        <BookmarkDispatchContext.Provider value={setBookmarkList}>
          {children}
        </BookmarkDispatchContext.Provider>
      </BookmarkContext.Provider>
    </ArticleContext.Provider>
  );
}

export {
  BookmarkProvider,
  ArticleContext,
  BookmarkContext,
  BookmarkDispatchContext,
};
