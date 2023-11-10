document.addEventListener("DOMContentLoaded", function () {
  const videoLinks = document.querySelectorAll(".video__link");
  const videoModal = document.getElementById("videoModal");
  const videoContainer = document.getElementById("videoContainer");
  const videoClose = document.getElementById("videoClose");

  videoLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const videoId = this.getAttribute("data-video-id");
      openVideoModal(videoId);
    });
  });

  videoClose.addEventListener("click", closeVideoModal);

  function openVideoModal(videoId) {
    const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    videoContainer.querySelector("iframe").setAttribute("src", youtubeUrl);
    videoModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeVideoModal() {
    videoContainer.querySelector("iframe").setAttribute("src", "");
    videoModal.style.display = "none";
    document.body.style.overflow = "";
  }

  window.addEventListener("click", function (e) {
    if (e.target === videoModal) {
      closeVideoModal();
    }
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeVideoModal();
    }
  });
});
