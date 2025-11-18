import React from 'react'

export default function AddComment() {
  //  TODO: create form state
  //  TODO: get id from params
  //  TODO: Call custom hook for addMutation

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // TODO: Update form state
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: get access token

    // TODO: if the params id exists, call our custom hook mutation
    // and give it an object with: form data, spamId and token
  }
  return (
    <>
      <div>Add Comment</div>
      <form>
        <input
          className="rounded border  border-spamBlue"
          aria-label="Add a comment"
          id="add-comment"
        ></input>
      </form>
    </>
  )
}
