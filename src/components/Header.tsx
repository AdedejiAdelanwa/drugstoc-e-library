import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function AppHeader() {
  return (
    <Flex  h={["8vh", "12vh"]}  alignItems="center"bg="#F1F1F1" px={["10px", "30px"]}>
        <Text>LOGO</Text>
    </Flex>
  )
}

export default AppHeader