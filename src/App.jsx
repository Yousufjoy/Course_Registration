import { useState } from "react";
import "./App.css";
import Course from "./components/AddCourse/Course";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Swal from "sweetalert2";

function App() {
  const [subjectName, setSubjectName] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  // This function is for calculating remaining credit!
  const remaingCreditFun = (remain) => {
    const remaingValue = remainingCredit - remain;
    if (remaingValue > 0) {
      setRemainingCredit(remaingValue);
    } else {
      Swal.fire("Credit hour remaining can not be zero or less!");
    }
  };

  // This function is for adding new courses
  const courseName = (name) => {
    if (!subjectName.includes(name)) {
      // Check if the name doesn't already exist in the array
      const newCourseName = [...subjectName, name];
      setSubjectName(newCourseName);
    } else {
      Swal.fire("This course has already been added");
    }
  };
  // This function is for Adding credit
  const handleCredit = (credit) => {
    const newCreditHour = creditHour + credit;
    if (newCreditHour <= 20) {
      setCreditHour(newCreditHour);
    } else {
      Swal.fire("You Can Not exceed 20 Credit Limit!");
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-between max-w-7xl mx-auto">
        <Cards
          courseName={courseName}
          handleCredit={handleCredit}
          remaingCreditFun={remaingCreditFun}
        />
        <div className="w-[250px]">
          <Course
            subjectName={subjectName}
            creditHour={creditHour}
            remainingCredit={remainingCredit}
          />
        </div>
      </div>
    </>
  );
}

export default App;
