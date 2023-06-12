import { Button } from "@mantine/core";

function Filled(props) {
  return (
    <Button
      className="bg-arniko-red font-pop font-semibold text-base hover:bg-dblue"
      radius="xl"
      size="md"
    >
      {props.tit}
    </Button>
  );
}

export default Filled;
