import React from 'react'
import { Tooltip } from 'react-tooltip'

// No tooltip on touch devices
// The double click solution was counter intuitive

const TooltippedBoxicon = (props) => {
  const testIsTouch = () => {
    try{document.createEvent('TouchEvent')}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch(error){return false}
    return true
  }
  const isTouch = testIsTouch()

  const tooltipIsopenProp = {
    ...props.tooltip,
  }

  return <div
    data-tooltip-id={props.tooltip.id}
    data-tooltip-content={props.tooltip.content}
    data-tooltip-place={props.tooltip.place}
    onClick={() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      props.callback && props.callback()
    }}
  >
    {!isTouch && <Tooltip {...tooltipIsopenProp}></Tooltip>}
    <box-icon {...props.boxicon} />
  </div>

}

export default TooltippedBoxicon