// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { renderApp } from '../test-setup'
import * as spamsApi from '../apis/spams'
import * as commentsApi from '../apis/comments'
import { SpamData, CommentData } from '../../models/spam'

vi.mock('../apis/spams')
vi.mock('../apis/comments')

const TEST_COMMENTS_DATA: CommentData[] = [
  {
    id: 2,
    user_id: 'auth0|xxx456',
    spam_id: 2,
    comment_text: 'A bit too salty for my taste, but still good in a pinch.',
    created_date: 1625249200,
  },
  {
    id: 8,
    user_id: 'auth0|xxx456',
    spam_id: 2,
    comment_text: 'Not my favorite flavor, but it’s okay.',
    created_date: 1625767600,
  },
]

const TEST_SPAM_DATA: SpamData = {
  id: 2,
  name: 'Spam with Cheese',
  description:
    'A delectable combination of Spam and cheese, perfect for a savory snack.',
  image: 'spam_cheese_text.png',
  flavour_profile: 'Cheesy and salty',
}

describe('<SpamDetails />', () => {
  it('displays spam details and comments correctly', async () => {
    //ARRANGE
    const mockedSpamsApi = vi.mocked(spamsApi)
    const mockedCommentsApi = vi.mocked(commentsApi)

    mockedSpamsApi.getSpamById.mockResolvedValue(TEST_SPAM_DATA)
    mockedCommentsApi.getAllCommentsBySpamId.mockResolvedValue(
      TEST_COMMENTS_DATA,
    )

    const { findByText } = renderApp('/rate-spam/2')

    //ACT
    const firstComment = await findByText(
      /A bit too salty for my taste, but still good in a pinch./i,
    )
    const secondComment = await screen.findByText(
      /Not my favorite flavor, but it’s okay./i,
    )
    const firstDate = await screen.findByText(
      /Created on: July 2, 2021 at 06:06 PM/i,
    )
    const secondDate = await screen.findByText(
      /Created on: July 8, 2021 at 06:06 PM/i,
    )

    //ASSERT
    expect(firstComment).toBeInTheDocument()
    expect(secondComment).toBeInTheDocument()
    expect(firstDate).toBeInTheDocument()
    expect(secondDate).toBeInTheDocument()
  })
})

