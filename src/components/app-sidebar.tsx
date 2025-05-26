import { User } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  mainItems,
  toolItems,
  settingsItems,
} from "@/constants/sidebar-constants";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (url: string) => currentPath === url;

  const renderMenuItems = (items: any, groupTitle: string) => (
    <SidebarGroup>
      <div className="px-4 py-3">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
          {groupTitle}
        </h3>
      </div>
      <SidebarGroupContent>
        <SidebarMenu className="space-y-2 px-2">
          {items.map((item: any) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className={`
                  group relative flex items-center px-4 py-3 text-sm font-medium rounded-xl
                  transition-all duration-300 ease-out
                  ${
                    isActive(item.url)
                      ? "bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 transform scale-[1.02]"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
                  }
                  before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-0 before:bg-gradient-to-b before:from-blue-500 before:to-cyan-500 before:rounded-r-full before:transition-all before:duration-300
                  ${isActive(item.url) ? "before:h-8" : "hover:before:h-4"}
                `}
              >
                <Link to={item.url} className="flex items-center w-full">
                  <div
                    className={`
                      flex items-center justify-center mr-4
                      transition-all duration-300
                      ${
                        isActive(item.url)
                          ? "text-white transform scale-110"
                          : "text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:transform group-hover:scale-105"
                      }
                    `}
                  >
                    <item.icon
                      size={20}
                      strokeWidth={isActive(item.url) ? 2.5 : 2}
                    />
                  </div>
                  <span className="flex-1 font-medium">{item.title}</span>
                  {item.badge && (
                    <span
                      className={`
                        inline-flex items-center justify-center px-2.5 py-1 text-xs font-bold rounded-full
                        transition-all duration-300
                        ${
                          isActive(item.url)
                            ? "bg-white/20 text-white backdrop-blur-sm"
                            : "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-sm group-hover:shadow-md"
                        }
                      `}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar className="border-r border-gray-200/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Header */}
      <SidebarHeader className="p-6 border-b border-gray-100/50 dark:border-gray-700/50">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 transform hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900 shadow-sm"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">
              AppName
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              Dashboard v2.0
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex-1 py-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        {renderMenuItems(mainItems, "Main")}
        <div className="my-6"></div>
        {renderMenuItems(toolItems, "Tools")}
        <div className="my-6"></div>
        {renderMenuItems(settingsItems, "System")}
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4 border-t border-gray-100/50 dark:border-gray-700/50">
        <div className="group flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-700/30 hover:from-blue-50 hover:to-cyan-50/50 dark:hover:from-gray-700/50 dark:hover:to-gray-600/30 border border-gray-200/50 dark:border-gray-600/30 transition-all duration-300 cursor-pointer hover:shadow-md hover:scale-[1.02]">
          <div className="relative">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <User size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white dark:border-gray-900 shadow-sm"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
              Aditya
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              adityapandit264@gmail.com
            </p>
          </div>
          <div className="w-2 h-2 bg-green-400 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
