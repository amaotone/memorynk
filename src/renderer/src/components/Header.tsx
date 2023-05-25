import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'

const titleBarStyle = css({
  WebkitAppRegion: 'drag'
})

const titleBarButtonStyle = css({
  WebkitAppRegion: 'no-drag'
})

export const TitleBar: React.FC = () => {
  return (
    <>
      <Flex
        as="header"
        width="100%"
        height="40px"
        backgroundColor="grey.400"
        alignItems="center"
        justifyContent="space-between"
        padding="0 10px"
        position="sticky"
        top="0"
        borderBottom="1px solid #eee"
        boxSizing="border-box"
        zIndex="9999"
        css={titleBarStyle}
      >
        <Text>Memorynk</Text>
        <Box>
          <Button size="sm" marginRight="2" css={titleBarButtonStyle}>
            button 1
          </Button>
        </Box>
      </Flex>
    </>
  )
}
