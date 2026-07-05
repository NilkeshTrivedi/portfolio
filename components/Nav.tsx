import Container from "@/components/ui/Container";

const links = [
  { href: "#stack", label: "/stack" },
  { href: "#projects", label: "/projects" },
  { href: "#log", label: "/log" },
  { href: "#contact", label: "/contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule-strong bg-paper/90 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-medium text-ink tracking-tight"
        >
          nilkesh<span className="text-accent">@</span>trivedi
        </a>

        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-sm text-ink-soft hover:text-ink hover:bg-paper-card transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          className="font-mono text-xs border border-ink px-3 py-1.5 rounded-sm text-ink hover:bg-ink hover:text-paper-card transition-colors"
        >
          resume.pdf ↓
        </a>
      </Container>
    </header>
  );
}