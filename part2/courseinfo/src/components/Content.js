import Part from "./Part";

const Content = ({ parts }) => {
  let totalExercises = 0;
  const parte = parts.map((part) => {
    totalExercises += part.exercises;
    return <Part key={part.id} name={part.name} exercises={part.exercises} />;
  });
  return (
    <div>
      {parte}
      <strong>Total of {totalExercises} exercises</strong>
    </div>
  );
};

export default Content;
