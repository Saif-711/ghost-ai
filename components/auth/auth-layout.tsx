import type { ReactNode } from "react";

const features = [
  { label: "Design systems at the speed of thought", detail: "Shape your architecture in a focused visual workspace." },
  { label: "Real-time collaboration", detail: "Keep your team aligned while ideas take form." },
  { label: "Instant workflow generation", detail: "Turn a clear idea into an actionable workflow." },
];

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid min-h-dvh grid-cols-1 bg-background text-foreground lg:grid-cols-2">
      <section className="hidden min-h-dvh grid-rows-[auto_1fr_auto] border-r border-border bg-card px-8 py-7 lg:grid lg:px-12 lg:py-8">
        <div className="flex items-center gap-3 text-xs font-semibold tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs text-primary-foreground">A</span>
          <span>AI Workflow Editor</span>
        </div>
        <div className="flex max-w-lg items-center">
          <div>
            <p className="mb-4 text-xs font-medium text-muted-foreground">A clearer way to build with AI</p>
            <h1 className="max-w-md text-3xl font-semibold leading-tight tracking-tight xl:text-4xl">
              Design systems at the speed of thought.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              Describe your architecture in plain English. Build a shared canvas your whole team can refine in real time.
            </p>
            <ul className="mt-8 space-y-5 text-xs">
              {features.map((feature, index) => (
                <li key={feature.label} className="flex items-start gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-sm border border-border bg-background text-[10px] text-muted-foreground">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-medium text-foreground">{feature.label}</span>
                    <span className="mt-1 block leading-5 text-muted-foreground">{feature.detail}</span>
                  </span>
                </li>
            ))}
            </ul>
          </div>
        </div>
        <p className="text-[11px] text-muted-foreground">A calm space for complex work.</p>
      </section>
      <section className="flex min-h-dvh items-center justify-center px-6 py-10 lg:px-12">
        <div className="w-full max-w-sm">{children}</div>
      </section>
    </main>
  );
}
