import { defineComponent } from 'vue'

const RenderContent = defineComponent({
  setup() {
    return () => {
      return (
        <div class="tick-mark" id="calibration">
          <div class="mark-top">
            {/* <Calibration direction="up" id="calibrationsUp" multiple={1}/>     */}
          </div>
          <div class="mark-left"></div>
        </div>
      )
    }
  },
})

export default RenderContent
