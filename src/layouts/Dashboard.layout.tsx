import { useState } from 'react';
import {
	AppShell,
	Navbar,
	Header,
	Footer,
	Aside,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
} from '@mantine/core';
import Inputt from '../components/modules/dashboard/Input';
import DropImg from '../components/modules/dashboard/DropImg';
import MyRichTextEditor from '../components/modules/dashboard/TextEditor';
import Profile from '../components/modules/dashboard/Profile';
import { DashboardNav } from '../components/modules/partials/DashboardNav';
import { Route, Routes } from 'react-router-dom';
import { AddBlog } from '../pages/Dashboard/AddBlog';
import { EditBlog } from '../pages/Dashboard/EditBlog';
import { AddMenu } from '../pages/Dashboard/AddMenu';
import { EditMenu } from '../pages/Dashboard/EditMenu';
import { MenuScreen } from '../pages/Dashboard/MenuScreen';
import { BlogScreen } from '../pages/Dashboard/BlogScreen';
import { Advertisements } from '../pages/Dashboard/Advertisements';
import { AddAdvertisement } from '../pages/Dashboard/AddAdvertisement';
import { EditAdvertisement } from '../pages/Dashboard/EditAdvertisement';
import { Notifications } from '../pages/Dashboard/Notifications';
import { Settings } from '../pages/Dashboard/Settings';
import { Users } from '../pages/Dashboard/Users';
import { AddUser } from '../pages/Dashboard/AddUser';
import { EditUser } from '../pages/Dashboard/EditUser';
import { Statistics } from '../pages/Dashboard/Statistics';
import { MenuDetail } from '../pages/Dashboard/MenuDetail';
import { LoginScreen } from '../pages/auth/Login.screen';

export default function Dashboard() {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	return (
		<AppShell
			className="bg-[#F7FAFC]"
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={<DashboardNav />}
			header={
				<Header height={{ base: 50, md: 70 }} p="md">
					<div
						style={{ display: 'flex', alignItems: 'center', height: '100%' }}
					>
						<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size="sm"
								color={theme.colors.gray[6]}
								mr="xl"
							/>
						</MediaQuery>
						<div className="flex justify-between w-full">
							<img
								className="h-[45px] w-[150px]"
								src="/assets/logo.png"
								alt=""
							/>

							<Profile />
						</div>
					</div>
				</Header>
			}
		>
			<Routes>
				<Route path="add-blog" element={<AddBlog />} />
				<Route path="edit-blog" element={<EditBlog />} />
				<Route path="add-menu" element={<AddMenu />} />
				<Route path="edit-menu/:id" element={<EditMenu />} />
				<Route path="menu" element={<MenuScreen />} />
				<Route path="menu/:id" element={<MenuDetail />} />
				<Route path="blog" element={<BlogScreen />} />
				<Route path="advertisements" element={<Advertisements />} />
				<Route path="add-advertisement" element={<AddAdvertisement />} />
				<Route path="edit-advertisement" element={<EditAdvertisement />} />
				<Route path="notifications" element={<Notifications />} />
				<Route path="settings" element={<Settings />} />
				<Route path="users" element={<Users />} />
				<Route path="add-user" element={<AddUser />} />
				<Route path="edit-user" element={<EditUser />} />
				<Route path="login" element={<LoginScreen />} />
			</Routes>
		</AppShell>
	);
}
