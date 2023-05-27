import { Flex, IconButton } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { FiSettings } from 'react-icons/fi'

const titleBarStyle = css({
  WebkitAppRegion: 'drag'
})

const titleBarButtonStyle = css({
  WebkitAppRegion: 'no-drag'
})

interface Props {
  height: string
}

export const TitleBar: React.FC<Props> = (props: Props) => {
  const { height } = props

  return (
    <>
      <Flex
        as="header"
        width="100%"
        height={height}
        alignItems="center"
        justifyContent="right"
        padding="0 10px"
        position="sticky"
        top="0"
        borderBottom="1px solid #eee"
        boxSizing="border-box"
        zIndex="sticky"
        css={titleBarStyle}
      >
        <IconButton
          color="gray"
          size="sm"
          variant="ghost"
          aria-label="settings"
          icon={<FiSettings />}
        />
      </Flex>
    </>
  )
}
