const dots = document.querySelectorAll(".indicator a");

const removeActiveClass = () => {
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });
};

const addActiveClass = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let currentDot = document.querySelector (
                `.indicator a[href='#${entry.target.id}']`
            );
            removeActiveClass()
            currentDot.classList.add("active");
        }; 
    });
};

const options = {
    threshold: 0.5,
};

const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    observer.observe(section);
});