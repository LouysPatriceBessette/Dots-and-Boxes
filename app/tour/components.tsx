import { 
  StepArrowProps,
  StepTitleProps,
  StepDescriptionProps,
} from "./index.types"
import {
  ArrowPositionner,
  ArrowContainer,
  ArrowRotator,
  ArrowHeadStyled,
  ArrowTailStyled,
  StepTitleStyled,
  StepDescriptionStyled,
} from "./index.styled"

export const StepArrow = (props: StepArrowProps) => {
  return props.$visible ? <>
    <ArrowPositionner
      {...props}
      $arrowTop={props.$foundElements?.[props.$currentStep].$arrowTop}
      $arrowLeft={props.$foundElements?.[props.$currentStep].$arrowLeft}
    >
    <ArrowContainer
      {...props}
      $arrowTop={props.$foundElements?.[props.$currentStep].$arrowTop}
      $arrowLeft={props.$foundElements?.[props.$currentStep].$arrowLeft}
    >
      <ArrowRotator {...props}>
        <>
          <ArrowHeadStyled{...props}/>
          <ArrowTailStyled{...props}/>
        </>
      </ArrowRotator>
    </ArrowContainer>
    </ArrowPositionner>
  </> : <></>
}

export const StepTitle = ({
  $title='Title',
}: StepTitleProps) => {
  return <StepTitleStyled>{$title}</StepTitleStyled>
}

export const StepDescription = ({
  $description='description',
}: StepDescriptionProps) => {
  return <StepDescriptionStyled>{$description}</StepDescriptionStyled>
}