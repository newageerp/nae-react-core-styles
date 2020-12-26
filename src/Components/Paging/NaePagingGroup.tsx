import React, { Fragment, useEffect, useState } from 'react'
import NaePagingBtn from './NaePagingBtn'

interface Props {
  pages: number
  onClick: (page: number) => void
  activePage: number
}

export default function NaePagingGroup(props: Props) {
  const { pages, onClick, activePage } = props
  const [mapPages, setMapPages] = useState<number[]>([])

  const _setMapPages = () => {
    const _mapPages: number[] = []

    if (pages < 6) {
      for (let i = 0; i < pages; i++) {
        _mapPages.push(i + 1)
      }
    } else {
      _mapPages.push(1)
      _mapPages.push(2)
      _mapPages.push(3)

      if (activePage > 3 && activePage < pages - 3) {
        _mapPages.push(activePage)
      }

      _mapPages.push(pages - 2)
      _mapPages.push(pages - 1)
      _mapPages.push(pages)
    }
    setMapPages(_mapPages)
  }

  useEffect(_setMapPages, [pages, activePage])

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
