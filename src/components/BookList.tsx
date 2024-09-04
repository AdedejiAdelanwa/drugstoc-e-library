import React from 'react'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import Book from './Book'
import Pagination from './Navigation/Pagination';
import { IBook } from './Content';

interface Props{
    books: IBook[];
    hasMore: boolean;
    currentPage: number;
    totalPages: number;
    handlePageChange: (page: number)=> void;
}

function BookList({books, hasMore,currentPage, totalPages, handlePageChange}: Props) {
  return (
    <Box w="100%" h="auto" mt="30px" px={["12px", "60px"]} bg="white">
        <Heading fontSize="32px" mb="20px">
          Results:
        </Heading>
        <SimpleGrid
          columns={[2, 6]}
          spacingX={[2, 4]}
          spacingY={[6, 8]}
          justifyItems="center"
          mb="20px"
        >
          {books && books.map((book) => <Book key={book.id} book={book} />)}
        </SimpleGrid>
        {hasMore && (
          <Pagination
        
            page={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </Box>
  )
}

export default BookList