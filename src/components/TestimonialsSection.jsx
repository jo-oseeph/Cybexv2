import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Morris J",
      title: "CEO & Founder of Times 100",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      rating: 5,
      text: "The team at Cybex Tech is phenomenal! Their expertise, dedication, and innovative approach have truly been game-changers for us. As the founder of a Times-100 company, I've worked with many agencies, but their commitment to quality is unmatched.",
    },
    {
      id: 2,
      name: "Carla M",
      title: "Works at Liberia Revenue Authority",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      rating: 5,
      text: "Working with Cybex has been an absolute pleasure from the start. Their solutions are not only cutting-edge but also highly effective, consistently addressing our needs in innovative ways. They've become an essential partner for our digital transformation.",
    },
    {
      id: 3,
      name: "Monica Geller",
      title: "CEO and Founder at Mex events Planning",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      rating: 5,
      text: "I recently had the pleasure of working with Cybex, and I couldn't be happier with the results. They helped me create a fantastic website that perfectly captures our brand. Their attention to detail and customer service is exceptional.",
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setIsAutoPlay(false);
  };

  return (
    <section className="relative bg-dark py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-12 lg:mb-16"
          style={{ animation: "fadeInUp 0.5s ease forwards", opacity: 0 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light font-orbitron">
              What Our Clients Say
            </span>
          </div>
          <h2 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">
            Testimonials from{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #06b6d4, #67e8f9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Happy Clients
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from the businesses we've
            helped succeed.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Mobile */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary w-8"
                      : "bg-primary/30 w-2 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Navigation Dots */}
        <div className="hidden md:flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary w-8"
                  : "bg-primary/30 w-2 hover:bg-primary/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
};

const TestimonialCard = ({ testimonial, index = 0 }) => (
  <div
    className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-xl border-2 border-primary/30 bg-dark-light/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
    style={{
      animation: `fadeInUp 0.5s ease forwards`,
      animationDelay: `${0.1 + (index || 0) * 0.1}s`,
      opacity: 0,
    }}
  >
    {/* Profile Image */}
    <div className="relative mb-4 flex-shrink-0">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary-light to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-dark"
      />
    </div>

    {/* Stars */}
    <div className="flex gap-1 mb-3 justify-center">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>

    {/* Name and Title */}
    <h3 className="font-orbitron text-lg sm:text-xl font-bold text-primary-light mb-1 group-hover:text-primary transition-colors duration-300">
      {testimonial.name}
    </h3>
    <p className="text-xs sm:text-sm text-gray-400 mb-4">{testimonial.title}</p>

    {/* Testimonial Text */}
    <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-4 group-hover:text-gray-200 transition-colors duration-300">
      "{testimonial.text}"
    </p>
  </div>
);

export default TestimonialsSection;
