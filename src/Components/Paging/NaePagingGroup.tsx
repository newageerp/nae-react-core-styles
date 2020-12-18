import React, { Fragment } from 'react'
import NaePagingBtn from './NaePagingBtn'

interface Props {
  pages: number
  onClick: (page: number) => void
  activePage: number
}

export default function NaePagingGroup(props: Props) {
  const { pages, onClick, activePage } = props

  const mapPages: number[] = []

  if (pages < 6) {
    for (let i = 0; i < pages; i++) {
      mapPages.push(i + 1)
    }
  } else {
    mapPages.push(1)
    mapPages.push(2)
    mapPages.push(3)

    if (activePage > 3 && activePage < pages - 3) {
      mapPages.push(activePage)
    }

    mapPages.push(pages - 2)
    mapPages.push(pages - 1)
    mapPages.push(pages)
  }

  return (
    <div className='paging-group'>
      {mapPages.map((_p: number, index: number) => {
        const isSep = index > 0 && _p - mapPages[index - 1] > 1
        return (
          <Fragment>
            {isSep && <button>...</button>}
            <NaePagingBtn
              active={_p === activePage}
              key={'page-' + _p}
              onClick={() => onClick(_p)}
            >
              {_p}
            </NaePagingBtn>
          </Fragment>
        )
      })}
    </div>
  )
}
