import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export const NoteItem: React.FC = () => {
  return (
    <Box
      width="100%"
      p={2}
      borderBottom="1px solid #eee"
      cursor="default"
      _hover={{ backgroundColor: 'blue.50' }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="xs" noOfLines={1} flex={1}>
          Note Title Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Heading>
        <Text fontSize="xs" color="gray" noOfLines={1}>
          1 days ago
        </Text>
      </Flex>
      <Text fontSize="xs" noOfLines={2} color={'gray'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis tempora sequi
        distinctio molestiae est nostrum, reprehenderit alias sed? Doloremque sunt ipsum illum
        libero quidem fugit minus sequi nisi nemo.
      </Text>
    </Box>
  )
}
