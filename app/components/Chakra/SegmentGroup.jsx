import React from 'react'

import { Box, SegmentGroup } from '@chakra-ui/react'
import { CustomLabel } from './customComponents'

export const ChakraSegmentGroup = (props) => {
  const {
    label,
    options,
    optionSelected,
    setOptionSelected,
    defaultValue,
  } = props

  return (
    <Box className='chakraContainer'>
      <CustomLabel label={label}/>
      <SegmentGroup.Root
        defaultValue={defaultValue}
        value={optionSelected ?? defaultValue}
        onValueChange={(e) => setOptionSelected(e.value)}
      >
        <SegmentGroup.Indicator />
        {options.map((option) => (
          <SegmentGroup.Item
            key={option.value}
            value={option.value}
          >
            <SegmentGroup.ItemText style={{maxWidth: 'unset'}}>
              {option.label}
            </SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
    </Box>
  )
}