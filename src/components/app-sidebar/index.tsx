import { useAuth } from '@/app/providers/auth';
import logo from '@/assets/title.avif';
import avatar from '@/assets/title.avif';
import { DialogBody } from '@/components/dialog';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Calendar, Home, Inbox, LogOut, Search, Settings } from 'lucide-react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

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
  const auth = useAuth();

  const handleLogout = async () => {
    const result = await auth.logout();

    if (result) {
      toast.info('You were logged out of your session');
      navigate('/auth/login', { replace: true });
    } else {
      toast.warning('You could not be logged out, try again in a few seconds');
      console.log('Logout failed ');
    }
  };
  const username = 'dec0004';

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div>
              <img
                src={logo}
                alt="user"
                aria-label="User avatar"
                className="aspect-auto h-full rounded-md self-start p-10"
              />
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-7">
            <SidebarMenu>
              {items.map((item, i) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {i === 1 || i === 0 ? <SidebarMenuBadge>24</SidebarMenuBadge> : null}
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
                src={avatar}
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
