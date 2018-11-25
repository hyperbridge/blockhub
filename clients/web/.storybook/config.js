import { configure, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { requireModules, getFullPath } from './require_context'

require.context = (directory, useSubdirectories = false, regExp = /^\.\//) => {
  const fullPath = getFullPath(__dirname, directory);

  const keys = {};
  requireModules(keys, fullPath, '.', regExp, useSubdirectories);

  const req = f => keys[f];
  req.keys = () => Object.keys(keys);
  return req;
};


// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/)

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
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
