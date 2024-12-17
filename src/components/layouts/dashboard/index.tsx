import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full max-h-full  bg-secondary">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
