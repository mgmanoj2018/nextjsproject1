"use client"
import { useUser } from "@clerk/nextjs";
import { BarChart, Calendar, Clock, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BarLoader } from "react-spinners";

const AppLayout = ({ children }) => {
  const { isLoaded } = useUser()
  const pathname = usePathname()
  console.log(usePathname())
  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: BarChart },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/meetings", label: "Meetings", icon: Users },
    { href: "/availability", label: "Availability", icon: Clock },
  ];
  return <div>
    {!isLoaded && <BarLoader width={"100%"} color="#333" />}
    <div className="flex flex-col h-screen bg-blue-100 md:flex-row">
      <aside className="hidden md:block w-64 bg-white">
        <nav className="mt-8">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className={`py-4 px-4 flex items-center text-gray-700 hover:bg-gray-200 ${pathname === item.href ? "bg-blue-100" : ""}`} href={item.href}><item.icon className="h-5 w-5 mr-3" />{item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-5 md:pt-2">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-4xl md:text-6xl gradient-title pt-2 md:pt-0 text-center md:text-left">
            {navItems.find((item) => item.href === pathname).label
              || "Dashboard"}
          </h2>
        </header>
        {children}
      </main>
      <nav className="md:hidden fixed bg-white bottom-0 left-0 right-0 shadow-md">
        <ul className="flex justify-around">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className={`py-4 px-4 flex flex-col items-center  ${pathname === item.href ? "bg-blue-100" : ""}`} href={item.href}><item.icon className="text-blue-500" />{item.label}
                </Link>
              </li>
            ))}
          </ul>
      </nav>
    </div>
  </div>;
};

export default AppLayout;
