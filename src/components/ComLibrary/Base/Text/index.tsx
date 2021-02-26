import { defineComponent } from 'vue'
import textlogo from '@/assets/12-文本.png'

// import {ITextConfig} from './schema'

const Text = defineComponent({
  props: {
    isTpl: Boolean,
    text: String,
    color: String,
    fontSize: Number,
    lineHeight: Number,
  },
  setup(props) {
    const { isTpl, text, fontSize, color, lineHeight } = { ...props }
    return () => {
      return (
        <>
          {isTpl ? (
            <div>
              <img src={textlogo} alt=""></img>
            </div>
          ) : (
            <div style={{ fontSize, color, lineHeight }}>{text}</div>
          )}
        </>
      )
    }
  },
})

export default Text
