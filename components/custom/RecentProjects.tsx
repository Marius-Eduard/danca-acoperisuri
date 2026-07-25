import projectsData from "@/lib/recent-projects.json";

import Image from "next/image";

export default function RecentProjects() {
  return (
    <section className="primary-foreground c-px c-pb">
      <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Proiecte Recente</h2>

      <div className="flex flex-col gap-12">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-card">
            <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
            <p className="text-muted-foreground mb-6">{project.description}</p>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.files.map((fileName, index) => (
                <div key={index} className="w-full rounded-lg overflow-hidden ">
                  <Image
                    src={`/recent-projects/${fileName}`}
                    alt={`${project.title} - imaginea ${index + 1}`}
                    width={1200}
                    height={800}
                    sizes="100vw"
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
