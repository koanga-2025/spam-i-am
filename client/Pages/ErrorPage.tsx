function ErrorPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center p-5">
        <h1 className="p-5 font-heading text-heading-lg font-heading-bold text-spamBlue">
          Whoops! That page can't be found.
        </h1>
        <img src="./images/spam-gif.gif" />
      </section>
    </>
  )
}

export default ErrorPage
