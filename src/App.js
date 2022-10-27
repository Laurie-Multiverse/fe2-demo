import React from 'react';
import { Kanye } from './components/Kanye';

// instead of function App(props) { return <p>Hello World</p> }

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Kanye picSize="150" />
    )
  };

}

export { App };