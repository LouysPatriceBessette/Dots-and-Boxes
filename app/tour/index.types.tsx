import React from "react"

export type DomElementPositions = {
  $selector: string,
  isFoundInDOM: boolean,
  $arrowTop: number,
  $arrowLeft: number,
  $dialogTop?: number,
  $dialogLeft?: number,
}

export type TourMain = {
  $isActive: boolean,

  setControlsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setCreateGameDialogOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setJoinGameDialogOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setGameoverDialogOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setTriggerChatDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export type TourMainStyledProps = {
  $isActive: boolean,
}

export type TourSteps = {
  dialog: {
    $visible: boolean,
    $title: string | React.ReactElement<string>,
    $description: string | React.ReactElement<string>
    $definedPosition?: 'A1' | 'A2' | 'A3' | 'B1' | 'B2' | 'B3' | 'C1' | 'C2' | 'C3',
    $prevCallback: () => void,
    $nextCallback: () => void,
  },

  arrow: {
    $visible: boolean,
    $selector: string,
    $direction: 'up' | 'down' | 'left' | 'right',
    $length: number,
    $distance: number,
    $scale: number,
  }
}

export type StyledStepProps = {
  $visible: boolean,
  $arrowTop: number,
  $arrowLeft: number,
  $dialogTop: number,
  $dialogLeft: number,
  $definedPosition?: 'A1' | 'A2' | 'A3' | 'B1' | 'B2' | 'B3' | 'C1' | 'C2' | 'C3',
}

export type StepArrowProps = {
  $visible: boolean,
  $selector: string,
  $arrowTop?: number,
  $arrowLeft?: number,
  $direction: 'up' | 'down' | 'left' | 'right',
  $length: number,
  $distance: number,
  $scale: number,
  children?: React.ReactElement<StepArrowProps>,

  $foundElements?: DomElementPositions[] | null,
  $currentStep: number
}

export type StepTitleProps =  {
  $title: string | React.ReactElement<string>
}

export type StepDescriptionProps = {
  $description: string  | React.ReactElement<string>
}