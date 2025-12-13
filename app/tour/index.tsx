 
import { useEffect, useState, useRef } from 'react'
import Chakra from '../components/Chakra'
import {
  TourMainStyled,
  TourOverlayinnerStyled,
  StepStyled,
  StepButtonContainer,
  RedText,
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

export const Tour = ({
    $isActive,
    // setControlsDrawerOpen,
    // setCreateGameDialogOpen,
    // setJoinGameDialogOpen,
    // setGameoverDialogOpen,
    // setTriggerChatDrawerOpen,
  }: TourMain) => {

  //
  // ================================================= TOUR STEPS DEFINITION
  //
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tourSteps: TourSteps[] = [

    // ================================================== Intro
    {
      dialog: {
        $visible: true,
        $title: 'Premierement...',
        $description: <>
          <div>Je vais faire le tour des boutons visibles actuellement.</div>
        </>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: false,
        $selector:'',
        $direction: 'left',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== Controls drawer
    {
      dialog: {
        $visible: true,
        $title: 'Controles',
        $description: <>
          <div>Vous voyez la flèche <b><RedText>rouge?</RedText></b></div>
          <div>Ce boutton ouvre un panneau de contrôle.</div>
        </>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector:'#ControlsButton',
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
        $title: 'Nom du joueur 1',
        $description: 'Possiblement le vôte.',
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector:'#player1Name',
        $direction: 'left',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== Player 1 score
    {
      dialog: {
        $visible: true,
        $title: 'Pointage du Joueur 1',
        $description: '',
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector:'#player1Score',
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
        $title: <>Nom du joueur 2</>,
        $description: <>Si vous rejoignez une partie, votre nom sera ici.</>,
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector:'#player2Name',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== Player 2 score
    {
      dialog: {
        $visible: true,
        $title: 'Pointage du Joueur 2',
        $description: '',
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector:'#player2Score',
        $direction: 'right',
        $length: 40,
        $distance: 0,
        $scale: 1,
      }
    },

    // ================================================== Main Grid
    {
      dialog: {
        $visible: true,
        $title: 'Grille',
        $description: <>
          <div>La grille de jeu.</div>
          <div></div>
          <div></div>
        </>,
        $definedPosition: 'C2',
        $prevCallback: () => {},
        $nextCallback: () => {},
      },
  
      arrow: {
        $visible: true,
        $selector:'#MainGrid',
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
        $title: 'Pointage du Joueur 2',
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
        $selector:'#bouette',
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
        $title: 'Pointage du Joueur 2',
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
        $selector:'#player2Score',
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
        $title: 'Pointage du Joueur 2',
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
        $selector:'#player2Score',
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

  // On tour activation
  useEffect(() => {
    if($isActive) {
      console.log('tour is active')
    } else{
      setCurrentStep(0)
    }
  }, [$isActive])

  // On tour step change
  useEffect(() => {
    if(currentStep >= 0 && currentStep < tourSteps.length ) {
      console.log('Step changed to', currentStep)
    } else{
      setCurrentStep(0)
    }
  }, [currentStep, tourSteps])

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
    foundElements.current = selectors.map((selector, index) => {

      const isFoundInDOM = !selector ? false : !!document.querySelector(selector)
      const rect = getElementPosition(selector)

      const rectPosition: DomElementPositions = {
        $selector: selector,
        isFoundInDOM: isFoundInDOM,
        $arrowTop: rect.$arrowTop,
        $arrowLeft: rect.$arrowLeft,
        $dialogTop: 15,
        $dialogLeft: 50,
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

      console.log('tourSteps[index].dialog.$definedPosition', tourSteps[index].dialog.$definedPosition)

      /*

      Cases below represent an approximate layout grid.
      It ISN'T a grid. It's only the common desirable locations.

      A1 A2 A3
      B1 B2 B3
      C1 C2 C3

      Note that on moblie, the width is 100%, and therefore, it is only:
         A
         B
         C

      */

      // Dialog position
      switch(tourSteps[index].dialog.$definedPosition) {
        case 'A1':
          // rectPosition.$dialogTop = 0
          // rectPosition.$dialogLeft = 0
          break;

        case 'A2':

          break;

        
        case 'A3':
          // rectPosition.$dialogTop = 0
          // rectPosition.$dialogLeft = 0
          break;

        
        case 'B1':

          break;

        
        case 'B2':
          // rectPosition.$dialogTop = 0
          // rectPosition.$dialogLeft = 0
          break;

        
        case 'B3':

          break;

        
        case 'C1':
          // rectPosition.$dialogTop = 0
          // rectPosition.$dialogLeft = 0
          break;

        
        case 'C2':
          rectPosition.$dialogTop = 60
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectors])

  return (
    <TourMainStyled $isActive={$isActive}>
      <TourOverlayinnerStyled>

        <StepArrow
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
              text='Back'
              customVariant='grey'
              disabled={currentStep === 0}
              onClick={() => {
                setCurrentStep((prev) => prev - 1 )
                tourSteps[currentStep].dialog.$nextCallback()
              }}
            />

            <Chakra.Button
              text='OK'
              customVariant='green'
              disabled={currentStep === tourSteps.length - 1}
              onClick={() => {
                setCurrentStep((prev) => prev + 1 )
                tourSteps[currentStep].dialog.$nextCallback()
              }}
            />
          </StepButtonContainer>
            
        </StepStyled>
      </TourOverlayinnerStyled>
    </TourMainStyled>
  )
}