// Test fixtures for mock API responses
// Centralizes test data to improve maintainability and consistency

export const mockAboutText = [
  {
    id: 1,
    title: 'The Origins',
    body: 'SPAM was first introduced in 1937...',
  },
  {
    id: 2,
    title: 'World War II',
    body: 'During WWII, SPAM became a vital food source...',
  },
]

export const mockAboutImages = [
  {
    id: 1,
    link: 'spam-can.jpg',
    alt: 'Original SPAM can',
    caption: 'The iconic SPAM can design',
  },
]

export const mockSpams = [
  { id: 1, name: 'Classic SPAM', image: 'spam1.jpg' },
  { id: 2, name: 'Low Sodium SPAM', image: 'spam2.jpg' },
  { id: 3, name: 'SPAM Teriyaki', image: 'spam3.jpg' },
]

export const mockUser = {
  id: 1,
  name: 'bob',
  email: 'bob@example.com',
}