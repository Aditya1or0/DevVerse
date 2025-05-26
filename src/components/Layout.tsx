import type { PropsWithChildren } from "react";
import { SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col dark:bg-gradient-to-br from-background to-muted grid-background bg-zinc-200/50">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <footer className="fixed bottom-0 left-0 right-0 border-t backdrop-blur py-6 supports-[backdrop-filter]:bg-background/60 w-full">
            <div className="px-4 text-center text-gray-400 w-full">
              <p>Made with ❤️ by me</p>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
