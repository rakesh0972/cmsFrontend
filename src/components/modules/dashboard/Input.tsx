import { Input, Text } from "@mantine/core";
import axios from "axios";
import { useState } from "react";
import DropImg from "./DropImg";

const Inputt = () => {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // await axios.post("http://localhost:3000/menu") .then((response) => setFormData(response.data))
    console.log(formData);
  };

  return (
    <div className="p-8">
      {/* <Text>This is the Title</Text>

      <form onSubmit={() => handleSubmit}>
        <Input
          placeholder="Enter title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />

        <Input
          placeholder="Enter short description"
          type="text"
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};

export default Inputt;
