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
  return <>
    <ArrowPositionner
      {...props}
      id='ARROW-POSITIONNER'
      $arrowTop={props.$foundElements?.[props.$currentStep].$arrowTop}
      $arrowLeft={props.$foundElements?.[props.$currentStep].$arrowLeft}
    >
    <ArrowContainer
      {...props}
      id='ARROW-CONTAINER'
      $arrowTop={props.$foundElements?.[props.$currentStep].$arrowTop}
      $arrowLeft={props.$foundElements?.[props.$currentStep].$arrowLeft}
    >
      <ArrowRotator {...props} id={undefined}>
        <>
          <ArrowHeadStyled{...props} id={undefined}/>
          <ArrowTailStyled{...props} id={undefined}/>
        </>
      </ArrowRotator>
    </ArrowContainer>
    </ArrowPositionner>
  </>
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