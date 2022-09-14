const TransactionHistoryPage = ({ onPageChenge }) => {
  return (
    <>
      <h1>transactionType</h1>
      <button type="button" onClick={() => onPageChenge('main')}>
        Back to Main
      </button>
    </>
  );
};

export default TransactionHistoryPage;
