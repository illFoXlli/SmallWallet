import Header from '../Header';
import TransactionForm from '../TransactionForm';
import MainButtons from '../MainButtons';
import Categories from 'components/Categories';
import { categoriesList } from '../../data/categoriesList';

const MainPage = () => {
  return (
    <>
      <Header title="Журнал расходов" />
      <main>
        <TransactionForm />
        <MainButtons />
        <Categories categoriesList={categoriesList} />
      </main>
    </>
  );
};

export default MainPage;
