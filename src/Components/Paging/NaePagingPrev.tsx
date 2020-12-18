import React from 'react'

interface Props {
  onClick: () => void
}

export default function NaePagingPrev(props: Props) {
  return (
    <button className='prev' onClick={props.onClick}>
      <svg
        width='9'
        height='12'
        viewBox='0 0 9 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M6.5806 0.666016L1.13086 6.11576L6.5806 11.5655L7.93086 10.2152L3.83138 6.11576L7.93086 2.01628L6.5806 0.666016Z'
          fill='#3F3356'
        />
      </svg>
    </button>
  )
}
