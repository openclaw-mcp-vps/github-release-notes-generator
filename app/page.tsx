export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate beautiful<br />
          <span className="text-[#58a6ff]">release notes</span> from Git commits
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect GitHub, let AI analyze your commits and pull requests, and publish structured customer-facing changelogs in seconds — no copy-pasting required.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["GitHub OAuth", "AI Categorization", "Webhook Delivery", "Custom Templates", "PR Analysis"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]">{f}</span>
          ))}
        </div>

        {/* Mock changelog preview */}
        <div className="mt-14 text-left bg-[#161b22] border border-[#30363d] rounded-xl p-6 font-mono text-sm">
          <p className="text-[#6e7681] mb-3 text-xs uppercase tracking-widest">Generated changelog — v2.4.0</p>
          <p className="text-[#3fb950] font-semibold mb-1">✨ New Features</p>
          <p className="text-[#c9d1d9] mb-1 pl-4">• Dark mode support across all dashboard views</p>
          <p className="text-[#c9d1d9] mb-3 pl-4">• Export changelogs as Markdown or HTML</p>
          <p className="text-[#f85149] font-semibold mb-1">🐛 Bug Fixes</p>
          <p className="text-[#c9d1d9] mb-1 pl-4">• Fixed webhook retry logic on 5xx errors</p>
          <p className="text-[#c9d1d9] pl-4">• Resolved pagination issue in repo selector</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited repositories",
              "AI-powered categorization",
              "Custom changelog templates",
              "Webhook & Slack delivery",
              "PR & commit analysis",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <p className="font-semibold text-white mb-2">How does it connect to GitHub?</p>
            <p className="text-[#8b949e] text-sm">You authenticate via GitHub OAuth. We request read-only access to your repositories — we never push code or modify anything.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <p className="font-semibold text-white mb-2">How does the AI categorize commits?</p>
            <p className="text-[#8b949e] text-sm">We analyze commit messages, PR titles, and labels using an LLM to group changes into Features, Bug Fixes, Performance, and Breaking Changes automatically.</p>
          </div>
          <div className="pb-6">
            <p className="font-semibold text-white mb-2">Can I customize the output format?</p>
            <p className="text-[#8b949e] text-sm">Yes. You can define Markdown or HTML templates, choose which categories to include, and deliver changelogs via webhook, email, or Slack.</p>
          </div>
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} ReleaseNotes.ai — Built for engineering teams
      </footer>
    </main>
  );
}
