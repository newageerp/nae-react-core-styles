import React from 'react'

interface Props {
  onClick: () => void
}

export default function NaePagingNext(props: Props) {
  return (
    <button className='next' onClick={props.onClick}>
      <svg
        width='9'
        height='12'
        viewBox='0 0 9 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M2.5527 0.666016L8.00244 6.11576L2.5527 11.5655L1.20244 10.2152L5.30192 6.11576L1.20244 2.01628L2.5527 0.666016Z'
          fill='#3F3356'
        />
      </svg>
    </button>
  )
}
