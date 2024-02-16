// var swiper = new Swiper(".hero-slider", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

var swiper = new Swiper(".hero-slider", {
  slidesPerView: 2,
  freeMode: true,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    clickable: true,
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.features-swiper-nav a');
  const featureContent = document.querySelector('.features-swiper-content');
  const featureImage = document.querySelector('.features-swiper-image img');

  // Define content for each link
  const content = [
    {
      title: "YOUR DASHBOARD",
      subtitle: "Direct access to all your Daily Coding Needs",
      description: "Access the weekly modules, Your Progress, Daily Streaks, etc. directly from your Dashboard. Our easy-to-use User Interface is one of its kind and is super beginner-friendly.",
      imagePath: "./assets/dashboard.6c772da0.png",
      titleColor: "red" // Specify title color
    },
    {
      title: "PRACTICE PROBLEMS",
      subtitle: "Solve 400+ Problems in our In-house Problem Solving Environment",
      description: "Tailored to suit your needs we have hints, various solution approaches, and chat GPT support as well. Get Video solutions to more than 200 Problems and Instant doubt support for all your queries.",
      imagePath: "./assets/practiceProblem.06163a80.png",
      titleColor: "blue" // Specify title color
    },
    {
      title: "Job Portals",
      subtitle: "Get the Latest job opportunities at Top Tech Companies.",
      description: "You can apply directly from the portal and track your applications. Our students are placed at top tech companies like Atlassian, Uber, Google, Amazon, etc.",
      imagePath: "./assets/jobPortal.de1391ed.png",
      titleColor: "green" // Specify title color
    },
    {
      title: "Progress Tracking",
      subtitle: "Track your progress in real time with graphs and charts.",
      description: "Get one public profile that includes your achievements like badges, streaks, numbers of problems solved, leaderboard ranking, etc.",
      imagePath: "./assets/profile.ac232b5e.png",
      titleColor: "orange" // Specify title color
    },
    {
      title: "Interactive Sessions",
      subtitle: "High-quality video Sessions with Interactive LIVE chats",
      description: "Get new video content every week along with resources and problems. Join Weekly Interactive LIVE Sessions on our dedicated HD LIVE video platform and ask your doubts directly in the LIVE classes",
      imagePath: "./assets/lecture.08a55d9b.png",
      titleColor: "purple" // Specify title color
    },
    {
      title: "Insightful Webinars",
      subtitle: "Projects building, Resume Building Webinars by Industry Experts",
      description: "Get Regular webinars on topics like Resume Building, Resume Review, Projects Building, etc. to improve your chances of getting shortlisted and get Industry insights",
      imagePath: "./assets/webinar.492995b0.png",
      titleColor: "orange" // Specify title color
    }
  ];

  // Function to change content based on index
  function changeContent(index) {
    featureContent.innerHTML = `
      <h5 style="color: ${content[index].titleColor}">${content[index].title}</h5>
      <h3>${content[index].subtitle}</h3>
      <p>${content[index].description}</p>
    `;
    featureImage.src = content[index].imagePath;

    // Remove active class from all links and reset their color
    navLinks.forEach(link => {
      link.classList.remove('active');
      link.style.color = ''; // Reset color
    });


    // Add active class to clicked link and set its color
    const activeLink = navLinks[index];
    activeLink.classList.add('active');
    activeLink.style.color = content[index].titleColor;
  

  }

  // Add click event listeners to each navigation link
  navLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default behavior of anchor tags
      changeContent(index); // Call the function to change content
    });
  });

  // Initialize content on page load
  changeContent(0);
});






















