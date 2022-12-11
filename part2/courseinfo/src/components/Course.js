import Header from "./Header";
import Content from "./Content";

const Course = ({ name, parts }) => {
  return (
    <div className="course-block">
      <Header name={name} />
      <Content parts={parts} />
    </div>
  );
};

export default Course;
