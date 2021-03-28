import { DeleteOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import { FC, useState } from 'react'
import Entry from './model/Entry'

interface Props {
  entry: Entry
  onRemove: () => void
}

const EntryItem: FC<Props> = ({ entry, onRemove }) => {
  const [isActionsShown, setActionsShown] = useState(false)
  return (
    <Card
      hoverable
      actions={
        isActionsShown
          ? [<DeleteOutlined key="delete" onClick={() => onRemove()} />]
          : []
      }
      onMouseEnter={() => setActionsShown(true)}
      onMouseLeave={() => setActionsShown(false)}
    >
      {entry.text}
    </Card>
  )
}

export default EntryItem
