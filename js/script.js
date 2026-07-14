const yearElement = document.getElementById("year");
const quoteForm = document.getElementById("quoteForm");
const formStatus = document.getElementById("formStatus");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const hoursLine = Array.from(
  document.querySelectorAll(".contact-card p")
).find(function (paragraph) {
  const label = paragraph.querySelector("strong");
  return label && label.textContent.trim() === "Hours:";
});

if (hoursLine) {
  hoursLine.innerHTML =
    "<strong>Hours:</strong><br>" +
    "Monday–Saturday: 8:00 AM–7:00 PM<br>" +
    "Sunday: By Appointment";
}

function getValue(id) {
  const element = document.getElementById(id);
  return element ? element.value.trim() : "";
}

if (quoteForm) {
  quoteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = getValue("name");
    const phone = getValue("phone");
    const email = getValue("email");
    const service = getValue("service");
    const message = getValue("message");

    const subject = encodeURIComponent("New SRT Industries Quote Request");

    const body = encodeURIComponent(
      `Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Service: ${service}

Message:
${message}`
    );

    if (formStatus) {
      formStatus.textContent = "Opening your email app...";
    }

    window.location.href =
      `mailto:contactsrtindustries@gmail.com?subject=${subject}&body=${body}`;
  });
}
