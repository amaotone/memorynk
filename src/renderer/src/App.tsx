import { Box, Flex } from '@chakra-ui/react'
import { Editor } from './components/Editor'
import { Sidebar } from './components/Sidebar'

function App(): JSX.Element {
  return (
    <>
      <Flex>
        <Sidebar />
        <Box flex="1">
          <Editor value="hello, world" onChange={console.log} />
        </Box>
      </Flex>
    </>
  )
}

export default App
