import { ShieldCheck } from "lucide-react";

const services = [
  { title: "25+ ani experiență", highlight: true },
  { title: "Construcții noi", highlight: false },
  { title: "Reparații", highlight: false },
  { title: "Izolații termo și hidro", highlight: false },
  { title: "Garanție lucrări", highlight: false },
];

export default function ServicesListItems() {
  return (
    <ul className="flex flex-col gap-4 text-left list-none">
      {services.map((item) => (
        <li
          key={item.title}
          className="flex items-center gap-3 py-3 border-b border-primary-foreground/10 last:border-none"
        >
          <ShieldCheck
            className={`w-11 h-11 ${item.highlight ? "text-accent" : "text-primary-foreground"}`}
          />

          <span
            className={`text-3xl ${item.highlight ? "text-accent" : "text-primary-foreground"}`}
          >
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  );
}
