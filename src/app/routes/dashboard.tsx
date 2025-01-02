import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ReactNode } from 'react';
import { Params, useMatches } from 'react-router';

type IMatches = {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: unknown;
};

type HandleType = {
  crumb: (param?: string) => React.ReactNode;
};

export function DashboardLayout({ children }: { children: ReactNode }) {
  const matches: IMatches[] = useMatches();

  const crumbs = matches
    .filter(({ handle }) => Boolean(handle && (handle as HandleType).crumb))
    .map(({ handle, data, id }) => {
      const crumb = (handle as HandleType).crumb(data as string | undefined) as ReactNode;
      const crumbId = id;
      return {
        crumb: crumb,
        id: crumbId,
      };
    });

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {crumbs.map(({ crumb, id }) => {
                    return (
                      <>
                        <BreadcrumbItem key={id} className="hidden md:block">
                          {crumb}
                        </BreadcrumbItem>
                        <BreadcrumbSeparator key={id} className="hidden md:block" />
                      </>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
