import React from 'react'
import { Box, Switch } from '@chakra-ui/react'
import { CustomLabel } from './customComponents'

export const ChakraSwitch = (props) => {
  let { checked, setChecked, disabled, label, labelType, colorPalette} = props

  return (
    <Box
      className='chakraContainer'
      margin={'0 1em'}
    >
      {labelType === 'custom' &&
        <CustomLabel
          label={label}
          style={{left: '50%', top: '-14px', transform: 'translateX(-50%)', whiteSpace: 'nowrap'}}
        />}
      <Switch.Root
        disabled={disabled}
        checked={checked}
        onCheckedChange={() => setChecked(!checked)}
        colorPalette={colorPalette || 'green'}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label style={labelType === 'custom' && {display: 'none'}}>{label}</Switch.Label>
      </Switch.Root>
    </Box>
  )
}