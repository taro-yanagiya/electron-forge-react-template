/** @jsx jsx */
import { Card, Space } from 'antd'
import { FC } from 'react'
import { css } from '@emotion/react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import Entry from './model/Entry'
import EntryItem from './EntryItem'

interface Props {
  entries: Entry[]
  onRemove: (id: string) => void
}

const EntryList: FC<Props> = ({ entries, onRemove }) => {
  console.log('render')
  return (
    <Space
      direction="vertical"
      css={css`
        width: 100%;
        margin: 24px 0;
      `}
    >
      {entries.map((entry) => (
        <EntryItem
          key={entry.id}
          entry={entry}
          onRemove={() => onRemove(entry.id)}
        />
      ))}
    </Space>
  )
}

export default EntryList
