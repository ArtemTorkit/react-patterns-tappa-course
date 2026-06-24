interface FallbackProps {
    error: Error
    onRetry: () => void
}

const FallBack = ({ error, onRetry }: FallbackProps) => {
  return (
    <div>
      {error.message}

      <div className="">
        <button onClick={onRetry}>Retry</button>
      </div>
    </div>
  );
};

export default FallBack;
