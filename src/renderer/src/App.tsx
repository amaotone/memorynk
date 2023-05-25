import { Editor } from './components/Editor'

function App(): JSX.Element {
  return <Editor value="hello, world" onChange={console.log} />
}

export default App
