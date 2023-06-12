function Graybox(props) {
  return (
    <>
      <div className="div p-4 bg-gray text-white text-center flex flex-col gap-3 mt-8 ">
        <p className="mt-12">{props.icon}</p>
        <h2 className="text-6xl">{props.number}</h2>
        <p className="text-base font-normal">{props.info}</p>
      </div>
    </>
  );
}

export default Graybox;
