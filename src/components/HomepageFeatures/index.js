import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Interactive SEL Learning',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ChatSEL provides personalized, step-by-step guidance for implementing SEL kernels tailored to teachers' preferences and classroom contexts. 
        Its “role-play” mode allows teachers to practice activities with real-time feedback.
      </>
    ),
  },
  {
    title: 'Feedback-Driven Recommendations',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Teachers share daily feedback, enabling ChatSEL to refine activity suggestions over time. 
        It promotes smarter, more diverse recommendations for seamless classroom integration.
      </>
    ),
  },
  {
    title: 'Inclusive and Culturally Adaptable',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With real-time translation and voice interaction, ChatSEL supports diverse teacher needs. 
        It also provides culturally relevant SEL activities and tips for addressing classroom challenges.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
