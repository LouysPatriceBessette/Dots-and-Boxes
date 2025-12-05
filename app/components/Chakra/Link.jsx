import { Link } from '@chakra-ui/react'
import { LuExternalLink } from 'react-icons/lu'

export const ChakraLink = (props) => {

  const { url, text, target='_blank', style={}, externalIcon, ...rest} = props

  const defaultStyle = {
    textDecoration: 'underline',
    color: 'firebrick',
  }

  return (
    <Link
      {...rest}
      href={url}
      text={text}
      isExternal={externalIcon}
      target={target}
      style={{...defaultStyle, ...style}}
    >
      {text} {externalIcon && <LuExternalLink/>}
    </Link>
  )
}