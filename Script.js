// Scroll to Top Button
window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  btn.style.display = window.scrollY > 200 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle Project Details
function toggleDetails(btn, id) {
  const detail = document.getElementById(id);
  if (detail.style.display === "none") {
    detail.style.display = "block";
    btn.innerText = "Show Less";
  } else {
    detail.style.display = "none";
    btn.innerText = "Show More";
  }
}
