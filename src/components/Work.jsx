/**
 * @copyright 2024 gabriel
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'GOA - Academy app',
    tags: ['JS', 'Figma', 'Development'],
    projectLink: 'https://goa-academy-app.vercel.app/'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: 'https://photo-stocks-eta.vercel.app/'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Weather app',
    tags: ['Development', 'API'],
    projectLink: 'https://weather-tan-six-14.vercel.app/'
  }
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work