import {useState} from 'react'
import {SEO} from 'components/seo'
import {Layout} from 'components/layout'
import config from 'config'
import {Timeline} from 'components/timeline'
import {Transition} from '@headlessui/react'

export default function Home() {
  const [showMore, setShowMore] = useState(false)
  return (
    <Layout>
      <SEO />
      <main className="flex flex-col prose mx-auto px-4 sm:px-0">
        <h1>Hola! I&apos;m Andrés Rodríguez</h1>
        <p>{config.shortBio}</p>
        <h2>Timeline</h2>
        <Timeline>
          <Timeline.Section>
            <Timeline.Year>2020</Timeline.Year>
            <Timeline.Entry title="Bought a house">
              Too much money wasted on rent.
            </Timeline.Entry>
            <Timeline.Entry title="Switched to backend full time">
              GraphQL became fully adopted by all our development teams. Excited
              to be making our api better and to be working and planning
              features in this new role.
            </Timeline.Entry>
          </Timeline.Section>
          <Timeline.Section>
            <Timeline.Year>2019</Timeline.Year>
            <Timeline.Entry title="Back to frontend full time">
              Many projects came up that required all hands on deck. Every now
              and then I would fix some GraphQL bugs and work on small GraphQL
              related features.
            </Timeline.Entry>
          </Timeline.Section>
          <Timeline.Section>
            <Timeline.Year>2018</Timeline.Year>
            <Timeline.Entry
              title={
                <>
                  Got married{' '}
                  <span role="img" aria-label="Groom emoji">
                    🤵🏻
                  </span>
                  <span role="img" aria-label="Bride emoji">
                    👰🏻
                  </span>
                </>
              }
            >
              Happiest day of my life! Honeymoon in Galápagos Islands{' '}
              <span role="img" aria-label="Island emoji">
                🌴
              </span>
            </Timeline.Entry>
            <Timeline.Entry title="Sofía was born">
              Blessed by this little angel.
            </Timeline.Entry>
            <Timeline.Entry title="Software Engineer III">
              I have worked in both the backend and the frontend for months.
              Very happy with having the opportunity to work fullstack.
            </Timeline.Entry>
            <Timeline.Entry title="Adopted GraphQL on the API">
              My{' '}
              <strong>
                <em>magnum opus</em>
              </strong>
              . Started working on officially supporting GraphQL on the api.
              Rewrote the whole thing three times with different approaches:{' '}
              <a
                href="https://www.graphql-tools.com/"
                target="_blank"
                rel="noreferrer"
              >
                <code>graphql-tools</code>
              </a>
              ,{' '}
              <a
                href="https://typegraphql.com/"
                target="_blank"
                rel="noreferrer"
              >
                <code>type-graphql</code>
              </a>{' '}
              and{' '}
              <a href="https://nexusjs.org/" target="_blank" rel="noreferrer">
                <code>nexus</code>
              </a>
              . Nexus stuck better with our internal tools.
            </Timeline.Entry>
          </Timeline.Section>
          <Transition
            show={showMore}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="divide-y"
          >
            <Timeline.Section>
              <Timeline.Year>2017</Timeline.Year>
              <Timeline.Entry title="Started experimenting with GraphQL">
                Our stack on the frontend was very convoluted. I thought that
                GraphQL would alleviate a lot of the fatigue and kill
                boilerplate so I made a route on our BFF with a GraphQL wrapper
                over our REST endpoints.
              </Timeline.Entry>
              <Timeline.Entry
                title={
                  <>
                    Proposed{' '}
                    <span role="img" aria-label="Diamond ring emoji">
                      💍
                    </span>
                  </>
                }
              >
                I asked Mirella to marry me in our baby&apos;s gender reveal.
                She ran away, but she came back and said yes.
              </Timeline.Entry>
              <Timeline.Entry title="Started at Coolfire Solutions">
                Worked with React, Redux and Socket.io. Fell in love with web
                development.
              </Timeline.Entry>
              <Timeline.Entry
                title={
                  <>
                    Graduated College{' '}
                    <span role="img" aria-label="Champagne emoji">
                      🍾
                    </span>
                  </>
                }
              >
                Computer Science B.S., Magna Cum Laude. One of my most cherished
                moments, I thought I would never get a degree in what I loved.
                Even less so with honors.
              </Timeline.Entry>
            </Timeline.Section>
            <Timeline.Section>
              <Timeline.Year>2016</Timeline.Year>
              <Timeline.Entry title="Participated in a programming contest">
                Fifth place in the ACM programming contest with the Lindenwood
                II team in the Webster University of Saint Louis&apos; venue.
              </Timeline.Entry>
              <Timeline.Entry title="Started tutoring programming and math">
                Worked as a Computer Science and Mathematics tutor at
                Lindenwood. Made some money and reinforced some knowledge.
              </Timeline.Entry>
            </Timeline.Section>
            <Timeline.Section>
              <Timeline.Year>2015</Timeline.Year>
              <Timeline.Entry title="Started classes at Lindenwood University">
                Got almost two years worth of credits transferred over. I also
                met my future wife.
              </Timeline.Entry>
            </Timeline.Section>
            <Timeline.Section>
              <Timeline.Year>2014</Timeline.Year>
              <Timeline.Entry title="Got accepted in Lindenwood University">
                Got in for a Bachelor of Science in Computer Science. Things
                were starting to look up!
              </Timeline.Entry>
              <Timeline.Entry title="Protests begun">
                My classes were canceled for months which made me get behind in
                my coursework. Also participated in marches and protests -- my
                mom did not like that, sorry Mamá!
              </Timeline.Entry>
            </Timeline.Section>
            <Timeline.Section>
              <Timeline.Year>2013</Timeline.Year>
              <Timeline.Entry title="Failed one of the two requirements. Could not switch majors">
                That was my only chance. Could not make it.
              </Timeline.Entry>
            </Timeline.Section>
            <Timeline.Section>
              <Timeline.Year>2012</Timeline.Year>
              <Timeline.Entry title="Applied for switching majors to Computer Engineering">
                The time had come. I had to pass two classes assigned from the
                Computer Engineerig program. This while also taking some of my
                program in parallel, just in case.
              </Timeline.Entry>
            </Timeline.Section>
            <Timeline.Section>
              <Timeline.Year>2011</Timeline.Year>
              <Timeline.Entry title="Started classes at the Simón Bolívar University">
                Got to go to class with some old friends and met new ones along
                the way that were in my same position. We all were in Applied
                Mathematics with the hopes to switch majors.
              </Timeline.Entry>
              <Timeline.Entry title="Did not get into any of my choices on my entrance exam">
                Should have studied harder, I recognize that I took it for
                granted. One of the biggest impacts in my life. Fortunately, my
                score was high enough to get in to Applied Mathematics in
                Computer Science and Statistics.
              </Timeline.Entry>
              <Timeline.Entry title="Graduated High School">
                Promo LIV of La Salle La Colina school in Caracas, Venezuela.
                Graduated with other ~120 students.
              </Timeline.Entry>
              <Timeline.Entry title="Took the entrance exam at Simón Bolívar University">
                My choices were Computer Engineering, Production Engineering and
                Electronic Engineering.
              </Timeline.Entry>
            </Timeline.Section>
            <Timeline.Section>
              <Timeline.Year>1993</Timeline.Year>
              <Timeline.Entry title="Born">
                Hello World!{' '}
                <span role="img" aria-label="Baby bottle emoji">
                  🍼
                </span>
                <span role="img" aria-label="Baby emoji">
                  👶🏻
                </span>
              </Timeline.Entry>
            </Timeline.Section>
          </Transition>
        </Timeline>
        <button
          className="mx-auto transition-colors duration-300 text:lg hover:bg-gray-100 rounded font-semibold text-gray-900 flex items-center py-2 px-4"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Collapse' : 'Show More'}{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`h-4 w-4 ml-2 ${
              showMore ? 'transform rotate-180' : ''
            }`.trim()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </main>
    </Layout>
  )
}
