import React from 'react'
import { Menu, Portal } from '@chakra-ui/react'
import { ChakraButton } from './Button'
import { randomReactKey } from '../../basics/utils'

export const ChakraMenu = (props) => {

  const { id, buttonTitle, buttonCustomVariant='', buttonDisabled, items, onSelect } = props
  
  return (
    <Menu.Root onSelect={onSelect}>
      <Menu.Trigger asChild>
        <ChakraButton
          id={id}
          text={buttonTitle}
          customVariant={buttonCustomVariant}
          disabled={buttonDisabled}
        />
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {items.map((item) => (
              <Menu.Item
                key={randomReactKey()}
                value={item.value}
                disabled={item.disabled}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
