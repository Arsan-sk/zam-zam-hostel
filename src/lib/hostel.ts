export const HOSTEL = {
  name: "Zam Zam Hostel",
  tagline: "Your Student Home in Panvel",
  subTagline: "Safe, Affordable & Comfortable",
  phone: "9833642422",
  phoneIntl: "+919833642422",
  whatsappMessage: "Hi, I'm interested in Zam Zam Hostel. Please share details about availability and pricing.",
  location: "Panvel, Maharashtra",
  owner: "Mufti Zaid Mansoor Surme",
};

export const telHref = `tel:${HOSTEL.phoneIntl}`;
export const waHref = `https://wa.me/${HOSTEL.phoneIntl.replace('+', '')}?text=${encodeURIComponent(HOSTEL.whatsappMessage)}`;
