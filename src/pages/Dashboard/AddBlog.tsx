import { useState } from "react";
import axios from "../../plugins/axios";

export const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [menu, setMenu] = useState("");
  // const [images, setImages] = useState<File[]>([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      title: title,
      content: content,
      menu: menu,
      // images: images,
    };

    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("content", content);
    // formData.append("menu", menu);

    // for (let i = 0; i < images.length; i++) {
    //   formData.append("images[]", images[i]);
    // }

    await axios
      .post("http://localhost:3001/blog", formData)
      .then((res) => {
        console.log("done");
      })
      .catch((err) => {
        console.log("err", err);
      });
    console.log("formData", formData);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleMenuChange = (event) => {
    setMenu(event.target.value);
  };

  // const handleFileInputChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const files = Array.from(event.target.files as FileList);
  //   setImages(files);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <input
          id="content"
          name="content"
          value={content}
          onChange={handleContentChange}
        ></input>
      </div>
      <div>
        <label htmlFor="menu">menu id:</label>
        <input
          id="menu"
          name="menu"
          value={menu}
          onChange={handleMenuChange}
        ></input>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
