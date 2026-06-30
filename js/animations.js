const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

document.querySelectorAll(
  ".service-card, .feature-card, .price-card, .equipment-card, .gallery-placeholder, .faq-item, .contact-card"
).forEach((element) => {
  element.classList.add("fade-in");
  observer.observe(element);
});





