import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import AppHeader from "./components/Header"
import AppFooter from "./components/Footer"
import Content from "./components/Content"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box pos="relative" w="100%" h="100%">
    <AppHeader />
    <Content />
    <AppFooter />
    </Box>
  </ChakraProvider>
)
