import { Button, Grid } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { BlogCard } from "../../components/modules/dashboard/Cards/BlogCard";
import { useEffect, useState } from "react";
import { APIGetAllBlogs } from "../../api/blog";

export const BlogScreen = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    loadMenu().then((_) => {});
  }, []);
  const loadMenu = async () => {
    const res = await APIGetAllBlogs();
    setData(res.data ?? []);
  };

  return (
    <section>
      <div className={"flex justify-between"}>
        <div className="text-xl">Blog</div>
        <Button onClick={() => navigate("/dashboard/add-blog")}>
          Add Blog
        </Button>
      </div>
      <div>
        <Grid>
          {data.map((v, key) => (
            <Grid.Col span={4} key={key}>
              <BlogCard data={v} />
              {/*<BlogCard />*/}
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </section>
  );
};
