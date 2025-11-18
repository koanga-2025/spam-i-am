function LoadingSpinner() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative h-24 w-24">
        <img
          src="./images/classic_spam_transparent.png"
          alt="Loading"
          className="animate-loading absolute inset-0 h-full w-full bg-transparent object-cover"
        />
      </div>
    </div>
  )
}

export default LoadingSpinner
