import React from 'react'
import { Box, Combobox, Portal, useListCollection, useFilter, useDisclosure } from '@chakra-ui/react'
import { CustomLabel } from './customComponents'

export const ChakraCombobox = (props) => {
  const {
    label,
    placeholder,
    options,
    setSelectedComponent,
    filterCallback,
  } = props

  const { open, setOpen } = useDisclosure()
  const { contains } = useFilter({ sensitivity: 'base' })

  let { collection, filter } = useListCollection({
    initialItems: options,
    filter: contains,
  })

  const collectionFiltered = filterCallback ?
    collection.items.filter(filterCallback) :
    collection.items

  return (
    <Box className='chakraContainer'>
      <CustomLabel label={label}/>
      <Combobox.Root
        open={open}
        onClose={() => setOpen(false)}
        collection={collection}
        onInputValueChange={(e) => {
          filter(e.inputValue)
          setSelectedComponent(e.inputValue)
          if(e.reason === 'item-select'){
            setOpen(false)
          }else if(e.reason === 'input-change' && collectionFiltered.length > 0){
            setOpen(true)
          }
        }}
      >
        <Combobox.Control>
          <Combobox.Input
            placeholder={placeholder}
            onClick={() => {setOpen(true)}}
            onBlur={() => {setTimeout(() => setOpen(false),1)}}
          />
          <Combobox.IndicatorGroup>
            <Combobox.ClearTrigger />
            <Combobox.Trigger />
          </Combobox.IndicatorGroup>
        </Combobox.Control>
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.Empty>No items found</Combobox.Empty>
              {collectionFiltered.map((item) => (
                <Combobox.Item item={item} key={item.value}>
                  {item.label}
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
    </Box>
  )
}