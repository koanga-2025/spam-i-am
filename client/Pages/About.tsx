import { useAboutText, useAboutImages } from '../hooks/useAbout'
function About() {
  const { data: spamHistory } = useAboutText()
  const { data: images } = useAboutImages()

  if (!spamHistory || !images) {
    return <p>Loading...</p>
  }
  return (
    // TODO: Style this page!
    <>
      <div>
        <section>
          <article>
            <h1>The history of SPAM</h1>
            {spamHistory.map((section, idx) => (
              <section key={idx}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </article>
        </section>
        <section>
          {images.map((image, idx) => (
            <div key={idx}>
              <img src={image.link} alt={image.alt} />
              <p>
                <em>{image.caption}</em>
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default About
