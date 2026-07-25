// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="c-px flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
        <p className="text-2xl">
          După mai bine de 25 de ani de experiență cu lucrări complexe în toate orașele mari din
          nordul Italiei, am decis să ne aducem priceperea în România, pentru a oferi soluții de
          acoperișuri la cele mai înalte standarde europene.
        </p>

        <div className="text-accent">
          <p className="text-3xl font-bold">Ai un proiect în minte?</p>
          <p className="text-3xl font-bold">Sună-ne și discutăm!</p>
        </div>

        <p className="italic text-primary-foreground/90">
          Avem sediul central în Bacău, dar lucrăm în toată țara.
        </p>

        <p className="text-xs pb-4 text-primary-foreground/60">
          © 2026 Dancă Acoperișuri. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
