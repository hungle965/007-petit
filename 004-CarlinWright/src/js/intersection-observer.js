const header = document.querySelector("header")
const sectionOne = document .querySelector("heroSection")

const sectionOneOptions = {}

export const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            headerLeft.classList.add("headerLeftAPI")
            
        } else {
            headerLeft.classList.remove("headerLeftAPI")
            
        }
    })
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne)
