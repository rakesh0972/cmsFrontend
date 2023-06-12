import {useNavigate} from "react-router-dom";
import {Button} from "@mantine/core";

export const Gallery = () => {
    const navigate = useNavigate();
    return <section>
        <div className={"flex justify-between"}>
            <div className="text-xl">Add Album</div>
            <Button onClick={()=>navigate('/dashboard/add-menu')}>Add Menu</Button>
        </div>
    </section>
}