import { MultiSelect } from "@mantine/core";

const Multi = () => {
  return (
    <MultiSelect
      data={[
        "React",
        "Angular",
        "Svelte",
        "Vue",
        "Riot",
        "Next.js",
        "Blitz.js",
      ]}
      label="Add Category"
      placeholder="Pick Category"
      defaultValue={["react", "next"]}
      // clearButtonProps={{ "aria-label": "Clear selection" }}
      clearable
    />
  );
};

export default Multi;
