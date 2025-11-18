function About() {
  // TODO: replace this fake data with real data from the dabatase
  const spamHistory = [
    {
      title: 'Title I',
      body: `SPAM ipsum dolor sit amet, delicious pork shoulder adipiscing elit. Nulla vel condimentum SPAM in, condimentum eget, lectus. Whether fried, baked, or straight from the can, SPAM makes every meal a delight. Ut enim ad minim veniam, quis nostrud SPAM exercitation laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ham hock in voluptate velit esse cillum SPAM dolore eu fugiat nulla pariatur. A slice of SPAM is the best way to start the day. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. From breakfast scrambles to SPAM sandwiches, the possibilities are endless. Nullam quis risus eget urna mollis ornare vel SPAM lectus. Integer posuere erat a ante venenatis dapibus posuere velit SPAM aliquet. Crispy on the outside, tender on the inside, SPAM brings joy to your taste buds. Curabitur blandit tempus SPAM porttitor. Maecenas faucibus mollis interdum. Cum sociis natoque SPAM penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis condimentum fermentum, SPAM condimentum purus.`,
    },
    {
      title: 'Title II',
      body: `SPAM ipsum dolor sit amet, delicious pork shoulder adipiscing elit. Nulla vel condimentum SPAM in, condimentum eget, lectus. Whether fried, baked, or straight from the can, SPAM makes every meal a delight. Ut enim ad minim veniam, quis nostrud SPAM exercitation laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ham hock in voluptate velit esse cillum SPAM dolore eu fugiat nulla pariatur. A slice of SPAM is the best way to start the day. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. From breakfast scrambles to SPAM sandwiches, the possibilities are endless. Nullam quis risus eget urna mollis ornare vel SPAM lectus. Integer posuere erat a ante venenatis dapibus posuere velit SPAM aliquet. Crispy on the outside, tender on the inside, SPAM brings joy to your taste buds. Curabitur blandit tempus SPAM porttitor. Maecenas faucibus mollis interdum. Cum sociis natoque SPAM penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis condimentum fermentum, SPAM condimentum purus.`,
    },
    {
      title: 'Title III',
      body: `SPAM ipsum dolor sit amet, delicious pork shoulder adipiscing elit. Nulla vel condimentum SPAM in, condimentum eget, lectus. Whether fried, baked, or straight from the can, SPAM makes every meal a delight. Ut enim ad minim veniam, quis nostrud SPAM exercitation laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ham hock in voluptate velit esse cillum SPAM dolore eu fugiat nulla pariatur. A slice of SPAM is the best way to start the day. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. From breakfast scrambles to SPAM sandwiches, the possibilities are endless. Nullam quis risus eget urna mollis ornare vel SPAM lectus. Integer posuere erat a ante venenatis dapibus posuere velit SPAM aliquet. Crispy on the outside, tender on the inside, SPAM brings joy to your taste buds. Curabitur blandit tempus SPAM porttitor. Maecenas faucibus mollis interdum. Cum sociis natoque SPAM penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis condimentum fermentum, SPAM condimentum purus.`,
    },
    {
      title: 'Title IV',
      body: `SPAM ipsum dolor sit amet, delicious pork shoulder adipiscing elit. Nulla vel condimentum SPAM in, condimentum eget, lectus. Whether fried, baked, or straight from the can, SPAM makes every meal a delight. Ut enim ad minim veniam, quis nostrud SPAM exercitation laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ham hock in voluptate velit esse cillum SPAM dolore eu fugiat nulla pariatur. A slice of SPAM is the best way to start the day. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. From breakfast scrambles to SPAM sandwiches, the possibilities are endless. Nullam quis risus eget urna mollis ornare vel SPAM lectus. Integer posuere erat a ante venenatis dapibus posuere velit SPAM aliquet. Crispy on the outside, tender on the inside, SPAM brings joy to your taste buds. Curabitur blandit tempus SPAM porttitor. Maecenas faucibus mollis interdum. Cum sociis natoque SPAM penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis condimentum fermentum, SPAM condimentum purus.`,
    },
    {
      title: 'Epilogue',
      body: `SPAM ipsum dolor sit amet, pork shoulder adipiscing elit. Nulla condimentum SPAM, condimentum eget lectus. Whether fried or baked, SPAM makes every meal a delight. From breakfast scrambles to SPAM sandwiches, the possibilities are endless. Crispy outside, tender inside, SPAM brings joy to every bite, a reminder of delicious, simple times.`,
    },
  ]

  const images = [
    {
      link: 'https://placehold.co/300x200/png',
      alt: '',
      caption:
        'SPAM ipsum dolor sit amet, delicious pork shoulder adipiscing elit.',
    },
    {
      link: 'https://placehold.co/300x200/png',
      alt: '',
      caption:
        'SPAM ipsum dolor sit amet, delicious pork shoulder adipiscing elit.',
    },
    {
      link: 'https://placehold.co/300x200/png',
      alt: '',
      caption:
        'SPAM ipsum dolor sit amet, delicious pork shoulder adipiscing elit.',
    },
    {
      link: 'https://placehold.co/300x200/png',
      alt: '',
      caption:
        'SPAM ipsum dolor sit amet, delicious pork shoulder adipiscing elit.',
    },
    {
      link: 'https://placehold.co/300x200/png',
      alt: '',
      caption:
        'SPAM ipsum dolor sit amet, delicious pork shoulder adipiscing elit.',
    },
  ]

  return (
    // TODO: Style this page!
    <>
      <div>
        <section>
          <article>
            <h1 className="bg-yellow-400 text-4xl font-bold text-blue-900">
              The history of SPAM :spam:
            </h1>
            {spamHistory.map((section, idx) => (
              <section key={idx}>
                <h2 className="bg-yellow-400">{section.title}</h2>
                <p className="bg-blue-900 text-yellow-300">{section.body}</p>
              </section>
            ))}
          </article>
        </section>
        <section>
          {images.map((image, idx) => (
            <div key={idx}>
              <img src={image.link} alt={image.alt} />
              <p>
                <em>{image.caption}</em>
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default About
