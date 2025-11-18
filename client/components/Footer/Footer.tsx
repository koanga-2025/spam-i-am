import Divider from '@mui/material/Divider'

function Footer() {
  const footerItems = [
    { title: 'Contact', link: '' },
    { title: 'Careers', link: 'https://www.hormelfoods.com/careers/' },
    {
      title: 'The people to blame for this',
      link: 'https://github.com/blurg-5000/spam-i-am',
    },
  ]

  return (
    <footer className="bg-spamBlue p-5 text-white">
      <section className="flex items-center justify-center">
        <p>
          Attn Hormel Foods: Please don't sue us. We are humble developers with
          a weird sense of humour.
        </p>
      </section>
      <section className="flex justify-center p-4">
        <ul className="flex items-center space-x-3">
          {footerItems.map((item, index) => (
            <div key={index}>
              {index > 0 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: '#facc15' }}
                />
              )}
              <li key={index}>
                <a
                  href={item.link}
                  className="text-white hover:text-spamYellow"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              </li>
            </div>
          ))}
        </ul>
      </section>
    </footer>
  )
}

export default Footer
