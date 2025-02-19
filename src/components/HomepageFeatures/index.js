import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Interactive SEL Learning',
    image: require('@site/static/img/chatsel-interactive-learning.png').default,
    description: (
      <>
        ChatSEL provides personalized guidance and role plays for implementing SEL kernels tailored to teachers' preferences and classroom contexts. 
      </>
    ),
  },
  {
    title: 'Feedback-Driven Recommendations',
    image: require('@site/static/img/chatsel-feedback-driven-recommendation.png').default,
    description: (
      <>
        Teachers share daily feedback to ChatSEL to make it offer smarter, more diverse recommendations for seamless classroom integration.
      </>
    ),
  },
  {
    title: 'Inclusive and Culturally Adaptable',
    image: require('@site/static/img/chatsel-culturally-adaptable.png').default,
    description: (
      <>
        With real-time translation and culturally responsive interactions, ChatSEL provides personalized support to diverse teacher needs. 
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureImg} style={{ width: '100%', maxWidth: '400px' }} />
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
