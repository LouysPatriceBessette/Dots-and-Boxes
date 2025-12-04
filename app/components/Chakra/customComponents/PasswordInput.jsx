import {
  Box,
  HStack,
  IconButton,
  InputGroup,
  Stack,
  useControllableState,
} from '@chakra-ui/react'
import { ChakraInput } from '../Input'
import { LuEye, LuEyeOff } from 'react-icons/lu'
import zxcvbn from 'zxcvbn'

export const CustomPasswordInput = (props) => {
  const { value, setValue } = props
  const strength = zxcvbn(value).score

  return (
    <Box className='chakraContainer'>
      <PasswordInputGroup
        aria-label='Password'
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
      <PasswordStrengthMeter
        mt='1'
        value={value}
        strength={strength}
      />
    </Box>
  )
}

const PasswordInputGroup = (props) => {
  const {
    rootProps,
    defaultVisible,
    visible: visibleProp,
    onVisibleChange,
    visibilityIcon = { on: <LuEye />, off: <LuEyeOff /> },
    ...rest
  } = props

  const [visible, setVisible] = useControllableState({
    value: visibleProp,
    defaultValue: defaultVisible || false,
    onChange: onVisibleChange,
  })

  return (
    <InputGroup
      endElement={
        <VisibilityTrigger
          disabled={rest.disabled}
          onPointerDown={(e) => {
            if (rest.disabled) return
            if (e.button !== 0) return
            e.preventDefault()
            setVisible(!visible)
          }}
        >
          {visible ? visibilityIcon.off : visibilityIcon.on}
        </VisibilityTrigger>
      }
      {...rootProps}
    >
      <ChakraInput
        {...rest}
        type={visible ? 'text' : 'password'}
      />
    </InputGroup>
  )
}

const VisibilityTrigger = (props) => {
  return (
    <IconButton
      tabIndex={-1}
      me='-2'
      aspectRatio='square'
      size='sm'
      variant='ghost'
      height='calc(100% - {spacing.2})'
      aria-label='Toggle password visibility'
      {...props}
    />
  )
}

const PasswordStrengthMeter = (props) => {
  const { max = 4, value, strength, ...rest } = props
  const { label, colorPalette } = getColorPalette(value, strength)

  return (
    <Stack align='flex-end' gap='1' {...rest}>
      <HStack width='full' {...rest}>
        {Array.from({ length: max }).map((_, index) => (
          <Box
            key={index}
            height='1'
            flex='1'
            rounded='sm'
            data-selected={index < strength ? '' : undefined}
            layerStyle='fill.subtle'
            colorPalette='gray'
            _selected={{
              colorPalette,
              layerStyle: 'fill.solid',
            }}
          />
        ))}
      </HStack>
      <div style={{height: '1.25em', color: 'grey'}}>{label}</div>
    </Stack>
  )
}

const getColorPalette = (value, strength) => {
  switch (strength) {
    case 0:
      return { label: value !== '' ? 'Weak' : '', colorPalette: 'grey' }
    case 1:
      return { label: 'Low', colorPalette: 'red' }
    case 2:
      return { label: 'Medium', colorPalette: 'orange' }
    case 3:
      return { label: 'Medium', colorPalette: 'yellow' }
    default:
      return { label: 'High', colorPalette: 'green' }
  }
}
