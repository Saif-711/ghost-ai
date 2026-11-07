"use client";

import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type ProjectSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  onNewProject?: () => void;
};

export function ProjectSidebar({ isOpen, onClose, onNewProject }: ProjectSidebarProps) {
  return (
    <aside
      id="project-sidebar"
      aria-labelledby="project-sidebar-title"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "absolute inset-y-0 left-0 z-20 flex w-80 max-w-full flex-col overflow-y-auto border-r border-sidebar-border bg-sidebar text-sidebar-foreground shadow-xl transition-transform duration-200 ease-out motion-reduce:transition-none",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex h-16 shrink-0 items-center justify-between px-4">
        <h2 id="project-sidebar-title" className="text-sm font-semibold">Projects</h2>
        <Button variant="ghost" size="icon-sm" aria-label="Close project sidebar" onClick={onClose}>
          <X aria-hidden="true" />
        </Button>
      </div>
      <Tabs defaultValue="my-projects" className="min-h-10 flex-1 px-4">
        <TabsList className="w-full shrink-0" aria-label="Project categories">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="my-projects" className="overflow-y-auto py-8 text-center text-muted-foreground">
          No projects yet.
        </TabsContent>
        <TabsContent value="shared" className="overflow-y-auto py-8 text-center text-muted-foreground">
          No shared projects yet.
        </TabsContent>
      </Tabs>
      <div className="shrink-0 border-t border-sidebar-border p-4">
        <Button className="w-full" onClick={onNewProject} disabled={!onNewProject}>
          <Plus aria-hidden="true" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
