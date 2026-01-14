"use client";

import { useRouter, usePathname } from "next/navigation";
import { AnimatedTabs } from "@/components/ui/animated-tabs";

const tabs = [
  { id: "home", label: "Home" },
  { id: "exoplanet", label: "Exoplanets" },
  { id: "stars", label: "Stars" },
  { id: "blackhole", label: "Blackhole Basics" },
  { id: "solarsystem", label: "Solar Systems" },
];

function TabsDemo() {
  const router = useRouter();
  const pathname = usePathname();

  const currentTabId = pathname === "/" ? "home" : pathname.replace("/", "");

  const handleTabChange = (tabId: string) => {
    const path = tabId === "home" ? "/" : `/${tabId}`;
    router.push(path);
  };

  return (
    <div className="flex min-h-25 w-full items-center justify-center p-4">
      <AnimatedTabs
        key={pathname} 
        tabs={tabs}
        defaultTab={currentTabId}
        onChange={handleTabChange}
      />
    </div>
  );
}

export { TabsDemo };
