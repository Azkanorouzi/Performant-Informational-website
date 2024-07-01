import img1 from '../assets/about-machine.png'
import img2 from '../assets/blog-1.jpg'
import img3 from '../assets/blog-2.jpg'
import img4 from '../assets/blog-3.jpg'
import img5 from '../assets/cases1.png'
import img6 from '../assets/cases_2.png'
import img7 from '../assets/portfolio-s-10-1170x690.jpg'
import img8 from '../assets/portfolio-s-11-1170x690.jpg'
import img9 from '../assets/portfolio-s-12-1170x690.jpg'
import heered1 from "../assets/p1.jpg"
import heered2 from "../assets/p2.jpg"
import heered3 from "../assets/p3.jpg"
import heered4 from "../assets/p4.jpg"
import heered5 from "../assets/p5.jpg"
import heered6 from "../assets/p6.jpg"
import heered7 from "../assets/p7.jpg"
import heered8 from "../assets/p8.jpg"
import heered9 from "../assets/p9.jpg"
import heered10 from "../assets/p10.jpg"

const projectsData = []
const tests = [img1, img2, img3, img4, img5, img6, img7, img8, img9]
const heered = [heered1, heered2, heered3, heered4, heered5, heered6, heered7, heered8, heered9, heered10];


populateProjects(heered, "Khorasan-jonoobi", "Heered gold-mine")
populateProjects(tests, "unknown", "Test gold-mine")

function populateProjects(imgs, location, name) {
    imgs.forEach(img => {
        projectsData.push({img, location, name});
    }) 
}
export {projectsData};
