const header = document.querySelector("header");

const sectionOne = document.querySelector(".hero");

const sectionOneOptions = {
  rootMargin: "0px 0px -650px 0px",
  threshhold: 1,
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      Header.classList.add("bgheader");
    } else {
      Header.classList.remove("bgheader");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
