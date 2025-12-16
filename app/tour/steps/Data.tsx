import { TourSteps } from "../index.types"
import { useLanguage } from '../../store/selectors'

import { TourStepsDataType } from '../../tour/index.types'
import {
  Apos,
  Bold,
  RedText,
  TourBlankLine,
} from "../../translations/translations.components.styled"

import t from '../../translations'

export const TourStepsData = (props: TourStepsDataType) => {
  const language = useLanguage()

  const {
    setCurrentStep,

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
        $title: <div>Portez attention à la flèche <b><RedText>rouge</RedText>.</b></div>,
        $description: <>
          <div>Dans ce cas-ci, il s<Apos/>agit du nombre de joueurs potentiels qui sont actuellement sur le site.</div>
          <div><TourBlankLine/></div>
          <div>Ce nombre vous inclus.</div>
        </>,
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
        $title: <div>Développement futur...</div>,
        $description: <>
          <div>Vous pourrez leur faire une demande pour jouer avec eux. </div>
          <div><TourBlankLine/></div>
          <div>Mais pour le moment, il faut inviter un de vos amis directement.</div>
          {/* <div><BlankLine/></div>
          <div>Ce nombre vous inclus.</div> */}
        </>,
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

    // ================================================== Intro 3
    {
      dialog: {
        $visible: true,
        $title: <div>Débutons!</div>,
        $description: <>
          {/* <div>Vous voyez la flèche <b><RedText>rouge?</RedText></b></div> */}
          <div>Il doit y avoir deux joueurs.</div>
          <div>Le joueur qui crée la partie est le joueur 1.</div>
        </>,
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

    // ================================================== Player 1 name
    {
      dialog: {
        $visible: true,
        $title: <div>Nom du joueur 1</div>,
        $description: <>
          <div>Son nom est à gauche.</div>
          <div>Si vous créez la partie, votre nom sera là.</div>
        </>,
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
        $title: <div>Pointage du joueur 1</div>,
        $description: <>
          <div>Pour chaque boîte que le joueur ferme, un point lui est attribué.</div>
          <div></div>
        </>,
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
        $title: <div>Nom du joueur 2</div>,
        $description: <div>Si vous rejoignez une partie, votre nom sera à gauche.</div>,
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
        $title: <div>Pointage du Joueur 2</div>,
        $description: <>
          <div>Pour chaque boîte que le joueur ferme, un point lui est attribué.</div>
          <div></div>
        </>,
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
        $title: <div>Grille de jeu</div>,
        $description: <>
          <div>La grille est composée de boites.</div>
          <div><TourBlankLine/></div>
          <div>Ici, il s<Apos/>agit d<Apos/>une grille de <Bold>2</Bold> x <Bold>2</Bold>.</div>
          <div>Elle peut être de dimensions différente.</div>
          <div>Par exemple: <Bold>6</Bold> x <Bold>8</Bold></div>
        </>,
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

    // ================================================== Controls drawer
    {
      dialog: {
        $visible: true,
        $title: <div>Contrôles</div>,
        $description: <>
          <div>Ce boutton ouvre un panneau de contrôle.</div>
        </>,


        $prevCallback: () => {},

        $nextCallback: () => {
          // setTimeout(() => {
            setControlsDrawerOpen(true)
            setControlsEnabledButtonForTour('createGame')
          // }, 100)
          setTimeout(() => {
            // setCurrentStep((prev) => prev + 1 )
          },600)
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

    // ================================================== Controls drawer 2 ( to maintain the arrow while the drawer opens)
    // {
    //   dialog: {
    //     $visible: true,
    //     $title: <div>Contrôles</div>,
    //     $description: <>
    //       <div>Ce boutton ouvre un panneau de contrôle.</div>
    //     </>,


    //     $prevCallback: () => {},

    //     $nextCallback: () => {
    //       setTimeout(() => {
    //         setControlsDrawerOpen(true)
    //         setControlsEnabledButtonForTour('createGame')
    //       }, 100)
    //     },
    //   },
  
    //   arrow: {
    //     $visible: true,
    //     $selector: '#controls-button',
    //     $direction: 'left',
    //     $length: 40,
    //     $distance: 0,
    //     $scale: 1,
    //   }
    // },

    // ================================================== Controls drawer is opened. Show the fucking arrow.
    {
      dialog: {
        $visible: true,
        $title: <div>Damn</div>,
        $description: <>
          <div>Click the create button now! cawliss</div>
          <div></div>
          <div></div>
        </>,
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

    // ================================================== 
    // {
    //   dialog: {
    //     $visible: true,
    //     $title: <div>Titre</div>,
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
        $title: <div>Titre</div>,
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
        $title: <div>Titre</div>,
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
        $title: <div>Titre</div>,
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
        $title: <div>Titre</div>,
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
        $title: <div>Titre</div>,
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
        $title: <div>Titre</div>,
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
        $selector: '#language',
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
        $title: <div>Titre</div>,
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
        $title: <div>Titre</div>,
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
    //     $title: <div>Titre</div>,
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

    // ================================================== Enter name in dialog...
    {
      dialog: {
        $visible: true,
        $title: <div>Create a game</div>,
        $description: <>
          <div>Enter your name</div>
          <div></div>
          <div></div>
        </>,
        $prevCallback: () => {
          // setCreateGameDialogOpen(false)
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
    {
      dialog: {
        $visible: true,
        $title: <div>Titre</div>,
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
        $title: <div>Titre</div>,
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
        $title: <div>Titre</div>,
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
        $title: <div>Titre</div>,
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























    // {
    //   dialog: {
    //     $visible: true,
    //     $title: <div>{t[language]['some tranlsation key']}</div>,
    //     $description: <>
    //       {t[language]['some tranlsation key']}
    //     </>,
    //     $prevCallback: () => {setters[0](true)},
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
  ]

  return steps
}