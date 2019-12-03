import React from 'react';

export const SettingsContext = React.createContext();

export default class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      incrementNum: this.incrementNum,
      decrementNum: this.decrementNum
    };
  }

  incrementNum = () => this.setState({ count: (this.state.count += 1) });

  decrementNum = () => this.setState({ count: (this.state.count -= 1) });

  render() {
    return (
      // .Provider is built in
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}
