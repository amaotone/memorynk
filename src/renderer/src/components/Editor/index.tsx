import { defaultKeymap } from '@codemirror/commands'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { defaultHighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { Compartment } from '@codemirror/state'
import { oneDarkHighlightStyle, oneDarkTheme } from '@codemirror/theme-one-dark'
import { keymap } from '@codemirror/view'
import { useCodeMirror } from '@renderer/hooks/useCodemirror'

const themeExtensions = {
  light: [defaultHighlightStyle],
  dark: [oneDarkTheme]
}
const languageConf = new Compartment()

export const Editor: React.FC = () => {
  const { render } = useCodeMirror({
    defaultValue: '# hello world',
    extensions: [
      keymap.of(defaultKeymap),
      ...themeExtensions.dark,
      languageConf.of(
        markdown({
          base: markdownLanguage
        })
      ),
      syntaxHighlighting(oneDarkHighlightStyle)
    ],
    disabled: false,
    updateListener: (v) => {
      if (v.docChanged || v.viewportChanged) {
        console.log(v.state.doc.toString())
      }
    }
  })

  return <>{render()}</>
}
