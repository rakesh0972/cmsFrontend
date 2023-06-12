import {Button, Navbar} from "@mantine/core";
import {Ad2, Book, Category, ServerCog, User} from "tabler-icons-react";
import {NavLink} from "react-router-dom";

export const DashboardNav = (props: any) => {
    const gridcontent = [
        {
            title: "Menu",
            icons: <Category/>,
            link: "/dashboard/menu",
        },
        {
            title: "Blog",
            icons: <Book/>,
            link: "/dashboard/blog",
        },
        {
            title: "Advertisements",
            icons: <Ad2/>,
            link: "/dashboard/advertisements",
        },
        {
            title: "Users",
            icons: <User/>,
            link: "/dashboard/user",
        },
        {
            title: "Settings",
            icons: <ServerCog/>,
            link: "/dashboard/settings",
        },
    ];

    return <Navbar
        p="md"
        hiddenBreakpoint="sm"
        hidden={!props.opened}
        width={{sm: 200, lg: 300}}
        className="bg-[#F5F5F5]"
    >

        <Navbar.Section grow>
            {gridcontent.map((data, index) => (
                // flex flex-col my-xs p-xs text-white text-lg font-medium font-pop bg-dblue rounded-lg
                <NavLink className={"cursor-pointer dashboard-link text-gray-800"} to={data.link} key={index}>
                    <div className="py-xs rounded px-lg hover:bg-gray-200 flex gap-sm text-center align-middle px-xs items-center">
                        {data.icons}
                        <div>{data.title}</div>
                    </div>
                </NavLink>
            ))}
        </Navbar.Section>
        <Navbar.Section>
            <button
                className="text-blk font-pop text-lg font-medium flex py-sm   my-xs rounded-lg hover:bg-bl hover:text-white hover:transition duration-400 ease-in-out">
                <div className="flex gap-sm text-center align-middle px-xs">
                    Logout
                </div>
            </button>
        </Navbar.Section>
    </Navbar>
}