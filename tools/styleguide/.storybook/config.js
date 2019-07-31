import { configure, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addDecorator(withKnobs)

const newViewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
}

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...newViewports
  }
})

function loadStories() {
  require('../stories/index.stories.js')
}

configure(loadStories, module)
