export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('options').del()
  await knex('results').del()
  await knex('questions').del()

  // Insert questions and get their IDs
  const questionIds = await knex('questions')
    .insert([
      { question: `Pick your dream breakfast!` },
      { question: `Pick a music category!` },
      { question: `How do you like to prepare your SPAM?` },
      { question: `There's a warrant out for your arrest. What did you do?!` },
      { question: `Which abyss would you most like to gaze into?` },
    ])
    .returning('id')

  // Insert options using the question IDs directly
  await knex('options').insert([
    // Assuming questionIds are returned in the same order

    // dream breakfast
    {
      question_id: questionIds[0].id,
      image: 'full_english.jpeg',
      text: 'Full English',
      category: 'a',
    },
    {
      question_id: questionIds[0].id,
      image: 'handful_chillis.avif',
      text: 'A handful of chillis',
      category: 'b',
    },
    {
      question_id: questionIds[0].id,
      image: 'pancakes.webp',
      text: 'Pancakes',
      category: 'c',
    },
    {
      question_id: questionIds[0].id,
      image: 'leftover_pizza.jpg',
      text: 'Leftover pizza',
      category: 'd',
    },

    // music category
    {
      question_id: questionIds[1].id,
      image: 'gregorian_chant.webp',
      text: 'Gregorian chants',
      category: 'd',
    },
    {
      question_id: questionIds[1].id,
      image: 'pop_music.avif',
      text: 'Pop',
      category: 'c',
    },
    {
      question_id: questionIds[1].id,
      image: 'death_metal.avif',
      text: 'Death Metal',
      category: 'b',
    },
    {
      question_id: questionIds[1].id,
      image: 'classical_music.webp',
      text: 'Classical music',
      category: 'a',
    },

    // spam preparation
    {
      question_id: questionIds[2].id,
      image: 'spam_smoothie.jpg',
      text: 'Blended into a smoothie',
      category: 'd',
    },
    {
      question_id: questionIds[2].id,
      image: 'spam_ramen.jpg',
      text: 'As a side on Korean spicy ramyeon',
      category: 'b',
    },
    {
      question_id: questionIds[2].id,
      image: 'fried_spam.jpg',
      text: 'Fried',
      category: 'a',
    },
    {
      question_id: questionIds[2].id,
      image: 'glazed_spam.jpg',
      text: 'With a honey maple glaze',
      category: 'c',
    },

    // crimes question
    {
      question_id: questionIds[3].id,
      image: 'framed.jpeg',
      text: `I'm innocent, I swear!`,
      category: 'c',
    },
    {
      question_id: questionIds[3].id,
      image: 'tax_evasion.jpg',
      text: 'Tax evasion',
      category: 'a',
    },
    {
      question_id: questionIds[3].id,
      image: 'shank.jpg',
      text: 'Shanked a guy',
      category: 'b',
    },
    {
      question_id: questionIds[3].id,
      image: 'overthrow_government.webp',
      text: 'Staged a coup against the government',
      category: 'd',
    },

    // abyss
    {
      question_id: questionIds[4].id,
      image: 'psychedelic_kaleidoscope.jpg',
      text: 'A psychedelic kaleidescope',
      category: 'd',
    },
    {
      question_id: questionIds[4].id,
      image: 'starry_galaxy.jpg',
      text: 'A starry galaxy',
      category: 'c',
    },
    {
      question_id: questionIds[4].id,
      image: 'black_abyss.webp',
      text: 'A black void',
      category: 'a',
    },
    {
      question_id: questionIds[4].id,
      image: 'fire.jpg',
      text: 'A cavern of fire',
      category: 'b',
    },
  ])

  // mostly a's: spam classic (classic)
  // mostly b's: spam hot and spicy (fiery)
  // mostly c's: spam maple (sweet)
  // mostly d's: spam turkey (alternative)

  await knex('results').insert([
    {
      category: 'a',
      name: 'SPAM Classic',
      image: 'spam_classic_text.png',
      info: `Just like the original SPAM, you're reliable, timeless, and beloved by many. You have a strong sense of tradition and a knack for keeping things simple and straightforward. People know they can count on you, and your steady nature makes you a comforting presence in any situation. You value consistency and aren't afraid to embrace the tried and true.`,
    },
    {
      category: 'b',
      name: 'SPAM Hot & Spicy',
      image: 'spam_hot_n_spicy_text.png',
      info: `Bold, adventurous, and full of zest, you bring energy and excitement wherever you go. Your fiery personality lights up a room, and you’re always ready to try something new. You thrive on challenges and have a passion that inspires those around you. You’re not one to shy away from the spotlight, and your enthusiasm is truly contagious.`,
    },
    {
      category: 'c',
      name: 'SPAM Maple',
      image: 'spam_maple_text.png',
      info: `Sweet, warm, and irresistibly charming, you have a personality that draws people in. You're thoughtful, caring, and always there to brighten someone’s day. Your kindness leaves a lasting impression, and your gentle nature makes you a trusted friend. You believe in the power of small gestures and have a way of making everyone feel special.`,
    },
    {
      category: 'd',
      name: 'SPAM Turkey',
      image: 'spam_turkey_text.png',
      info: ` Unique, creative, and always thinking outside the box, you’re the alternative choice that stands out in a crowd. You’re not afraid to go against the grain and carve your own path. With a fresh perspective and a love for innovation, you bring new ideas to the table and challenge the status quo. Your originality is your strength, and you’re proud to be different.`,
    },
  ])
}
