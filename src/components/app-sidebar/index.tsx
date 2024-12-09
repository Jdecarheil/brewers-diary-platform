import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSignOut } from "@nhost/react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

// Menu items.
const items = [
	{
		title: "Your Recipes",
		url: "/app/recipes",
		icon: Home,
	},
	{
		title: "Public Recipes",
		url: "#",
		icon: Inbox,
	},
	{
		title: "Tools",
		url: "#",
		icon: Calendar,
	},
	{
		title: "Sessions",
		url: "#",
		icon: Search,
	},
	{
		title: "Settings",
		url: "#",
		icon: Settings,
	},
];

export function AppSidebar() {
	const navigate = useNavigate();
	const handleNav = (value: string) => {
		navigate(value);
	};
	const { signOut } = useSignOut();
	const handleLogout = () => {
		signOut();

		navigate("/auth/login");
	};

	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a onClick={() => handleNav(item.url)}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<Button title="logout" onClick={() => handleLogout()} />
			</SidebarFooter>
		</Sidebar>
	);
}
