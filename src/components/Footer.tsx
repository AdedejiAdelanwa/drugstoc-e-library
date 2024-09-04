import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function AppFooter() {
  return (
    <Flex w="100%" fontSize="13px" h={["5vh", "9vh"]} alignItems="center" bg="black" color="white" px={["10px", "30px"]}>
    <Text> &copy; Copyright 2024, All Rights Reserved | ❤️ Drugstoc</Text>
    </Flex>
  )
}

export default AppFooter