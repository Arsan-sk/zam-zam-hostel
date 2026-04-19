import room3 from "@/assets/room-3sharing.jpg";
import room4 from "@/assets/room-4sharing.jpg";
import room5 from "@/assets/room-5sharing.jpg";

const rooms = [
  {
    img: room3,
    title: "3 Sharing Room",
    setup: "1BHK / 2BHK setup",
    features: ["Spacious layout", "Study desks", "Wardrobe storage", "Natural light"],
  },
  {
    img: room4,
    title: "4 Sharing Room",
    setup: "2BHK setup",
    features: ["Comfortable beds", "Shared study area", "Ceiling fan", "Window ventilation"],
  },
  {
    img: room5,
    title: "5 Sharing Room",
    setup: "2BHK / 3BHK setup",
    features: ["Most affordable", "Bunk arrangement", "Lockable storage", "Bright & airy"],
  },
];

export const Rooms = () => {
  return (
    <section id="rooms" className="py-16 sm:py-24 bg-secondary/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 reveal">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Rooms</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Pick the room that fits your budget
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose from 1BHK, 2BHK or 3BHK setups with 3, 4 or 5 sharing options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((r, i) => (
            <article
              key={r.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={r.img}
                  alt={`${r.title} at Zam Zam Hostel Panvel`}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider">{r.setup}</p>
                <h3 className="font-display text-xl font-bold mt-1">{r.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {r.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
