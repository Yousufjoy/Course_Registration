import { useState } from "react";
import "./App.css";
import Course from "./components/AddCourse/Course";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";

function App() {
  const [subjectName, setSubjectName] = useState([]);
  const [creditHour, setCreditHour] = useState(0);

  const courseName = (name) => {
    if (!subjectName.includes(name)) {
      // Check if the name doesn't already exist in the array
      const newCourseName = [...subjectName, name];
      setSubjectName(newCourseName);
    } else {
      alert("This course has already been added");
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-between max-w-7xl mx-auto">
        <Cards courseName={courseName} />
        <div className="w-[250px]">
          <Course
            subjectName={subjectName}
            creditHourCalculate={creditHourCalculate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
