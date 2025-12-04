import React, { useRef } from 'react'
import Resizer from 'react-image-file-resizer'
import Chakra from 'Pages/StyleGuide/chakraComponents'
import './ImageUploader.sass'

const ImageUploader = (props) => {
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        props.maxWidth ?? 200,
        props.maxHeight ?? 200,
        'PNG',
        100,
        0,
        (uri) => {
          resolve(uri)
        },
        'base64'
      )
    })

  const onChange = async (event) => {
    try {
      const file = event.target.files[0]
      const image = await resizeFile(file)

      props.setImage(image)
    } catch (err) {
      console.log(err)
    }
  }

  const inputRef = useRef(null)

  return (
    <div className='imageUploader'>

      {!props.image && <box-icon
        type='regular'
        name='image'
        color='orange'
      />}

      {props.image && <img alt='Uploaded image' src={props.image}/>}

      <Chakra.Button
        type='button'
        text={props.buttonText}
        onClick={() => {
          inputRef.current?.click()
        }}
      />
      <input
        ref={inputRef}
        type='file'
        onChange={onChange}
      />

      {}
    </div>
  )
}

export default ImageUploader