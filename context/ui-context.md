# UI Context

## Theme

Dark only. The app uses shadcn/ui's neutral dark palette, with near-black page backgrounds and layered card and popover surfaces. `app/globals.css` defines the default dark tokens; the root HTML element has the `dark` class and `color-scheme: dark` styles native controls.

The initial stylesheet contained only the Tailwind import and no existing color values. Feature 01 establishes the neutral dark defaults.

## Colors

Use semantic Tailwind classes backed by CSS variables, such as `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, and `border-border`.

| Role | CSS variable | Value |
| --- | --- | --- |
| Page background | `--background` | `oklch(0.145 0 0)` |
| Surface | `--card`, `--popover` | `oklch(0.205 0 0)` |
| Primary text | `--foreground` | `oklch(0.985 0 0)` |
| Muted text | `--muted-foreground` | `oklch(0.708 0 0)` |
| Primary action | `--primary` | `oklch(0.922 0 0)` |
| Border | `--border` | `oklch(1 0 0 / 10%)` |
| Error | `--destructive` | `oklch(0.704 0.191 22.216)` |

## Typography

- UI: Geist Sans, mapped from `--font-geist-sans` to `--font-sans`.
- Code: Geist Mono, mapped from `--font-geist-mono` to `--font-mono`.

## Border Radius

The base `--radius` is `0.625rem`; the Nova preset derives the semantic radius scale in `globals.css`.

## Component Library

shadcn/ui with the Radix Nova preset and Tailwind CSS v4. Generated files in `components/ui/` must remain unchanged after installation. Customize theme variables in `app/globals.css` and compose components outside that directory.

Installed primitives: Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea.

`lib/utils.ts` re-exports the generated `cn()` helper from the `cn` package for conditional class names and Tailwind conflict resolution.

## Icons

Lucide React, configured as the shadcn icon library.

## Editor Shell

`components/editor/editor-shell.tsx` owns sidebar visibility and composes the reusable navbar, overlay sidebar, and canvas. The navbar is 3.5rem tall with left, center, and right sections. Center and right sections are empty until later features.

The sidebar is positioned absolutely above the canvas and slides from the left without changing canvas dimensions. Closed content is inert and hidden from assistive technology. Reduced motion disables the transition. Both project tabs contain placeholders. The full-width New Project action accepts an optional callback and remains disabled until a later feature supplies project creation behavior.

## Dialog Pattern

Compose the existing primitives from `components/ui/dialog.tsx`: `Dialog` and `DialogTrigger`, then `DialogContent` containing `DialogHeader` with `DialogTitle` and `DialogDescription`, followed by content and `DialogFooter` for action buttons. Always provide a meaningful title and description.

Keep the existing token-based styling: `bg-popover`, `text-popover-foreground`, `text-muted-foreground`, theme borders, and `bg-muted/50` for the footer. Use the existing Button variants for footer actions. No feature dialogs are instantiated in feature 02.
