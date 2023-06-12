const Information = (props) => {
  return (
    <div className=" p-12 text-center mx-auto ">
      <h1 className="  font-semibold text-3xl">{props.title}</h1>
      <p className=" font-medium  p-8 ">{props.content}</p>
    </div>
  );
};

export default Information;
