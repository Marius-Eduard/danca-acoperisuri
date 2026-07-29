import projectsData from "@/lib/recent-projects.json";
import Image from "next/image";

const CLOUD_NAME = "dyaunm5bz";

export default function RecentProjects() {
  return (
    <section className="primary-foreground c-px c-pb" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-3xl font-bold mb-8 text-foreground text-center">
        Proiecte Recente
      </h2>

      <div className="flex flex-col gap-20">
        {projectsData.map((project) => (
          <article key={project.id} className="bg-card">
            <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
            <p className="text-muted-foreground mb-6">{project.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
              {project.files.map((fileName, index) => {
                // Calea completă include ambele foldere, iar Cloudinary găsește imaginea direct după nume
                const imageUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${fileName}`;

                return (
                  <div key={index} className="w-full rounded-lg overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={fileName}
                      width={1200}
                      height={800}
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      quality={75}
                      loading="lazy"
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
