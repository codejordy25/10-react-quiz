function FinishScreen({ maxPossiblePoints, points, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let imoji;
  // if (percentage === 100) {
  //   imoji = "🥳";
  // } else if (percentage >= 80) {
  //   imoji = "😎";
  // } else if (percentage >= 50) {
  //   imoji = "😐";
  // } else {
  //   imoji = "😢";
  // }
  if (percentage === 100) imoji = "🥳";
  if (percentage >= 80 && percentage < 100) imoji = "🙌";
  if (percentage >= 50 && percentage < 80) imoji = "🙂";
  if (percentage > 0 && percentage < 50) imoji = "😢";
  if (percentage === 0) imoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{imoji}</span>Your score is <strong>{points} </strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(highscore: {highscore} points)</p>
    </>
  );
}

export default FinishScreen;
