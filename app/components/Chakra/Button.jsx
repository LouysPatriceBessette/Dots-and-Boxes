import React from 'react'
import { Button, Box } from '@chakra-ui/react'

export const ChakraButton = (props) => {
  const {text, customVariant='', fullwidth, ...rest} = props
  const fullwidthStyle = fullwidth ? {width: '100%'} : {}

  return (
    <Box className='chakraContainer' my='2' style={fullwidthStyle}>
      <Button
        {...rest}
        text={text}
        customVariant={customVariant}
        style={fullwidthStyle}
      >
        {text}
      </Button>
    </Box>
  )
}