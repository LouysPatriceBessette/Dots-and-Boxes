import { TourSteps } from "../index.types"
import { useLanguage } from '../../store/selectors'

import { TourStepsDataType } from '../../tour/index.types'
import {
  Apos,
  Bold,
  TourBlankLine,
} from "../../translations/translations.components.styled"

import t from '../../translations'

export const TourStepsData = (props: TourStepsDataType) => {
  const language = useLanguage()

  const {
    // setCurrentStep,

    setControlsDrawerOpen,
    setControlsEnabledButtonForTour,
    // setMore,

    setCreateGameDialogOpen,
    // setJoinGameDialogOpen,
    // setGameoverDialogOpen,

    // setChatDrawerOpen,
  } = props
  

  const steps: TourSteps[] = [
    // ================================================== Intro 1
    {
      dialog: {
        $visible: true,
        $title: t[language]['Intro 1 title'],
        $description: t[language]['Intro 1 description'],
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#connectedPlayers',
        $direction: 'up',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== Intro 2
    {
      dialog: {
        $visible: true,
        $title: t[language]['Intro 2 title'],
        $description: t[language]['Intro 2 description'],
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: false,
        $selector: '#connectedPlayers',
        $direction: 'up',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== Intro 3
    {
      dialog: {
        $visible: true,
        $title: t[language]['Intro 3 title'],
        $description: t[language]['Intro 3 description'],
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: false,
        $selector: '#connectedPlayers',
        $direction: 'up',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== Player 1 name
    {
      dialog: {
        $visible: true,
        $title: t[language]['Player 1 name title'],
        $description: t[language]['Player 1 name description'],
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#player1Name',
        $direction: 'left',
        $length: 40,
        $distance: 10,
        $scale: 1,
      }
    },

    // ================================================== Player 1 score
    {
      dialog: {
        $visible: true,
        $title: t[language]['Player 1 score title'],
        $description: t[language]['Player 1 score description'],
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#player1Score',
        $direction: 'left',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== Player 2 name
    {
      dialog: {
        $visible: true,
        $title: t[language]['Player 2 name title'],
        $description: t[language]['Player 2 name description'],
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#player2Name',
        $direction: 'right',
        $length: 40,
        $distance: 10,
        $scale: 1,
      }
    },

    // ================================================== Player 2 score
    {
      dialog: {
        $visible: true,
        $title: t[language]['Player 2 score title'],
        $description: t[language]['Player 2 score description'],
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#player2Score',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== Play Grid
    {
      dialog: {
        $visible: true,
        $title: t[language]['Play grid title'],
        $description: t[language]['Play grid description'],
        $definedPosition: 'A2',
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#playGrid',
        $direction: 'up',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== Controls drawer button
    {
      dialog: {
        $visible: true,
        $title: t[language]['Controls drawer button title'],
        $description: t[language]['Controls drawer button description'],
        $prevCallback: () => {},
        $nextCallback: () => {
          setControlsDrawerOpen(true)
          setControlsEnabledButtonForTour('createGame')
        },
      },
  
      arrow: {
        $visible: true,
        $selector: '#controls-button',
        $direction: 'left',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== Create game button (Controls drawer is opened)
    {
      dialog: {
        $visible: true,
        $title: t[language]['Create game title'],
        $description: t[language]['Create game description'],
        $prevCallback: () => {
          setControlsDrawerOpen(false)
          setControlsEnabledButtonForTour('')
        },
        // $currCallback: () => {},
        $nextCallback: () => {
          setCreateGameDialogOpen(true)
        },
      },
  
      arrow: {
        $visible: true,
        $selector: '#createGame',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== Create player name
    {
      dialog: {
        $visible: true,
        $title: t[language]['Create name input title'],
        $description: t[language]['Create name input description'],
        $prevCallback: () => {
          setCreateGameDialogOpen(false)
        },
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#create-input',
        $direction: 'down',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== 
    // {
    //   dialog: {
    //     $visible: true,
    //     $title: t[language]['Meeeeh input title'],
    //     $description: <>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //     </>,
    //     $prevCallback: () => {},
    //     $nextCallback: () => {},
    //   },
  
    //   arrow: {
    //     $visible: true,
    //     $selector: '#unknown',
    //     $direction: 'right',
    //     $length: 40,
    //     $distance: 0,
    //     $scale: 1,
    //   }
    // },

    // ================================================== 
    {
      dialog: {
        $visible: true,
        $title: t[language]['Meeeeh input title'],
        $description: <>
          <div></div>
          <div></div>
          <div></div>
        </>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#joinGame',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },
    // ================================================== 
    {
      dialog: {
        $visible: true,
        $title: t[language]['Meeeeh input title'],
        $description: <>
          <div></div>
          <div></div>
          <div></div>
        </>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#destroy-leaveGame',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },
    // ================================================== 
    {
      dialog: {
        $visible: true,
        $title: t[language]['Meeeeh input title'],
        $description: <>
          <div></div>
          <div></div>
          <div></div>
        </>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#more',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },
    // ================================================== 
    {
      dialog: {
        $visible: true,
        $title: t[language]['Meeeeh input title'],
        $description: <>
          <div></div>
          <div></div>
          <div></div>
        </>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#less',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== 
    {
      dialog: {
        $visible: true,
        $title: t[language]['Meeeeh input title'],
        $description: <>
          <div></div>
          <div></div>
          <div></div>
        </>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#welcome',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== 
    {
      dialog: {
        $visible: true,
        $title: <div>{t[language]['Meeeeh title']}</div>,
        $description: <>
          {t[language]['Meeeeh description']}
        </>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },

      arrow: {
        $visible: true,
        $selector: '#language',
        $direction: 'up',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== 
    {
      dialog: {
        $visible: true,
        $title: t[language]['Meeeeh input title'],
        $description: <>
          <div></div>
          <div></div>
          <div></div>
        </>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#chat-button',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== 
    {
      dialog: {
        $visible: true,
        $title: t[language]['Meeeeh input title'],
        $description: <>
          <div></div>
          <div></div>
          <div></div>
        </>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#joint-input',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== 
    // {
    //   dialog: {
    //     $visible: true,
    //     $title: t[language]['Meeeeh input title'],
    //     $description: <>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //     </>,
    //     $prevCallback: () => {},
    //     $nextCallback: () => {},
    //   },
  
    //   arrow: {
    //     $visible: true,
    //     $selector: '#unknown',
    //     $direction: 'right',
    //     $length: 40,
    //     $distance: 0,
    //     $scale: 1,
    //   }
    // },



    // ================================================== 
    {
      dialog: {
        $visible: true,
        $title: t[language]['Meeeeh input title'],
        $description: <>
          <div></div>
          <div></div>
          <div></div>
        </>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#chat-drawer',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== 
    {
      dialog: {
        $visible: true,
        $title: t[language]['Meeeeh input title'],
        $description: <>
          <div></div>
          <div></div>
          <div></div>
        </>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#chat-messages',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== 
    {
      dialog: {
        $visible: true,
        $title: t[language]['Meeeeh input title'],
        $description: <>
          <div></div>
          <div></div>
          <div></div>
        </>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#chat-input',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== 
    {
      dialog: {
        $visible: true,
        $title: t[language]['Meeeeh input title'],
        $description: <>
          <div></div>
          <div></div>
          <div></div>
        </>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector: '#gameover-body',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },





  ]

  return steps
}