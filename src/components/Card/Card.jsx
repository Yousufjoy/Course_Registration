import React from "react";

const Card = ({ card, courseName, handleCredit, remaingCreditFun }) => {
  const { image, course_name, course_description, price, credit_hour } = card;

  return (
    <div>
      <div className="w-[312px] h-[402px]  rounded-lg bg-white">
        <img className="pl-[18px] pt-[14px]" src={image} alt="" />
        <h2 className="font-bold pt-2 px-[15px]">{course_name}</h2>
        <p className="text-gray-400 pt-3 px-[15px]">{course_description}</p>

        <div className="flex justify-between px-[15px] pt-[15px]">
          <p>{price}</p>
          <p className="text-gray-600">Credit: {credit_hour}hr</p>
        </div>
        <br />

        <div className=" w-[240px] h-[40px] bg-[#2F80ED] text-white py-[7px] pl-[100px] ml-[30px] rounded-lg">
          <button
            onClick={() => {
              courseName(course_name);
              handleCredit(credit_hour);
              remaingCreditFun(credit_hour);
            }}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
