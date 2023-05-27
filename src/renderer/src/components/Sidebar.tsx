import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import { NoteItem } from './NoteItem'

export const Sidebar: React.FC = () => {
  return (
    <>
      <Box
        as="nav"
        pos="sticky"
        sx={{ overscrollBehavior: 'contain' }}
        top="0"
        w="240px"
        h="calc(100vh - var(--titlebar-height))"
        borderRight="1px solid #eee"
        overflowY="auto"
        zIndex={1}
      >
        <VStack spacing={0}>
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
        </VStack>
      </Box>
    </>
  )
}
