import { registerRootComponent } from 'expo';

import App from './App';
import StorybookUIRoot from './.rnstorybook';

const SHOW_STORYBOOK = true; // 👈 troque para false quando quiser o app normal

function Root() {
  return SHOW_STORYBOOK ? <StorybookUIRoot /> : <App />;
}

registerRootComponent(Root);