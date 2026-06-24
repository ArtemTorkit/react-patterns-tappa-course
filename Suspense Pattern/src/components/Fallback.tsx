interface FallbackProps {
  error: Error;
  onRetry: () => void;
}

const Fallback = ({ error, onRetry }: FallbackProps) => {
  return (
    <div>
      <h2>An Error Occured!</h2>
      <div>{error.message}</div>
      <div>
        <button onClick={onRetry}>retry</button>
      </div>
    </div>
  );
};

export default Fallback;
