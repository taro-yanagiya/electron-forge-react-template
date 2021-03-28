/** @jsx jsx */
import { Button, Col, Row } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { FC, useState } from 'react'

interface Props {
  onPost: (text: string) => void
}

const NewEntryPane: FC<Props> = ({ onPost }) => {
  const [text, setText] = useState('')

  const onSubmit = () => {
    if (!text) return
    onPost(text)
    setText('')
  }
  return (
    <div>
      <TextArea
        placeholder="New entry"
        value={text}
        autoSize={{ minRows: 1, maxRows: 6 }}
        onChange={(e) => setText(e.target.value)}
      ></TextArea>
      <Row>
        <Col flex="auto"></Col>
        <Col>
          <Button onClick={onSubmit}>Add</Button>
        </Col>
      </Row>
    </div>
  )
}

export default NewEntryPane
