import { Box } from '@chakra-ui/react'
import { markdown } from '@codemirror/lang-markdown'
import { EditorState } from '@codemirror/state'
import { oneDark } from '@codemirror/theme-one-dark'
import { EditorView } from '@codemirror/view'
import React, { useEffect, useRef } from 'react'

interface EditorProps {
  value: string
  onChange: (value: string) => void
}

export const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (editorRef.current) {
      const startState = EditorState.create({
        doc: value,
        extensions: [
          oneDark,
          markdown(),
          EditorView.updateListener.of((v) => {
            if (v.docChanged) {
              onChange(v.state.doc.toString())
            }
          })
        ]
      })

      const view = new EditorView({
        state: startState,
        parent: editorRef.current
      })

      return () => {
        view.destroy()
      }
    }

    return () => {}
  }, [value, onChange])

  return <Box ref={editorRef} height="100%" />
}
