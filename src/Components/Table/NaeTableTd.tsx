import React from 'react'

interface Props {
  children: any
  link?: boolean
  small?: boolean
  number?: boolean
  id?: boolean

  onClick: any
}

export default function NaeTableTd(props: Props) {
  const className = []
  if (props.link) {
    className.push('link')
  }
  if (props.small) {
    className.push('small')
  }
  if (props.number) {
    className.push('text-right')
  }
  if (props.id) {
    className.push('id')
  }

  return <td className={className.join(' ')} onClick={props.onClick}>{props.children}</td>
}
