import React from 'react'
import { useHistory } from 'react-router-dom'

export default function NaeRouterBackBtn() {
  const history = useHistory()

  const goBack = (e: any) => {
    e.preventDefault()
    history.goBack()
  }
  return (
    <a href='/back' style={{ marginRight: 15 }} onClick={goBack}>
      <svg
        width='7'
        height='15'
        viewBox='0 0 7 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5.1748 2L2.0002 7.55556L5.1748 13.1111'
          stroke='#475F7B'
          strokeWidth='2'
          strokeLinecap='square'
        />
      </svg>
    </a>
  )
}
