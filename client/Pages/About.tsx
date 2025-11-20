import { useAboutText, useAboutImages } from '../hooks/useAbout'
import LoadingSpinner from '../components/UI/LoadingSpinner'

function About() {
  const {
    data: spamHistory,
    isLoading: isTextLoading,
    isError: isTextError,
  } = useAboutText()
  const {
    data: images,
    isLoading: areImagesLoading,
    isError: areImagesError,
  } = useAboutImages()

  return (
    <main className="flex gap-8 p-8">
      <section className="flex-[5]">
        <article>
          <h1 className="mb-6 text-center font-heading text-5xl font-extrabold text-blue-900">
            The history of SPAM
          </h1>
          {(isTextLoading || areImagesLoading) && <LoadingSpinner />}
          {(isTextError || areImagesError) && (
            <p className="text-center text-sm text-gray-600">
              There was an error loading the page content.
            </p>
          )}
          {spamHistory && images ? (
            <>
              {spamHistory.map((section, id) => (
                <section
                  key={id}
                  className="mb-5 rounded-lg border-2 border-blue-900"
                >
                  <h2 className="mb-6 mt-6 font-heading text-4xl font-extrabold">
                    {section.title}
                  </h2>
                  <p className="font-body text-2xl">{section.body}</p>
                </section>
              ))}
            </>
          ) : null}
        </article>
      </section>

      <section className="flex-[1]">
        {images?.map((image, id) => (
          <div key={id} className="mb-6">
            <img
              src={`/images/${image.link}`}
              alt={image.alt}
              className="rounded-lg border-2 border-blue-900 shadow-md"
            />
            <p>
              <em>{image.caption}</em>
            </p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default About
