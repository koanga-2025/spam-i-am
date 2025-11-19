import { useAboutText, useAboutImages } from '../hooks/useAbout'
import LoadingSpinner from '../components/UI/LoadingSpinner'
function About() {
  const { data: spamHistory } = useAboutText()
  const { data: images } = useAboutImages()

  if (!spamHistory || !images) {
    return <LoadingSpinner />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <article className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-4xl font-bold">
            The history of SPAM
          </h1>
          {spamHistory?.map((section, idx) => (
            <section key={idx} className="mb-6">
              <h2 className="mb-3 text-2xl font-semibold">{section.title}</h2>
              <p className="text-lg leading-relaxed">{section.body}</p>
            </section>
          ))}
        </article>
      </section>
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {images?.map((image, idx) => (
          <div key={idx} className="text-center">
            <img
              src={`/images/${image.link}`}
              alt={image.alt}
              className="mb-2 w-full object-cover"
            />
            <p className="text-sm text-gray-600">
              <em>{image.caption}</em>
            </p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default About
