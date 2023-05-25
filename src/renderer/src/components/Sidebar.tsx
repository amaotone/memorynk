import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

export const Sidebar: React.FC = () => {
  return (
    <>
      <Box
        as="nav"
        pos="sticky"
        sx={{ overscrollBehavior: 'contain' }}
        top="0"
        w="240px"
        h="calc(100vh - 40px)"
        p="2"
        overflowY="auto"
        boxShadow="xs"
        zIndex={1}
      >
        <Heading size="md">Memorynk</Heading>
        content
      </Box>
    </>
  )
}
