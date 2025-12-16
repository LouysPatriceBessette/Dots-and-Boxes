 
import { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setIsLoaded } from '../store/actions';
import { useIsLoaded } from '../store/selectors';

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
  DomElementPositions,
} from "./index.types"

import { TourStepsData } from "./steps/Data"

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
  const isLoaded = useIsLoaded()

  //
  // ================================================= TOUR STEPS DEFINITION from a separate file
  //

  const [currentStep, setCurrentStep] = useState(0)

  const tourSteps = TourStepsData({
    setCurrentStep,

    setControlsDrawerOpen,
    setControlsEnabledButtonForTour,
    setMore,

    setCreateGameDialogOpen,
    setJoinGameDialogOpen,
    setGameoverDialogOpen,

    setChatDrawerOpen,
  })

  //
  // ================================================= TOUR LOGIC
  //
  

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

    if(!isLoaded){
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
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectors, currentStep])

  console.log('\n\n ========================= RE-RENDER!\n\n')

  // Arrow X/Y translation (top/left)
  const prev = {
    x: foundElements.current?.[currentStep - 1]?.$arrowLeft,
    y: foundElements.current?.[currentStep - 1]?.$arrowTop,
  }
  const next = {
    x: foundElements.current?.[currentStep]?.$arrowLeft,
    y: foundElements.current?.[currentStep]?.$arrowTop,
  }

  const isTranslation = prev.x && prev.y && next.x && next.y
  let diff = {x: 0, y: 0}
  if(isTranslation){
    diff = {
      // @ts-expect-error There is no erro here
      x: next.x - prev.x,  //prev.x <= next.x ? next.x - prev.x : -(prev.x - next.x),
      // @ts-expect-error There is no erro here
      y: next.y - prev.y,  //prev.y <= next.y ? next.y - prev.y : -(prev.y - next.y),
    }
}


  // Main container de Tour z-index 9999
  return !tourActive ? <></> : <TourMainStyled id='GranPa'>
      <TourOverlayinnerStyled>

        <StepArrow
          data-step={currentStep}
          {...tourSteps[currentStep].arrow}
          $foundElements={foundElements.current}
          $currentStep={currentStep}
          $translation={diff}
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