import { c as createLucideIcon } from "./router-B298CZy4.js";
const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode);
const WHATSAPP_NUMBER = "201011342972";
function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
function openWhatsApp(message) {
  window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
}
export {
  Check as C,
  openWhatsApp as o
};
