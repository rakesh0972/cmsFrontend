import { ActionIcon, Badge, Card, Grid } from "@mantine/core";
import { Edit, Trash } from "tabler-icons-react";

export const UserCard = () => {
  return (
    <Card p={"sm"}>
      <Grid p={0}>
        <Grid.Col span={4} p={0}>
          <img
            src="https://images.pexels.com/photos/459403/pexels-photo-459403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className={"w-full object-cover object-center rounded"}
            alt=""
            height={"100"}
          />
        </Grid.Col>
        <Grid.Col span={8} className={"flex flex-col"} py={0} px={"xs"}>
          <div className={"flex-grow"}>
            <div className="font-bold two-line">Name</div>
            <Badge>Title</Badge>
          </div>
          <div className="buttons flex justify-end">
            <ActionIcon>
              <Edit />
            </ActionIcon>
            <ActionIcon>
              <Trash />
            </ActionIcon>
          </div>
        </Grid.Col>
      </Grid>
    </Card>
  );
};
