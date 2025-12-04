import { defineConfig, defineRecipe, createSystem, defaultConfig } from '@chakra-ui/react'


const buttonRecipe = defineRecipe({
  variants: {
    customVariant: {
      nav: {
        backgroundColor: 'unset',
        padding: 0,
        color: 'white',
        fontWeight: 'bold',
        _hover: {
          backgroundColor: 'unset',
          color: 'grey',
        },
        _focusVisible: {
          outlineWidth: 0,
        }
      },
      'orange': {
        backgroundColor: 'rgba(234, 184, 22, 1)',
        color: 'black',
        fontWeight: 'bold',
        _hover: {
          backgroundColor: 'rgba(234, 184, 22, 0.8)',
          color: 'black',
        },
        _focusVisible: {
          outlineWidth: 0,
        }
      },
      'green': {
        backgroundColor: 'rgba(25, 119, 13, 1)',
        background: 'rgba(25, 119, 13, 1)',
        bg: 'rgba(25, 119, 13, 1)',
        color: 'white',
        _hover: {
          backgroundColor: 'rgba(25, 119, 13, 0.8)',
        },
        _focusVisible: {
          outlineWidth: 0,
        },
        _active: {
          boxShadow: 'inset 0px 0px 4px rgba(0, 0, 0, 0.6)'
        }
      },
      'red': {
        backgroundColor: 'rgb(119, 13, 13)',
        background: 'rgb(119, 13, 13)',
        bg: 'rgb(119, 13, 13)',
        color: 'white',
        _hover: {
          backgroundColor: 'rgba(119, 13, 13, 0.8)',
        },
        _focusVisible: {
          outlineWidth: 0,
        },
        _active: {
          boxShadow: 'inset 0px 0px 4px rgba(0, 0, 0, 0.6)'
        }
      },
      'white': {
        backgroundColor: 'white',
        background: 'white',
        bg: 'white',
        color: 'black',
        _hover: {
          backgroundColor: 'white',
          border: '1px dotted rgba(0, 0, 0, 0.2)'
        },
        _focusVisible: {
          outlineWidth: 0,
        },
        _active: {
          boxShadow: 'inset 0px 0px 4px rgba(0, 0, 0, 0.6)'
        }
      },
      '': {
        backgroundColor: 'rgba(37, 91, 200, 1)',
        background: 'rgba(37, 91, 200, 1)',
        bg: 'rgba(37, 91, 200, 1)',
        color: 'white',
        _hover: {
          backgroundColor: 'rgba(37, 91, 200, 0.8)',
        },
        _focusVisible: {
          outlineWidth: 0,
        },
        _active: {
          boxShadow: 'inset 0px 0px 4px rgba(0, 0, 0, 0.6)'
        }
      },
    }
  },
})

const customConfig = defineConfig({
  theme: {
    recipes: {
      button: buttonRecipe,
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)