import { motion } from 'framer-motion';
import Contact from "../components/Contact";
import {
  useSEO,
  generateSchemaMarkup,
  useInsertSchemaMarkup,
} from "../utils/SEO";

const ContactPage = () => {
  useSEO({
    title: "Contact Cybex Tech - Get Professional Web Design & Development Services",
    description: "Get in touch with Cybex Tech for professional website design, development, and digital solutions. We're ready to help your business grow online in Kenya.",
    keywords: "contact cybex, web design contact, website development services Kenya, get in touch, cybex tech contact",
    ogUrl: "https://cybextech.co.ke/contact",
  });

  const schema = generateSchemaMarkup("LocalBusiness", {
    name: "Cybex Tech",
    description: "Professional website design, development, and digital solutions",
    url: "https://cybextech.co.ke/contact",
    phone: "+254 XXX XXX XXX",
    city: "Nairobi",
    country: "KE",
  });

  useInsertSchemaMarkup(schema);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-light to-dark">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{ height: "calc(100vh - 64px)", maxHeight: "420px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1600&q=80')`,
            filter: "brightness(0.5) contrast(1.1)",
          }}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(5, 15, 35, 0.80) 0%, rgba(10, 25, 55, 0.65) 50%, rgba(0, 0, 0, 0.50) 100%)",
          }}
        />

        {/* Centered Title */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 text-center">
          <motion.h1
            className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{
              textShadow: "0 2px 24px rgba(0,0,0,0.4)",
              letterSpacing: "-0.01em",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            CONTACT US
          </motion.h1>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ContactPage;