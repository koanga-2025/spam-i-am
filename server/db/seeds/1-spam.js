export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('spam').del()

  // Inserts seed entries
  await knex('spam').insert([
    {
      id: 1,
      name: 'SPAM Classic',
      image: 'spam_classic_text.png',
      description: 'spammy',
      flavour_profile: 'perfection',
    },
    {
      id: 2,
      name: 'SPAM Lite',
      image: 'spam_lite_text.png',
      description: 'spam, but lighter',
      flavour_profile: 'bland',
    },
    {
      id: 3,
      name: 'SPAM Cheese',
      image: 'spam_cheese_text.png',
      description: 'spam but cheesier',
      flavour_profile: 'very salty',
    },
    {
      id: 4,
      name: 'SPAM hot & spicy',
      image: 'spam_hot_n_spicy_text.png',
      description: 'spam but spicier',
      flavour_profile: 'pain',
    },
    {
      id: 5,
      name: 'SPAM 25% Less Sodium',
      image: 'spam_less_sodium.png',
      description: 'spam, minus the salt',
      flavour_profile: 'somehow blander than lite',
    },
    {
      id: 6,
      name: 'SPAM with Real Hormel Bacon',
      image: 'spam_bacon_text.png',
      description: 'the perfect addition to spaghetti carbonara',
      flavour_profile: 'spam, but extra porky',
    },
    {
      id: 7,
      name: 'SPAM Jalapeno',
      image: 'spam_jalapeno_text.png',
      description: 'put it in your tacos!',
      flavour_profile: 'avoid combining with the hot & spicy',
    },
    {
      id: 8,
      name: 'SPAM Korean BBQ',
      image: 'spam_korean_text.png',
      description: 'Pair it with kimchi for a delicious treat.',
      flavour_profile: 'actually really delicious',
    },
    {
      id: 9,
      name: 'SPAM Maple',
      image: 'spam_maple_text.png',
      description: 'the canadian SPAM!',
      flavour_profile: 'sweet & salty',
    },
    {
      id: 10,
      name: 'SPAM with Hickory Smoke',
      image: 'spam_smoked_text.png',
      description: 'the ultimate BBQ experience.',
      flavour_profile: 'tastes like the 4th of july',
    },
    {
      id: 11,
      name: 'SPAM with Turkey',
      image: 'spam_turkey_text.png',
      description: 'SPAM, but not as you know it!',
      flavour_profile: 'tastes like chicken',
    },
    {
      id: 12,
      name: 'SPAM with Teriyaki',
      image: 'spam_teriyaki_text.png',
      description: 'A Hawaiian favourite!',
      flavour_profile: 'delicious on musubi',
    },
    {
      id: 13,
      name: 'SPAM with Tocino Seasoning',
      image: 'spam_tocino_text.png',
      description: 'SPAM with even more flavour packed in.',
      flavour_profile: 'spicccyyyyyyyyy',
    },
  ])
}
