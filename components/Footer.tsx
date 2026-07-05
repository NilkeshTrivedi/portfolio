import Container from "@/components/ui/Container";

const links = [
  { label: "/email", href: "mailto:nptrivedi2005@gmail.com" },
  { label: "/phone", href: "tel:+918128316486" },
  { label: "/linkedin", href: "#" }, // TODO: add your LinkedIn URL
  { label: "/github", href: "#" }, // TODO: add your GitHub URL
  { label: "/leetcode", href: "#" }, // TODO: add your LeetCode URL
];

export default function Footer() {
  return (
    <footer id="contact" className="mt-8 border-t border-rule-strong">
      <Container className="py-16 md:py-20">
        <p className="stamp">200 OK — open to work</p>

        <h2 className="mt-6 font-display font-semibold text-ink text-3xl sm:text-4xl max-w-xl tracking-tight">
          Building something that needs a backend that doesn&apos;t flinch?
        </h2>

        <p className="mt-4 max-w-md text-sm text-ink-soft">
          Reach out directly — I read everything that lands in this inbox.
        </p>

        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-ink hover:text-accent underline decoration-rule-strong underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="eyebrow mt-16">
          Vadodara, IN — last deployed {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}