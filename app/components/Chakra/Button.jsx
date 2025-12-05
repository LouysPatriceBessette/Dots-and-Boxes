import { Button, Box } from '@chakra-ui/react'

export const ChakraButton = ({
  text,
  customVariant='',
  fullwidth=false,
  ...rest
}) => {
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