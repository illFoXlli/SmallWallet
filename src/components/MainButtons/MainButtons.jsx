const MainButtons = ({ onPageChenge, transactionType }) => {
  return (
    <div>
      <button onClick={() => onPageChenge(transactionType)}>Расходы</button>
      <button onClick={() => onPageChenge(transactionType)}>Доходы</button>
    </div>
  );
};

export default MainButtons;
