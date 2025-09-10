// ---------- Preloader ----------
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('loaded');
    setTimeout(() => { loader.style.display = 'none'; }, 600);
  }
});

// ---------- Page transition for nav links ----------
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-nav]');
  if (a && a.getAttribute('href') && a.getAttribute('href').indexOf('http') !== 0) {
    e.preventDefault();
    const href = a.getAttribute('href');
    document.body.classList.add('fade-page');
    setTimeout(() => { window.location.href = href; }, 260);
  }
});

// ---------- Reviews Module ----------
(function reviewsModule() {
  const form = document.getElementById("reviewForm");
  const container = document.getElementById("reviews-container");

  if (!form || !container) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim() || "Anonymous";
    const rating = Number(document.getElementById("rating").value);
    const message = document.getElementById("message").value.trim();

    if (!rating || !message) {
      alert("Please select a rating and write your review.");
      return;
    }

    // Create review card
    const review = document.createElement("div");
    review.classList.add("review-item");
    review.innerHTML = `
      <strong>${escapeHtml(name)}</strong>
      <div class="stars">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</div>
      <p>${escapeHtml(message)}</p>
    `;

    // Append as its own container
    container.appendChild(review);

    // Reset form
    form.reset();
  });

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }
})();

// ---------- Contact form demo ----------
(function contactModule(){
  const cf = document.getElementById('contactForm');
  if (cf){
    cf.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent (demo). Integrate with backend to receive messages.');
      cf.reset();
    });
  }

  const heroInquiry = document.getElementById('heroInquiry');
  if (heroInquiry){
    heroInquiry.addEventListener('click', () => {
      window.location.href = 'contact.html';
    });
  }
})();
