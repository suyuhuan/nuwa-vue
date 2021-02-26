import '../styles/editor.less'
import { defineComponent } from 'vue'
import ToolArea from './ToolArea'
import ComponentArea from './ComponentArea'
import ConfigArea from './ConfigArea'
import RenderContent from './RenderContent'

const Editor = defineComponent({
  setup() {
    return () => {
      return (
        <div id="editor">
          <div class="hearder">
            <div class="tool-area">
              <ToolArea />
            </div>
          </div>
          <div class="container">
            <div class="render-area">
              <div class="render-content">
                <RenderContent />
              </div>
            </div>
            <div class="component-area">
              <ComponentArea />
            </div>
            <div class="config-area">
              <ConfigArea />
            </div>
          </div>
        </div>
      )
    }
  },
})

export default Editor
