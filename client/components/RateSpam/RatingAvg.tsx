import { useAvgRatingById } from '../../hooks/useRatings'
import { styled } from '@mui/material/styles'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import PanoramaWideAngleSelectIcon from '@mui/icons-material/PanoramaWideAngleSelect'
import PanoramaWideAngleOutlinedIcon from '@mui/icons-material/PanoramaWideAngleOutlined'

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

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  })

  // function handleChange(event: any) {
  //   // TODO: Adding a Rating:
  //   // Some logic to call the useRatings mutation and add a new rating.
  // }

  return (
    <>
      <Typography component="legend">Spam Rating</Typography>
      <StyledRating
        name="customized-color"
        value={data}
        icon={<PanoramaWideAngleSelectIcon fontSize="inherit" />}
        emptyIcon={<PanoramaWideAngleOutlinedIcon fontSize="inherit" />}
        readOnly
      />
    </>
  )
}