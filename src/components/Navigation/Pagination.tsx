import {  Button, Flex, Icon, Text } from '@chakra-ui/react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface PaginationProps{
    page: number;
    totalPages: number;
    onPageChange: (arg: number)=> void
}

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
 
  return (
    <Flex justify="center" alignItems="center" mt={2} mb="20px">
      <Button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        mr={2}
      >
        <Icon
            as={IoIosArrowBack}
            color="gray.700"
            _dark={{
              color: "gray.200",
            }}
            boxSize={4}
          />
      </Button>
    
        <Text>
          Page {page } of {totalPages}
        </Text>

      <Button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        ml={2}
      >
       <Icon
            as={IoIosArrowForward}
            color="gray.700"
            _dark={{
              color: "gray.200",
            }}
            boxSize={4}
          />
      </Button>
    </Flex>
  );
};

export default Pagination;