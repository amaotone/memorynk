import { Box, Container, Flex } from '@chakra-ui/react'
import { Editor } from './components/Editor'
import { Sidebar } from './components/Sidebar'

function App(): JSX.Element {
  return (
    <>
      <Flex>
        <Sidebar />
        <Box flex="1">
          <Container>
            <Editor value="hello, world" onChange={console.log} />
          </Container>
        </Box>
      </Flex>
    </>
  )
}

export default App
