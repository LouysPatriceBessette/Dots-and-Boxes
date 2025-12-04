import React from 'react'
import { Box, Progress } from '@chakra-ui/react'
import { CustomLabel } from './customComponents'
export const ChakraProgress = (props) => {
  let { followBar, value, style } = props

  if(!value || isNaN(value)) {
    value = 0
  }else if(value > 100) {
    value = 100
  }else if(value < 0) {
    value = 0
  }

  let trackBackground
  let rangeBackground
  switch (true) {
    case (value === 100):
      rangeBackground = 'linear-gradient(to right, darkred, red, orange, yellow, lightgreen, green, darkgreen)'
      trackBackground = 'darkgreen'
      break
    case (value >= 90):
      rangeBackground = 'linear-gradient(to right, darkred, red, orange, yellow, lightgreen, green)'
      trackBackground = 'green'
      break
    case (value >= 75):
      rangeBackground = 'linear-gradient(to right, darkred, red, orange, yellow, lightgreen)'
      trackBackground = 'lightgreen'
      break
    case (value >= 45):
      rangeBackground = 'linear-gradient(to right, darkred, red, orange, yellow)'
      trackBackground = 'yellow'
      break
    case (value >= 25):
      rangeBackground = 'linear-gradient(to right, darkred, red, orange)'
      trackBackground = 'orange'
      break
    case (value >= 10):
      rangeBackground = 'linear-gradient(to right, darkred, red)'
      trackBackground = 'red'
      break
    default:
      rangeBackground = 'darkred'
      trackBackground = 'darkred'
  }

  return (
    <Box className='chakraContainer' mb='4' style={style}>
      <CustomLabel
        label={`${value}%`}
        followBar={followBar}
        style={{
          borderRadius: '50%',
          top: '-7.5px',
          width: '25px',
          height: '25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          transition: 'left 0.3s ease-in-out',
        }}

      />
      <Progress.Root value={value} style={{minWidth: '200px'}}>
        <Progress.Track style={{background: trackBackground, borderRadius: '5px'}}>
          <Progress.Range
            style={{background: rangeBackground}}
          />
        </Progress.Track>
      </Progress.Root>
    </Box>
  )
}