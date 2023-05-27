import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export const NoteItem: React.FC = () => {
  return (
    <Box width="100%" p={2} borderBottom="1px solid #eee">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="sm">Note Title</Heading>
        <Text size="xs" color="gray">
          1日前
        </Text>
      </Flex>
      <Text noOfLines={2} color={'gray'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis tempora sequi
        distinctio molestiae est nostrum, reprehenderit alias sed? Doloremque sunt ipsum illum
        libero quidem fugit minus sequi nisi nemo.
      </Text>
    </Box>
  )
}
