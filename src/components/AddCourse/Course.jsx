import React from "react";

const Course = ({ subjectName, creditHour }) => {
  return (
    <div className="bg-[white]  rounded-lg">
      <h1 className="text-xl font-semibold text-[#2F80ED] pl-[10px] pt-[20px]">
        Credit Hour Remaining
      </h1>

      <div className="border-t border-gray-400"></div>
      <h2 className=" pl-[20px] pt-[20px] font-semibold text-lg">
        Course Name
      </h2>

      <h2 className="pl-[20px] pt-[20px] text-slate-500">
        {subjectName.map((sub, ind) => {
          const orderNumber = ind + 1;
          return (
            <div key={ind}>
              {orderNumber}. {sub}
            </div>
          );
        })}
      </h2>
      <div className="border-t border-gray-400 my-[10px]"></div>
      <h2 className="pl-[20px] pt-[20px] text-slate-800">
        Total Credit hour: {creditHour}
      </h2>
    </div>
  );
};

export default Course;