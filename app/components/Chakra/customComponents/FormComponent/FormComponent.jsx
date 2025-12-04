import React from 'react'
import { deepCopy, randomReactKey } from '../../../basics/utils'
import './FormComponent.sass'


/** FormComponent
 * @params Mandatory:
 * - element {string} - 'input' | 'select' | switch | checkboxRadioGroup'
 * - id {string}
 * - label {string | array[string]} - array for "group" elements
 * - state {any}
 * - stateSetter {React.SetStateAction}
 *
 * @params For select:
 * - options {array[object]}
 * - - object
 * - - - value: {string | number}
 * - - - text: {string}
 *
 * @params For input:
 * - type {string} - 'text' | 'number' | 'password' | 'checkbox' | 'radio'
 *
 * @params For checkbox / radio groups (checkboxRadioGroup)
 * - name {string} - for radio inputs
 * - texts {array[string]} - for checkbox and radio groups
 * - values {array[string]} - for checkbox and radio groups (untranslated value)
 *
 * @params For switch - Yes / No translations
 * switchYes {string}
 * switchNo {string}
 *
 * @params For textarea
 * 'noResize' can be passed in classes
 *
 * @params Optional:
 * - disabled {boolean}
 *
*/
export default function FormComponent(props) {

  const {
    // Mandatory props
    element,
    id,
    label,
    state,
    stateSetter,

    // Only for select
    options,

    // Only for input
    type,

    // Only for switch
    switchYes,
    switchNo,

    // Optional
    disabled,
    name,
    texts,
    values,
    classes='',

    // To detect any change
    changeDetector = () => {},

  } = props

  let result = <></>

  switch(element){
    case 'input':
      result = <div className={`formComponent ${classes}`}>
        {state && <label htmlFor={id}>{label}</label>}
        <input
          disabled={disabled}
          id={id}
          type={type}
          value={state}
          placeholder={label ?? ''}
          onChange={(event) => {
            stateSetter(event.target.value)
            changeDetector()
          }}
        />
      </div>
      break

    case 'select':
      result = <div className={`formComponent ${classes}`}>
        {state && label && <label htmlFor={id}>{label}</label>}
        <select
          disabled={disabled}
          id={id}
          value={state}
          onChange={(event) => {
            stateSetter(event.target.value)
            changeDetector()
          }}
        >
          {options.map((o, i)=> {
            const key = `${id}_${i}`

            return <option
              key={key}
              disabled={o.value === ''}
              value={o.value}
            >
              {o.text || o.value}
            </option>
          })}

        </select>
      </div>
      break

    case 'switch':
      result = <div className={`formComponent ${classes}`}>
        <label className='switch'>
          <input
            id={randomReactKey()}
            disabled={disabled}
            type='checkbox'
            checked={state}
            onChange={() => {
              stateSetter((previousState) => !previousState)
              changeDetector()
            }}
          />
          <span className='slider round'></span>
        </label>
        {label && <span className="switchLabel">{label}</span>}
        <span className="switchAnswer">{state ? switchYes : switchNo}</span>
      </div>
      break

    case 'checkboxRadioGroup':
      result = <div className={`formComponent ${classes}`}>
        {label && <label htmlFor={id} className='higher'>{label}</label>}

        {values.map((v, i) => {
          return <div key={`${id}_${i}`}>
            <input
              id={`${id}_${i}`}
              type={type}
              name={name}
              checked={type === 'radio' ? state === v : state[i] === v}
              value={v}
              onChange={(event) => {
                if(type === 'radio'){
                  stateSetter(event.target.value)
                }else{
                  stateSetter((previousState) => {
                    const state = deepCopy(previousState)
                    state[i] = !state[i] ? event.target.value : undefined
                    return state
                  })
                }

                changeDetector()
              }}
            />
            {texts[i]}
          </div>
        })}


      </div>
      break

    case 'textarea':
      result = <div className={`formComponent ${classes}`}>
        {state && label && <label htmlFor={id}>{label}</label>}
        <textarea
          className={classes}
          disabled={disabled}
          id={id}
          placeholder={label ?? ''}
          onChange={(event) => {
            stateSetter(event.target.value)
            changeDetector()
          }}
          defaultValue={state}
        />
      </div>
      break

    default:
      result = <></>
  }

  return result
}