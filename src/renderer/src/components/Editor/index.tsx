import { historyField } from '@codemirror/commands'
import { markdown } from '@codemirror/lang-markdown'
import { EditorView } from '@codemirror/view'
import CodeMirror from '@uiw/react-codemirror'
import React from 'react'

interface EditorProps {
  value: string
  onChange: (value: string) => void
}

const stateFields = { history: historyField }

export const Editor: React.FC<EditorProps> = (props: EditorProps) => {
  const serializedState = localStorage.getItem('editorState')
  const value = localStorage.getItem('editorValue') || ''
  const theme = EditorView.theme({
    '&': {
      fontSize: '16px'
    },
    '&.cm-editor.cm-focused': {
      outline: 'none'
    }
  })
  return (
    <CodeMirror
      theme={theme}
      value={value}
      extensions={[markdown()]}
      initialState={
        serializedState
          ? {
              json: JSON.parse(serializedState || ''),
              fields: stateFields
            }
          : undefined
      }
      onChange={(value, viewUpdate): void => {
        localStorage.setItem('editorValue', value)
        const state = viewUpdate.state.toJSON(stateFields)
        localStorage.setItem('editorState', JSON.stringify(state))
      }}
    />
  )
}
