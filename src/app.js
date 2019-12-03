import React from 'react';

import Content from './components/editor/static-context.js';
import SettingsProvider from './components/settings/site-context.js';

// import './components/editor/editor.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <SettingsProvider>
          <Content />
          <div></div>
        </SettingsProvider>
      </>
    );
  }
}
