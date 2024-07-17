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
import koohSork1 from "../assets/koohSorkh1.jpg";
import koohSork2 from "../assets/koohSorkh2.jpg";
import koohSork3 from "../assets/koohSorkh3.jpg";
import koohSork4 from "../assets/koohSorkh4.jpg";
import koohSork5 from "../assets/koohSorkh5.jpg";
import koohSork6 from "../assets/koohSorkh6.jpg";
import koohSork7 from "../assets/koohSorkh7.jpg";
import koohSork8 from "../assets/koohSorkh8.jpg";
import koohSork9 from "../assets/koohSorkh9.jpg";
import lar1 from "../assets/lar1.jpg"
import lar2 from "../assets/lar2.jpg"
import lar3 from "../assets/lar3.jpg"
import lar4 from "../assets/lar4.jpg"
import lar5 from "../assets/lar5.jpg"
import lar6 from "../assets/lar6.jpg"
import lar7 from "../assets/lar7.jpg"
import lar8 from "../assets/lar8.jpg"
import lar9 from "../assets/lar9.jpg"
import lar10 from "../assets/lar10.jpg"
import lar11 from "../assets/lar11.jpg"
import lar12 from "../assets/lar12.jpg"

const projectsData = []

const heered = [heered1, heered2, heered3, heered4, heered5, heered6, heered7, heered8, heered9, heered10];
const lar = [lar1, lar2, lar3, lar4, lar5, lar6, lar7, lar8, lar9, lar10, lar11, lar12];
const koohSork = [koohSork1, koohSork2, koohSork3, koohSork4, koohSork5, koohSork6, koohSork7, koohSork8, koohSork9];

populateProjects(heered, "Khorasan-jonoobi", "Heered gold-mine")
populateProjects(lar, "Zahedan", "Lar gold-mine")
populateProjects(koohSork, "Kerman", "Kooh-sorkh mine")

function populateProjects(imgs, location, name) {
    imgs.forEach(img => {
        projectsData.push({img, location, name});
    }) 
}
export {projectsData};
