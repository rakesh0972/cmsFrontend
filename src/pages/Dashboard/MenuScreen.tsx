import { Button, Grid } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { MenuCard } from "../../components/modules/dashboard/Cards/MenuCard";
import { useEffect, useState } from "react";
import { APIGetAllMenus } from "../../api/menu";

export const MenuScreen = () => {
  const [data, setData] = useState([]);

  console.log("data", data);

  useEffect(() => {
    loadMenu().then((_) => {});
  }, []);
  const loadMenu = async () => {
    const res = await APIGetAllMenus();
    setData(res.data ?? []);
  };

  const navigate = useNavigate();
  return (
    <section>
      <div className={"flex justify-between"}>
        <div className="text-xl">Menu</div>
        <Button onClick={() => navigate("/dashboard/add-menu")}>
          Add Menu
        </Button>
      </div>
      <div>
        <Grid>
          {data.map((v, key) => (
            <Grid.Col span={4} key={key}>
              <MenuCard data={v} />
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </section>
  );
};
