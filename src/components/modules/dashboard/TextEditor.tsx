import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";

function MyRichTextEditor() {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <RichTextEditor
      value={value}
      onChange={handleChange}
      placeholder="Enter text here"
    />
  );
}
export default MyRichTextEditor;
