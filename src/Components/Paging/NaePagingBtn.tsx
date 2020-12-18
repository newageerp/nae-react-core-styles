import React from 'react'

interface Props {
  onClick: () => void
  active?: boolean
  children: any
}

export default function NaePagingBtn(props: Props) {
  return (
    <button className={props.active ? 'active' : ''} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
