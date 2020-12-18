import React from 'react'

interface Props {
  children: any
  link?: boolean
  small?: boolean
  number?: boolean
  id?: boolean
}

export default function NaeTableTh(props: Props) {
  const className = []
  if (props.small) {
    className.push('small')
  }
  if (props.number) {
    className.push('text-right')
  }
  if (props.id) {
    className.push('id')
  }
  return <th scope={"col"} className={className.join(' ')}>{props.children}</th>
}
