 
import { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setIsLoaded } from '../store/actions';

import Chakra from '../components/Chakra'
import {
  TourMainStyled,
  StepButton,
  TourOverlayinnerStyled,
  StepStyled,
  StepButtonContainer,
} from "./index.styled"

import {
  StepArrow,
  StepTitle,
  StepDescription,
} from "./components"

import {
  TourMain,
  TourSteps,
  DomElementPositions,
} from "./index.types"

import {
  Apos,
  Bold,
  RedText,
  TourBlankLine,
} from "../translations/translations.components.styled"

export const Tour = ({
    tourActive,

    setControlsDrawerOpen,
    setControlsEnabledButtonForTour,
    setMore,

    setCreateGameDialogOpen,
    setJoinGameDialogOpen,
    setGameoverDialogOpen,

    setChatDrawerOpen,
  }: TourMain) => {

  const EDITING_STEPS = true

  const dispatch = useDispatch()

  //
  // ================================================= TOUR STEPS DEFINITION
  //
   
  const tourSteps: TourSteps[] = [

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
        $visible: false,
        $selector: '',
        $direction: 'left',
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
          setTimeout(() => {
            setControlsDrawerOpen(true)
            setControlsEnabledButtonForTour('createGame')
          }, 900)
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
        $nextCallback: () => {
          // setCreateGameDialogOpen(true)
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
  ]







  //
  // ================================================= TOUR LOGIC
  //
  const [currentStep, setCurrentStep] = useState(0)

  //
  // Find all the selector position on load
  //
  const getElementPosition = (selector: string) => {
    if(!selector){
      return {
        $arrowTop: 0,
        $arrowLeft: 0,
        $height: 0,
        $width: 0
      }
    }
    const element = document.querySelector(selector)
    const rect = element?.getBoundingClientRect()

    return {
      $arrowTop: rect?.top ?? 0,
      $arrowLeft: rect?.left ?? 0,
      $height: rect?.height ?? 0,
      $width: rect?.width ?? 0
    }
  }

  const foundElements: React.RefObject<DomElementPositions[] | null> = useRef(null)
  const selectors = tourSteps.map((step) => step.arrow.$selector)

  useEffect(() => {

    if(EDITING_STEPS){
      // console.clear()
      console.log('\n\n\n\ncurrentStep:', currentStep)
    }

    foundElements.current = selectors.map((selector, index) => {


      if(foundElements && foundElements.current && foundElements.current[index].isFoundInDOM){
        return foundElements.current[index]
      }

      const isFoundInDOM = !selector ? false : !!document.querySelector(selector)
      const rect = getElementPosition(selector)

      const rectPosition: DomElementPositions = {
        isFoundInDOM: isFoundInDOM,
        $selector: selector,
        
        $arrowTop: rect.$arrowTop,
        $arrowLeft: rect.$arrowLeft,
        $dialogTop: 35,   // in px
        $dialogLeft: 50,  // in vw
      }
      if(EDITING_STEPS){
        // console.log(`rectPosition - Data for step #${index}`, rectPosition)
      }

      switch(tourSteps[index].arrow.$direction) {
        case 'up':
          rectPosition.$arrowTop += rect.$height
          rectPosition.$arrowLeft += rect.$width / 2
          break 
        case 'down':          
          // rectPosition.$arrowTop -= rect.$height / 2
          rectPosition.$arrowLeft += rect.$width / 2
          break
        case 'left':          
          rectPosition.$arrowLeft += rect.$width
          rectPosition.$arrowTop += rect.$height / 2
          break
        case 'right':          
          // rectPosition.$arrowLeft += rect.$width
          rectPosition.$arrowTop += rect.$height / 2
          break
      }

      /*

      Cases below represent an approximate layout grid.
      It ISN'T a grid. It's only the common desirable locations.

      A1 A2 A3
      B1 B2 B3
      C1 C2 C3

      Note that on mobile, the width is 100%, and therefore, it is only:
        A
        B
        C
      And (TODO) we force to landscape portrait.

      */

      // Dialog position
      switch(tourSteps[index].dialog.$definedPosition) {
        case 'A1':
          // rectPosition.$dialogTop = 0
          // rectPosition.$dialogLeft = 0
          break;

        case 'A2':
          rectPosition.$dialogTop = 0
          // rectPosition.$dialogLeft = 0
          break;

        
        case 'A3':
          // rectPosition.$dialogTop = 0
          // rectPosition.$dialogLeft = 0
          break;

        
        case 'B1':
          // rectPosition.$dialogTop = 0
          // rectPosition.$dialogLeft = 0
          break;

        
        case 'B2':
          rectPosition.$dialogTop = 190
          // rectPosition.$dialogLeft = 0
          break;

        
        case 'B3':
          // rectPosition.$dialogTop = 0
          // rectPosition.$dialogLeft = 0
          break;

        
        case 'C1':
          // rectPosition.$dialogTop = 0
          // rectPosition.$dialogLeft = 0
          break;

        
        case 'C2':
          rectPosition.$dialogTop = 460
          // rectPosition.$dialogLeft = 0
          break;

        
        case 'C3':
          // rectPosition.$dialogTop = 0
          // rectPosition.$dialogLeft = 0
          break;

        
      }

      return {
        $selector: selector,
        isFoundInDOM,
        $arrowTop: rectPosition.$arrowTop,
        $arrowLeft: rectPosition.$arrowLeft,
        $dialogTop: rectPosition.$dialogTop,
        $dialogLeft: rectPosition.$dialogLeft,
        $definedPosition: tourSteps[index].dialog.$definedPosition,
      }
    })

    const foundCount = foundElements.current.filter((f) => f.isFoundInDOM)
    const notFoundCount = foundElements.current.filter((f) => !f.isFoundInDOM)

    if(EDITING_STEPS){
      console.log('foundElements.current', foundElements.current)
      console.log('found:', foundCount.length, foundCount.map((f) => f.$selector))
      console.log('not found:', notFoundCount.length, notFoundCount.map((f) => f.$selector))
    }

    if(notFoundCount.filter((nf) => nf.$selector !== '').length === 0){
      setTimeout(() => {
        dispatch(setIsLoaded(true));
      }, 1000)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectors, currentStep])

  console.log('\n\n ========================= RE-RENDER!\n\n')

  return !tourActive ? <></> : <TourMainStyled id='GranPa'>
      <TourOverlayinnerStyled>

        <StepArrow
          data-step={currentStep}
          {...tourSteps[currentStep].arrow}
          $foundElements={foundElements.current}
          $currentStep={currentStep}
        />

        <StepStyled
          {...tourSteps[currentStep].dialog}
          $dialogTop={foundElements.current?.[currentStep].$dialogTop ?? 0}
          $dialogLeft={foundElements.current?.[currentStep].$dialogLeft ?? 0}

          $arrowTop={foundElements.current?.[currentStep].$arrowTop ?? 0}
          $arrowLeft={foundElements.current?.[currentStep].$arrowLeft ?? 0}
        >
          <StepTitle $title={tourSteps[currentStep].dialog.$title}/>
          <StepDescription $description={tourSteps[currentStep].dialog.$description}/>

          <StepButtonContainer>
            <Chakra.Button
              text={<StepButton>←</StepButton>}
              customVariant='grey'
              disabled={currentStep === 0}
              onClick={() => {
                setCurrentStep((prev) => prev - 1 )
                tourSteps[currentStep].dialog.$prevCallback()
              }}
            />

            <Chakra.Button
              text={<StepButton>→</StepButton>}
              customVariant='green'
              disabled={currentStep === tourSteps.length - 1}
              onClick={() => {
                setCurrentStep((prev) => prev + 1 )
                tourSteps[currentStep].dialog.$nextCallback()
              }}
            />
          </StepButtonContainer>
            
        </StepStyled>

        <div>Step: {currentStep}</div>

      </TourOverlayinnerStyled>
      
    </TourMainStyled>
}