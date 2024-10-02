import React, { useEffect, useState, useRef } from "react";

const services = [
  {
    title: "Fresh Healthy Food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    icon: "🍲",
  },
  {
    title: "Delicious Homemade Dishes",
    description:
      "Savor the taste of our delicious homemade dishes made with love and care for your culinary delight.",
    icon: "🍽️",
  },
  {
    title: "Gourmet Dining Experience",
    description:
      "Experience a gourmet dining journey like no other, with crafted dishes that tantalize your taste buds.",
    icon: "🍔",
  },
  {
    title: "Farm-to-Table Freshness",
    description:
      "Discover the goodness of farm-to-table freshness in every bite, ensuring a healthy and sustainable dining choice.",
    icon: "🌾",
  },
  {
    title: "Mouthwatering Culinary",
    description:
      "Indulge in mouthwatering culinary creations that combine tradition with innovation, promising a memorable dining experience.",
    icon: "🍛",
  },
  {
    title: "Exquisite Dessert Delights",
    description:
      "Satisfy your sweet cravings with our exquisite dessert delights, each bite a heavenly experience for your taste buds.",
    icon: "🍨",
  },
];

const ServiceCard = ({ title, description, icon, index, isVisible }) => {
  return (
    <div
      className={`bg-white text-black p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } hover:shadow-xl hover:-translate-y-2 hover:bg-yellow-500 hover:text-white`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold ">{title}</h3>
      <p className=" mt-2">{description}</p>
      <a
        href="#"
        className="text-yellow-600 mt-4 inline-block font-semibold hover:underline"
      >
        See More
      </a>
    </div>
  );
};

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState(Array(services.length).fill(false));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setVisibleCards((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true; // Show the card when it enters the viewport
            return newVisibility;
          });
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      });
    });

    const cards = sectionRef.current.querySelectorAll('.service-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="py-12 bg-gray-50" ref={sectionRef}>
      <div className="text-center mb-12">
        <p className="text-yellow-600 text-lg">Our Service</p>
        <h2 className="text-3xl font-bold text-gray-800">
          What Restaurant Services
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="service-card"
            data-index={index}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              isVisible={visibleCards[index]}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
