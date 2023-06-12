import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mantine/core";
import { AdvertisementCard } from "../../components/modules/dashboard/Cards/AdvertisementCard";
import { useEffect, useState } from "react";
import { APIGetAllAdvertisment } from "../../api/advertisment";

export const Advertisements = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    loadMenu().then((_) => {});
  }, []);
  const loadMenu = async () => {
    const res = await APIGetAllAdvertisment();
    setData(res.data ?? []);
  };

  return (
    <section>
      <div className={"flex justify-between"}>
        <div className="text-xl">Advertisements</div>
        <Button onClick={() => navigate("/dashboard/add-advertisement")}>
          Add Advertisments
        </Button>
      </div>
      <div>
        <Grid>
          {data.map((v, key) => (
            <Grid.Col span={4} key={key}>
              <AdvertisementCard data={v} />
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </section>
  );
};
