import { Button } from '@/components/ui/button';
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';

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
import { useNavigate } from 'react-router';

const items = [
  {
    title: 'Your Recipes',
    url: '/app/recipes',
    icon: Home,
  },
  {
    title: 'Public Recipes',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Tools',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Sessions',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const handleNav = (value: string) => {
    navigate(value);
  };

  const handleLogout = async () => {
    const logout = await signout();

    if (logout) {
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessToken');
      navigate('/auth/login');
    } else {
      console.log('Logout failed ');
    }
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
                    <Button onClick={() => handleNav(item.url)}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Button>
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
