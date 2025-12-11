import { useState, useEffect } from 'react'
import {
  CloseButton,
  Drawer,
  Portal,
} from "@chakra-ui/react"
import { ChakraButton } from './Button'

export const ChakraDrawer = (props) => {
  const {
    title,
    placement,
    buttonText,
    displayCloseButton=false,
    footer,
    triggerOpen=false,
    disableOverlayClick=false,
    children, 
    ...rest
  } = props

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if(triggerOpen && !open){
      (() => setOpen(true))()
    }
  }, [triggerOpen, open, setOpen])

  return (
    <Drawer.Root
      key={placement}
      placement={placement}
      onClose={() => setOpen(false)}
      open={open}
      setOpen={setOpen}
      onPointerDownOutside={() => {
        if(disableOverlayClick){
          setOpen(true)
        } else {
          setOpen(false)
        }
      }}
    >
      <Drawer.Trigger asChild>
        <ChakraButton
          id={rest.id}
          onClick={() => {
            setOpen(!open)
            if(rest.buttonCallback){
              rest.buttonCallback()
            }
          }}
          variant="outline"
          size="sm"
          text={buttonText}
        />
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content
            roundedTop={placement === "bottom" ? "l3" : undefined}
            roundedBottom={placement === "top" ? "l3" : undefined}
          >
            {title && <Drawer.Header>
              <Drawer.Title>{title}</Drawer.Title>
            </Drawer.Header>}
            <Drawer.Body>
              {children}
            </Drawer.Body>
            {footer && <Drawer.Footer>
              {footer}
            </Drawer.Footer>}
            <Drawer.CloseTrigger asChild>
              {displayCloseButton && <CloseButton size="sm" onClick={() => setOpen(!open)}/>}
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
