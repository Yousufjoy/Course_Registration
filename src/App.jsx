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

  const handleCredit = (credit) => {
    const newCreditHour = creditHour + credit;
    if (newCreditHour !== 20) {
      setCreditHour(newCreditHour);
    } else {
      alert("You Can Not exceed 20 Credit Limit!");
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-between max-w-7xl mx-auto">
        <Cards courseName={courseName} handleCredit={handleCredit} />
        <div className="w-[250px]">
          <Course subjectName={subjectName} creditHour={creditHour} />
        </div>
      </div>
    </>
  );
}

export default App;
