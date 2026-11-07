"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import type { RefObject } from "react";

import { Button } from "@/components/ui/button";

type EditorNavbarProps = {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  sidebarToggleRef: RefObject<HTMLButtonElement | null>;
};

export function EditorNavbar({ isSidebarOpen, onToggleSidebar, sidebarToggleRef }: EditorNavbarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <header className="z-30 grid h-14 shrink-0 grid-cols-[1fr_auto_1fr] items-center border-b border-border bg-background px-4">
      <div className="flex items-center">
        <Button
          ref={sidebarToggleRef}
          variant="ghost"
          size="icon"
          aria-label={isSidebarOpen ? "Close project sidebar" : "Open project sidebar"}
          aria-expanded={isSidebarOpen}
          aria-controls="project-sidebar"
          onClick={onToggleSidebar}
        >
          <SidebarIcon aria-hidden="true" />
        </Button>
      </div>
      <div />
      <div className="flex items-center justify-end relative z-50">
        <UserButton />
      </div>
    </header>
  );
}
