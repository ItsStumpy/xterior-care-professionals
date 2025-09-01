function highlightTodayInFooter() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay(); // 0 (Sun) - 6 (Sat)
  const footer = document.querySelector("footer .business-hours ul");
  if (!footer) return;

  Array.from(footer.children).forEach((li) => {
    li.classList.remove("active");
    const daySpan = li.querySelector("span");
    if (daySpan && daySpan.textContent.trim() === days[today]) {
      li.classList.add("active");
    }
  });
}

// Call this after the DOM is loaded
document.addEventListener("DOMContentLoaded", highlightTodayInFooter);
