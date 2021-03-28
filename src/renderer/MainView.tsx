/** @jsx jsx */
import { FC, useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { v4 as uuid } from 'uuid'
import NewEntryPane from './NewEntryPane'
import EntryList from './EntryList'
import Entry from './model/Entry'

const MainView: FC = () => {
  const [entries, setEntries] = useState<Entry[]>([])

  useEffect(() => {
    setEntries(JSON.parse(localStorage.getItem('entries') ?? '[]'))
    console.log('effect')
  }, [])

  useEffect(() => {
    saveEntries(entries)
  }, [entries])

  const saveEntries = (entries: Entry[]) => {
    localStorage.setItem('entries', JSON.stringify(entries))
  }

  const addEntry = (text: string) => {
    setEntries([
      ...entries,
      {
        id: uuid(),
        text,
      },
    ])
  }

  const removeEntry = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id))
  }

  return (
    <div
      css={css`
        padding: 32px;
      `}
    >
      <NewEntryPane onPost={addEntry} />
      <EntryList entries={entries} onRemove={removeEntry} />
    </div>
  )
}

export default MainView
