import React from 'react';


class Decrement extends React {

  render(
    <button
      className="buttonClass"
      onClick={() => this.context.decrementNum()}
    >
      {' '}
      -{' '}
    </button>
  )
}