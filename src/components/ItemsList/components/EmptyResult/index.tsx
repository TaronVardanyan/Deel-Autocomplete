import './EmptyResult.css';

const EmptyResult = () => {
  return (
    <div className="empty-result">
      <p>No results found. 😔</p>
      <p>Please try a different search term.</p>
    </div>
  );
};

export default EmptyResult;
