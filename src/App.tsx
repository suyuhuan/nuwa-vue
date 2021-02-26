import { defineComponent } from 'vue'
import Editor from './views/Editor'

const App = defineComponent({
  setup() {
    return () => {
      return <Editor />
    }
  },
})

export default App
