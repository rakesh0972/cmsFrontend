import { Dropzone } from "@mantine/dropzone";
import axios from "../../../plugins/axios";

const DropImg = () => {
  // const handleDrop = () => {
  //   alert("image dropped");
  // };
  function handleDrop(files) {
    const formData = new FormData();
    formData.append("file", files[0]);

    axios
      .post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Upload successful");
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
  }
  return (
    <div className="my-md">
      <Dropzone
        accept={["image/*"]}
        onDrop={handleDrop}
        className=" sm:w-[20%] "
      >
        <p className="text-hr">Upload images</p>
      </Dropzone>
    </div>
  );
};

export default DropImg;
