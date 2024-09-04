import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import {  Spinner, VStack } from "@chakra-ui/react";
import { baseUrl, useDebounce } from "../utils";
import { toast } from "react-toastify";
import BookList from "./BookList";
import SearchBar from "./SearchBar";

export interface IBook {
  id: string;

  selfLink: string;
  volumeInfo: {
    authors: string[];
    averageRating: number;
    ratingsCount: number;
    title: string;
    description: string;
    subtitle: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    pageCount: number;
    publishedDate: string;
    publisher: string;
  };
}

function Content() {
  const [query, setQuery] = useState<string>("");
  const [isfetching, setIsFetching] = useState<boolean>(false);
  const [books, setBooks] = useState<IBook[]>();
  const [startIndex, setStartIndex] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const maxResults = 12;

  const debouncedQuery = useDebounce(query, 500);

  const handleFetch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchBooks();
  };
  const fetchBooks = useCallback(async () => {
    setIsFetching(true);

    try {
      const response = await axios.get(`${baseUrl}/volumes`, {
        params: {
          q: debouncedQuery,
          startIndex: startIndex - 1,
          maxResults,
          key: process.env.REACT_APP_BOOKS_API_KEY,
        },
      });
      const {
        data: { items, totalItems },
      } = response;
      setBooks(items);
      setIsFetching(false);
      setHasMore(totalItems > (startIndex + 1) * maxResults);
      setTotalPages(Math.ceil(totalItems / maxResults));
    } catch (error: any) {
      setIsFetching(false);
      if (error) {
        toast.error(error?.response.data);
      }
    }
  }, [startIndex, debouncedQuery]);
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setStartIndex(newPage);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [startIndex, fetchBooks]);

  return (
    <VStack w="100%" minH="90vh" bg="white">
      <VStack
        w="100%"
        h={["250px", "400px"]}
        alignItems="center"
        justifyContent="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        bgImage="./assets/landing-image.png"
      >
        <SearchBar query={query} setQuery={setQuery} handleFetch={handleFetch}/>
      </VStack>
      {isfetching ? (
        <Spinner />
      ) : (
        <BookList
          books={books!}
          hasMore={hasMore}
          currentPage={startIndex}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )}
    </VStack>
  );
}

export default Content;
