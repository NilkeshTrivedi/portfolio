import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" index="02" title="Projects" note="2 flagship builds">
      <div className="space-y-6">
        <ProjectCard
          method="POST"
          endpoint="/rentals/bookings"
          name="DriveEasy Rentals"
          period="Dec 2025 – Mar 2026"
          summary="A backend for a car rental platform: vehicle management, bookings, and dynamic pricing behind a set of secured REST APIs."
          points={[
            "Dynamic pricing engine — fare calculated from duration, vehicle category, and demand.",
            "Booking conflict detection via optimized JPQL queries and DB constraints, so two bookings can't double-claim a vehicle.",
            "Layered architecture with centralized validation, exception handling, and indexed queries for performance.",
          ]}
          stack={["Java", "Spring Boot", "MySQL", "JPA", "REST APIs"]}
          href="https://github.com/NilkeshTrivedi/driveeasy-rentals" // TODO: replace with your GitHub repo URL
        />

        <ProjectCard
          method="POST"
          endpoint="/accounts/transfers"
          name="SwiftVault Banking System"
          period="Mar 2026 – May 2026"
          summary="A secure banking backend handling account management, deposits, withdrawals, transfers, and transaction history."
          points={[
            "JWT-based authentication with role-based authorization on sensitive operations.",
            "Spring Transaction Management enforces integrity across concurrent transfers.",
            "Layered architecture with centralized exception handling and reusable service components.",
          ]}
          stack={["Java", "Spring Boot", "MySQL", "JWT", "REST APIs"]}
          href="#" // TODO: replace with your GitHub repo URL
        />
      </div>
    </Section>
  );
}