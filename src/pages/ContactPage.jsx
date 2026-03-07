import Contact from '../components/Contact';
const ContactPage = () => {

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
          <h1
            className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-700 delay-100"
            style={{
              textShadow: "0 2px 24px rgba(0,0,0,0.4)",
              letterSpacing: "-0.01em",
            }}
          >
        CONTACT US
          </h1>
        </div>
      </section>
      <Contact />
      
    </div>
  );
};

export default ContactPage;