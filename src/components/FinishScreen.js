function FinishScreen({ maxPossiblePoints, points }) {
  const percentage = ({ maxPossiblePoints } / { points }) * 100;
  return (
    <p className="result">
      Your score is <strong>{points}</strong> out of
      {maxPossiblePoints} ({Math.ceil(percentage)}%)
    </p>
  );
}

export default FinishScreen;
