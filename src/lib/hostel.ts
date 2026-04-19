export const HOSTEL = {
  name: "Zam Zam Hostel",
  tagline: "Your Student Home in Panvel",
  subTagline: "Safe, Affordable & Comfortable",
  phone: "9833642422",
  phoneIntl: "+919833642422",
  whatsappMessage: "Hi, I'm interested in Zam Zam Hostel. Please share details about availability and pricing.",
  location: "Panvel, Maharashtra",
  owner: "Mufti Zaid Mansoor Surme",
  mapsHref: "https://maps.app.goo.gl/7V1wKRepDgHPKCfU9",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d73.1!3d19.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAx!5e0!3m2!1sen!2sin!4v1",
};

export const telHref = `tel:${HOSTEL.phoneIntl}`;
export const waHref = `https://wa.me/${HOSTEL.phoneIntl.replace('+', '')}?text=${encodeURIComponent(HOSTEL.whatsappMessage)}`;

