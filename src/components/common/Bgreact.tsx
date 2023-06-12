import React from "react";

const Bgreact = (props) => {
  const myStyle = {
    width: "100%",
    // height: "100vh",
    backgroundImage: 'url("/assets/school.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="py-12">
      <div>
        <div>
          <img src={props.img} className="bg-cover w-full" />
          <div className=" text-center font-semibold ">{props.title}</div>
        </div>
      </div>

      <p className="text-center font-semibold  text-[#2A3152] text-sm mb-8">
        {props.content}
      </p>
    </div>
  );
};

export default Bgreact;
