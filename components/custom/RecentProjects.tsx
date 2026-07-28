import projectsData from "@/lib/recent-projects.json";

import Image from "next/image";

export default function RecentProjects() {
  return (
    <section className="primary-foreground c-px c-pb" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-3xl font-bold mb-8 text-foreground text-center">
        Proiecte Recente
      </h2>

      <div className="flex flex-col gap-20">
        {projectsData.map((project, projectIndex) => (
          <article key={project.id} className="bg-card">
            <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
            <p className="text-muted-foreground mb-6">{project.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
              {project.files.map((fileName, index) => {
                const isFirstImage = projectIndex === 0 && index === 0;

                return (
                  <div
                    key={`${project.id}-${fileName}`}
                    className="w-full rounded-lg overflow-hidden"
                  >
                    <Image
                      src={`/recent-projects/${fileName}`}
                      alt={`${project.title} - ${index + 1}`}
                      width={800}
                      height={600}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={72}
                      loading={isFirstImage ? "eager" : "lazy"}
                      priority={isFirstImage}
                      decoding="async"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
