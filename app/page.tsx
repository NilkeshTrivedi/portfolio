import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <main>
      <Container className="py-24">
        <h1 className="text-5xl font-semibold tracking-tight">
          Hello, I’m Nilkesh
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          I build thoughtful software using Java, React, and modern system design principles.
        </p>
      </Container>
    </main>
  );
}