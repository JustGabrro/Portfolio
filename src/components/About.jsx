/**
 * @copyright Renewed 2025 gabriel
 * @license Apache-2.0
 */


const aboutItems = [
  {
    label: 'Project done',
    number: 12
  },
  {
    label: 'Years of experience',
    number: 2
  }
];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome. I&apos;m Gabriel Jakhveladze, Motivated and detail-oriented student with growing expertise in C#, Java, and Python for backend development, database management, and software architecture. Experienced in building both client-facing (frontend) and server-side solutions using C#, JavaScript, and MS SQL, applying strong object-oriented programming principles. Passionate about writing clean, maintainable code, designing scalable systems, and continuously learning enterprise-grade development practices. Also skilled in frontend technologies with a solid understanding of responsive design and user experience. Proven teaching and mentoring abilities gained through experience as a programming lecturer.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About