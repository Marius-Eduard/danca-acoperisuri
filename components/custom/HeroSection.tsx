import ServicesListItems from "@/components/custom/ServicesListItems";

export default function HeroSection() {
  return (
    <section
      className="bg-primary text-primary-foreground c-pt c-px flex flex-col items-center text-center gap-12"
      aria-labelledby="hero-heading"
    >
      <h1 id="hero-heading" className="text-4xl sm:text-4xl font-bold ">
        Servicii complete pentru <span className="text-accent italic">Acoperișuri</span>
      </h1>

      {/* H2 / Subtitle 24*/}
      <p className="text-2xl italic">
        Lucrăm cu orice material, pe orice tip de clădire. De la case familiale, la blocuri,
        hoteluri, biserici și hale industriale.
      </p>

      {/* Services List 30*/}
      <ServicesListItems />
    </section>
  );
}
