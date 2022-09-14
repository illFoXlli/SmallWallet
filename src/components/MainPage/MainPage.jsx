import Header from '../Header';
import TransactionForm from '../TransactionForm';
import MainButtons from '../MainButtons';
import Categories from 'components/Categories';
import { categoriesList } from '../../data/categoriesList';
import { Component } from 'react';

class MainPage extends Component {
  state = {
    isCategories: false,
  };
  openCategories = () => {
    this.setState({ isCategories: true });
    console.log('=======ok=========');
  };
  closeCategories = () => {
    this.setState({ isCategories: false });
  };

  render() {
    return (
      <>
        {!this.state.isCategories ? (
          <>
            <Header title={'Журнал расходов'} />
            <TransactionForm
              openCategories={this.openCategories}
              closeCategories={this.closeCategories}
            />
            <MainButtons changePage={this.props.changePage} />
          </>
        ) : (
          <Categories
            categoriesList={categoriesList}
            closeCategories={this.closeCategories}
          />
        )}
      </>
    );
  }
}

export default MainPage;
