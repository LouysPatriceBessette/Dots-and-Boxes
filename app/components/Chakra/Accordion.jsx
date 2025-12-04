import React, { useState } from 'react'
import { deepEqual } from '../../basics/utils'
import { Box, Stack, Span, Accordion } from '@chakra-ui/react'

export const ChakraAccordion = (props) => {
  const { accordionItems, defaultExpanded } = props
  const [accordionExpanded, setAccordionExpanded] = useState(defaultExpanded)

  return (
    <Box className='chakraContainer'>
      <Stack gap="4">
        <Accordion.Root value={accordionExpanded} onValueChange={(e) => {
          let newValue = ''
          if(e.value !== accordionExpanded){
            newValue = e.value
          }
          setAccordionExpanded(newValue)}
        }>
          {accordionItems.map((item, index) => (
            <Accordion.Item key={index} value={item.value}>
              <Accordion.ItemTrigger onClick={() => {
                if(deepEqual([item.value], accordionExpanded)){
                  setTimeout(() => {
                    setAccordionExpanded([])
                  },1)
                }
              }}>
                <Span flex="1">{item.title}</Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody ml='4' mr='4'>{item.component}</Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Stack>
    </Box>
  )
}