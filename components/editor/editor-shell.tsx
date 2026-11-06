"use client";

import { useRef, useState, type ReactNode } from "react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

export function EditorShell({ children }: { children?: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarToggleRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-background">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((isOpen) => !isOpen)}
        sidebarToggleRef={sidebarToggleRef}
      />
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <main aria-label="Editor canvas" className="h-full w-full overflow-auto">
          {children}
        </main>
        <ProjectSidebar isOpen={isSidebarOpen} onClose={() => {
          setIsSidebarOpen(false);
          sidebarToggleRef.current?.focus();
        }} />
      </div>
    </div>
  );
}
