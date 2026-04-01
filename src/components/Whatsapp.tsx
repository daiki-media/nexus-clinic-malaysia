"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface WhatsappProps {
  message: string;
  variant?: "light" | "dark";
}

const Whatsapp = ({ message, variant = "dark" }: WhatsappProps) => {
  const whatsappNumber = "60123456789"; // your number

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const baseStyles = "px-8 py-4 rounded-full font-georgia text-lg transition-all shadow-lg flex items-center justify-center gap-2";
  
  const variantStyles = {
    light: "bg-light text-wine hover:bg-cream text-wine border border-wine",
    dark: "bg-wine/10 hover:bg-wine/20 text-wine border border-wine",
  };

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      <MessageCircle className="w-5 h-5" />
      WhatsApp
    </motion.a>
  );
};

export default Whatsapp;
// "use client";
// 
// import { motion } from "framer-motion";
// import { MessageCircle } from "lucide-react";
// 
// interface WhatsupProps {
//   message: string;
// }
// 
// const Whatsapp = ({ message }: WhatsupProps) => {
//   const whatsappNumber = "60123456789"; // your number
// 
//   const encodedMessage = encodeURIComponent(message);
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
// 
//   return (
//     <motion.a
//       href={whatsappLink}
//       target="_blank"
//       rel="noopener noreferrer"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className="bg-wine/10 hover:bg-wine/20 text-wine border border-wine px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2"
//     >
//       <MessageCircle className="w-4 h-4" />
//       WhatsApp
//     </motion.a>
//   );
// };
// 
// export default Whatsapp;
