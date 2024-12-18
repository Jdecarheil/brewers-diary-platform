import { Button } from '@/components/ui/button';

import { DialogBody } from '@/components/dialog';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
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
} from '@/components/ui/sidebar';
import { signout } from '@/lib/auth';
import { Calendar, Home, Inbox, LogOut, Search, Settings } from 'lucide-react';
import { useNavigate } from 'react-router';

const items = [
  {
    title: 'Your Recipes',
    url: '/app/recipes',
    icon: Home,
  },
  {
    title: 'Public Recipes',
    url: '/app/public-recipes',
    icon: Inbox,
  },
  {
    title: 'Tools',
    url: '/app/tools',
    icon: Calendar,
  },
  {
    title: 'Sessions',
    url: '/app/sessions',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '/app/settings',
    icon: Settings,
  },
  {
    title: 'About',
    url: '/app/about',
    icon: Settings,
  },
  {
    title: 'Help',
    url: '/app/help',
    icon: Settings,
  },
];

export function AppSidebar() {
  const navigate = useNavigate();
  // const handleNav = (value: string) => {
  //   navigate(value);
  // };

  const handleLogout = async () => {
    const logout = await signout();

    if (logout) {
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessToken');
      navigate('/auth/login', { replace: true });
    } else {
      console.log('Logout failed ');
    }
  };
  const username = 'dec0004';

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
                    <a href={item.url}>
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
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="justify-between" title={username}>
              <img
                src="https://github.com/shadcn.png"
                alt="user"
                aria-label="User avatar"
                className="aspect-auto h-full rounded-md self-start"
              />
              {username}
              <LogOut />
            </Button>
          </DialogTrigger>
          <DialogBody
            title="Do you want to logout?"
            description="You will be logged out of this session."
            buttonAction={handleLogout}
            buttonTitle="Logout"
          />
        </Dialog>
      </SidebarFooter>
    </Sidebar>
  );
}
