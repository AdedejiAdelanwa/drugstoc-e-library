import { SearchIcon } from '@chakra-ui/icons'
import { VStack, Flex, Input, IconButton } from '@chakra-ui/react'
import React from 'react'


interface Props{
    query: string;
    setQuery: any
    handleFetch: (e: React.FormEvent<HTMLFormElement>) => void
}
function SearchBar({query, setQuery, handleFetch}:Props) {
  return (
    <VStack
    justifyContent="center"
    bg="rgba(0,0,0,.4)"
    px={["15px", "10px"]}
    w={["100%", "50%"]}
    h={["100%", "300px"]}
    borderRadius="md"
  >
    <form style={{ width: "100%" }} onSubmit={handleFetch}>
      <Flex direction={["column", "row"]} gap={[4, 0]}>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value.trim())}
          type="text"
          placeholder="Enter keyword e.g medicine"
          color="white"
          _placeholder={{ color: "whitesmoke" }}
          borderRightRadius={0}
        />

        <IconButton
          py={3}
          bg="#1b72e8"
          icon={<SearchIcon />}
          color="white"
          borderLeftRadius={0}
          type="submit"
          aria-label="search button"
        />
      </Flex>
    </form>
  </VStack>
  )
}

export default SearchBar