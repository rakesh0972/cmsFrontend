const School = (props) => {
  // const myStyle = {
  //   width: "100%",
  //   // height: "100vh",
  //   backgroundImage: 'url("/assets/${props.img}")',
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // };
  return (
    <div>
      <div>
        <img src={props.img} className="bg-cover w-full" />
        <div className=" text-center font-semibold align-middle p-1">
          {props.title}
        </div>
      </div>

      <p className="text-center font-semibold text-arniko-red py-3">
        {props.content}
      </p>
    </div>
  );
};

export default School;
