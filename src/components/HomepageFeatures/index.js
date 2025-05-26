import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Evidence-Based SEL Coaching',
    image: require('@site/static/img/chatsel-interactive-learning.png').default,
    description: (
      <>
        ChatSEL offers AI-driven, research-backed guidance to help teachers integrate SEL into their daily practice. We work with NGOs to develop context-specific versions of ChatSEL that incorporate both academic knowledge on SEL coaching and the organization's own SEL curriculum. 
      </>
    ),
  },
  {
    title: 'Feedback-Driven Learning',
    image: require('@site/static/img/chatsel-feedback-driven-recommendation.png').default,
    description: (
      <>
        As teachers learn from ChatSEL's guidance, ChatSEL also learns from teachers. Their daily input helps the system create a continuous feedback loop that improves both the tool and teaching practice over time. We hope that ChatSEL can be an always-online coach for teachers, especially when immediate human support is not available in low-resource settings.
      </>
    ),
  },
  {
    title: 'Multimodal Support for Diverse Needs',
    image: require('@site/static/img/chatsel-culturally-adaptable.png').default,
    description: (
      <>
        ChatSEL offers multilingual support through adaptable engagement formats like text, voice, role-play, and games. Again, we work with NGOs to develop evidence-based and context-sensitive guidance that informs ChatSEL's personality and behavior across diverse settings. 
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md" style={{ textAlign: 'left' }}>
        <img
          src={image}
          alt={title}
          className={styles.featureImg}
          style={{ width: '100%', maxWidth: '400px' }}
        />
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
