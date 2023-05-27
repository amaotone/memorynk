import { Box, Flex } from '@chakra-ui/react'
import { Editor } from './components/Editor'
import { TitleBar } from './components/Header'
import { Sidebar } from './components/Sidebar'

function App(): JSX.Element {
  return (
    <>
      <Flex direction="column" height="100vh">
        <TitleBar height="var(--titlebar-height)" />
        <Flex>
          <Sidebar />
          <Box flex="1">
            <Editor value="hello, world" onChange={console.log} />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default App
