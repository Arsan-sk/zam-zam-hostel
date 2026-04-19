import room3 from "@/assets/room-3sharing.jpg";
import room4 from "@/assets/room-4sharing.jpg";
import room5 from "@/assets/room-5sharing.jpg";
import food from "@/assets/gallery-food.jpg";
import kitchen from "@/assets/gallery-kitchen.jpg";
import common from "@/assets/gallery-common.jpg";
import bed from "@/assets/gallery-bed.jpg";

const images = [
  { src: common, alt: "Common study lounge at Zam Zam Hostel", span: "md:col-span-2 md:row-span-2" },
  { src: room3, alt: "3 sharing student room" },
  { src: food, alt: "Home-style meals served at the hostel" },
  { src: bed, alt: "Clean single bed with fresh linen" },
  { src: kitchen, alt: "Shared kitchen with refrigerator and washing machine" },
  { src: room4, alt: "4 sharing student room with study desk" },
  { src: room5, alt: "Affordable 5 sharing room" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-16 sm:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 reveal">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Gallery</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            See where you'll be living
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] gap-3 sm:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl bg-secondary group reveal ${img.span ?? ""}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
