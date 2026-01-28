import { CONTACT_INFO } from "./constants";

export const getWhatsAppLink = (message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodedMessage}`;
};
