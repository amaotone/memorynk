import { Compartment, EditorState, Extension } from '@codemirror/state'
import { EditorView, ViewUpdate } from '@codemirror/view'
import { useCallback, useEffect, useRef, useState } from 'react'

export type UseCodeMirrorOptions = {
  defaultValue: string
  extensions: Extension[]
  disabled: boolean
  updateListener: (update: ViewUpdate) => void
}

type UseCodeMirrorReturnType = {
  render: () => JSX.Element
  editorView: EditorView | null
}

export const useCodeMirror = ({
  defaultValue,
  extensions: _extensions,
  disabled,
  updateListener
}: UseCodeMirrorOptions): UseCodeMirrorReturnType => {
  const codeMirrorElementRef = useRef<HTMLDivElement | null>(null)
  const [editorView, setEditorView] = useState<EditorView | null>(null)
  const initialized = useRef(false)
  const editable = useRef<Compartment | null>(null)

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      editable.current = new Compartment()
      if (codeMirrorElementRef.current) {
        const extensions = [
          ..._extensions,
          EditorView.updateListener.of(updateListener),
          editable.current.of(EditorView.editable.of(!disabled))
        ]
        const editor = new EditorView({
          state: EditorState.create({
            doc: defaultValue,
            extensions
          }),
          parent: codeMirrorElementRef.current
        })
        setEditorView(editor)
      }
    }
    return () => {
      editorView?.destroy()
    }
  }, [])

  useEffect(() => {
    if (editable.current) {
      editorView?.dispatch({
        effects: [editable.current?.reconfigure(EditorView.editable.of(!disabled))]
      })
    }
  }, [disabled])

  const render = useCallback(() => <div ref={codeMirrorElementRef} />, [])
  return {
    render,
    editorView
  }
}
