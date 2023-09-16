const Course = ({ subjectName, creditHour, remainingCredit }) => {
  return (
    <div className="bg-[white]  rounded-lg">
      <h1 className="text-[16px] font-semibold text-[#2F80ED] pl-[10px] pt-[20px] mb-[10px]">
        Credit Hour Remaining {remainingCredit} hr
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
      <h2 className="pl-[20px] pt-[20px] text-slate-800 py-[15px]">
        Total Credit hour : {creditHour}
      </h2>
      <div className="border-t border-gray-400"></div>
    </div>
  );
};

export default Course;
