import Project from './Project'
import img1 from '../../assets/about-machine.png'
import img2 from '../../assets/blog-1.jpg'
import img3 from '../../assets/blog-2.jpg'
import img4 from '../../assets/blog-3.jpg'
import img5 from '../../assets/cases1.png'
import img6 from '../../assets/cases_2.png'
import img7 from '../../assets/portfolio-s-10-1170x690.jpg'
import img8 from '../../assets/portfolio-s-11-1170x690.jpg'
import img9 from '../../assets/portfolio-s-12-1170x690.jpg'

export default function ProjectsContent() {
  return (
    <section class="bg-secondary text-sixth flex flex-col items-center">
      <div class="flex flex-col gap-2  pt-32   w-[85vw] max-w-[1160px] py-9">
        <h2 class=" text-primary text-xl font-oswald">our portfolio</h2>
        <hr class="w-44 text-primary"></hr>
        <h3 class="font-oswaldBold uppercase text-4xl ">
          You can explore our latest
          <br />
          case studies
        </h3>
      </div>

      <div class="flex  w-[85vw] max-w-[1160px] gap-3 text-xl pb-5">
        <button class=" px-5 pt-3 relative text-primary">
          <span>All</span>
          <span class="absolute text-primary top-0 right-0">11</span>
        </button>
        <p class="px-5 pt-3 relative">
          <span>Drilling</span>
          <span class="absolute  top-0 right-0">3</span>
        </p>
        <p class="px-5 pt-3 relative">
          <span>Mine</span>
          <span class="absolute  top-0 right-0">7</span>
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  lg:mx-10 text-secondary z-50 p-2 px-5 h-[1200px] w-[85vw] max-w-[1200px]  justify-center ">
        <Project src={img1.src} />
        <Project src={img2.src} />
        <Project src={img3.src} />
        <Project src={img4.src} />
        <Project src={img5.src} customStyles="hidden sm:block" />
        <Project src={img6.src} customStyles="hidden sm:block" />
        <Project src={img7.src} customStyles="hidden sm:block" />
        <Project src={img8.src} customStyles="hidden sm:block" />
        <Project src={img9.src} customStyles="hidden lg:block" />
      </div>
      <button class="bg-primary p-3 pr-28 flex justify-center items-center text-white hover:bg-sixth hover:text-primary transition-colors mb-36 mt-10">
        Load more
      </button>
    </section>
  )
}
