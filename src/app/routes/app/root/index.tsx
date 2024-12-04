import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { Outlet } from 'react-router-dom';
import { DashboardLayout } from '@/components/layouts/dashboard';

export const AppRoot = () => {
  return (
    // <SidebarProvider>
    //   <AppSidebar />
    //   <main>
    //     <SidebarTrigger />
    //     <Outlet />
    //   </main>
    // </SidebarProvider>
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

// import { Outlet } from 'react-router-dom';

// import { DashboardLayout } from '@/components/layouts';

// export const AppRoot = () => {
//   return (
//     <DashboardLayout>
//       <Outlet />
//     </DashboardLayout>
//   );
// };

export const AppRootErrorBoundary = () => {
  return <div>Something went wrong!</div>;
};
