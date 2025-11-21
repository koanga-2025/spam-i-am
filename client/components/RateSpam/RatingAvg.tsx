import { useAvgRatingById } from '../../hooks/useRatings'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

export default function RatingAvg({ spamId }: { spamId: number }) {
  const { data, isError, isPending, error } = useAvgRatingById(spamId)

  if (isPending) {
    return <p>loading...</p>
  }
  if (!data) {
    return <p>No rating yet</p>
  }
  if (isError) {
    console.error(error.message)
    return <p>uh-oh something went wrong</p>
  }


  // function handleChange(event: any) {
  //   // TODO: Adding a Rating:
  //   // Some logic to call the useRatings mutation and add a new rating.
  // }

  return (
    <>
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={data} readOnly />
      {/* TODO: Display a Rating: 
        // the data using a customisable <Rating/> 
        // from the MUI library */}
    </>
  )
}