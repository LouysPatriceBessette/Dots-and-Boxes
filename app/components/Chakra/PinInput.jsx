import React, {useState, useEffect} from 'react'
import { PinInput, For } from '@chakra-ui/react'
import { deepCopy, randomReactKey } from '../../basics/utils'

export const ChakraPinInput = (props) => {

  const {pinLength=6, getPin=(pin)=>{console.log(`The pin is ${pin}`)}} = props
  const [values, setValues] = useState(Array(pinLength).fill(''))

  useEffect(() => {
    if(values.filter((v) => v).length === pinLength){
      getPin(values.join(''))
    }
  }, [pinLength, values, getPin])

  const updateHandler = (e, pinIndex) => {
    setValues((previousState) => {
      const state = deepCopy(previousState)
      state[pinIndex] = e.target.value.split('').slice(-1) // Only keep last inputted pin number
      return state
    })
  }

  return (
    <PinInput.Root>
      <PinInput.HiddenInput />
      <PinInput.Control>
        <For each={Array(pinLength).fill(0).map((_, index) => index)}>
          {(index) => <PinInput.Input
            key={randomReactKey()}
            index={index}
            onClick={(e) => {e.target.value = ''}}
            value={values[index]}
            onChange={(e) => updateHandler(e, index)}
          />}
        </For>
      </PinInput.Control>
    </PinInput.Root>
  )
}
