import React from 'react';
import { SettingsContext } from '../settings/site-context.js';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '40%'
  },
  counter: {
    display: 'inline-block',
    fontSize: '1em',
    border: '2px solid #444',
    borderRadius: '50%',
    lineHeight: '5em',
    textAlign: 'center',
    width: '5em'
  },
  button: {
    height: '3em'
  }
};

class Content extends React.Component {
  static contextType = SettingsContext;

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    console.log(this.context);
    return (
      <>
        <div style={styles.container}>
          <button
            style={styles.button}
            onClick={() => this.context.decrementNum()}
          >
            {' '}
            -{' '}
          </button>
          <span style={styles.counter}>{this.context.count}</span>
          <button
            style={styles.button}
            onClick={() => this.context.incrementNum()}
          >
            {' '}
            +{' '}
          </button>
        </div>
      </>
    );
  }
}

export default Content;
