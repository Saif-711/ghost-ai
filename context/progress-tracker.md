# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- Complete: feature 03 authentication.

## Current Goal

- Feature 03 is implemented and verified.

## Completed

- Added the reusable editor navbar with fixed height, three sections, and state-aware PanelLeftOpen / PanelLeftClose toggle icons.
- Added the controlled project sidebar with a sliding overlay, Projects header, close button, shadcn tabs, empty states, and full-width New Project button.
- Connected the editor shell to the home route with shared sidebar state and a full-size canvas.
- Documented the existing token-based dialog composition for titles, descriptions, and footer actions without instantiating dialogs.
- Verified feature 02 with lint, production build including TypeScript, and browser interaction checks for both tabs and both close controls.
- Browser measurements confirmed identical canvas bounds before and after opening the sidebar; closed sidebar content is inert.
- Configured shadcn/ui with the Radix Nova preset, Tailwind v4, CSS variables, and Lucide icons.
- Installed Button, Card, Dialog, Input, Tabs, Textarea, and ScrollArea using the shadcn CLI.
- Installed lucide-react and generated lib/utils.ts with the reusable cn() helper.
- Set dark-only default theme tokens, native dark color scheme, and root dark class.
- Mapped the existing Geist Sans and Geist Mono fonts to the theme.
- Documented the design system in context/ui-context.md.
- Verified all seven component imports, cn() conditional and conflicting class merging, and dark default tokens.
- Verified generated components/ui files remain unchanged after installation.
- npm run lint passed.
- npm run build passed, including TypeScript and static page generation.
- Added ClerkProvider with the Clerk dark theme and app CSS variable overrides.
- Added responsive sign-in and sign-up pages with minimal two-panel desktop layouts.
- Added root redirect behavior and moved the protected editor shell to `/editor`.
- Added root-level `proxy.ts` protecting all routes except the configured auth routes.
- Added Clerk UserButton to the editor navbar for profile settings and logout.
- Installed `@clerk/ui` for Clerk's dark theme.
- Verified feature 03 with lint and a production build including TypeScript, route generation, and Clerk partial prerendering.
- Refined the auth pages to match the supplied reference with an explicit 50/50 desktop split and compact dark visual treatment.
- Increased contrast between the auth information panel and form panel using the existing card/background theme tokens.
- Explicitly applied Geist Sans and Geist Mono to Clerk auth UI to match the documented typography guidelines.

## In Progress

- None.

## Next Up

- Await the next feature specification.

## Open Questions

- No local sign-in/sign-up URL variables are currently present; the standard Clerk route defaults `/sign-in` and `/sign-up` are used when those variables are unset.

## Architecture Decisions

- EditorShell owns sidebar state; ProjectSidebar overlays the canvas rather than participating in its layout.
- New Project accepts an optional callback and is disabled until project creation behavior is supplied by a later feature.
- Reuse the existing Dialog primitives and semantic theme tokens; feature 02 introduces no actual dialogs.
- Keep generated components/ui files unchanged; customize the theme centrally in globals.css.
- The initial globals.css contained only a Tailwind import, so use shadcn neutral dark defaults.
- Use the CLI-generated cn package re-export to share its class merging behavior with the generated components.
- Use Clerk's standard `proxy.ts` convention for default route protection; authentication pages remain public via the configured sign-in and sign-up URL variables.
- Keep Clerk's built-in authentication and user-menu flows intact, customizing only the provider theme variables and surrounding layout.

## Session Notes

- Specifications: context/feature-specs/01-design-system.md, context/feature-specs/02-editor.md, and context/feature-specs/03-auth.md.
- Feature 02 production browser verification used localhost port 3102 because port 3000 was already occupied.
- Use npm.cmd in PowerShell because the local execution policy blocks npm.ps1.
- Production build passed with network access for the existing Geist Google Fonts imports.

