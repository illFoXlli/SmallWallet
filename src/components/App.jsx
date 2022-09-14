import MainPage from './MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';
import { Component } from 'react';

class App extends Component {
  state = {
    activPage: 'main',
  };

  onPageChenge = page => {
    this.setState({ activPage: page });
  };

  render() {
    return (
      <div>
        {this.state.activPage === 'main' ? (
          <MainPage onPageChenge={this.onPageChenge} />
        ) : (
          <TransactionHistoryPage onPageChenge={this.onPageChenge} />
        )}
      </div>
    );
  }
}

export default App;
