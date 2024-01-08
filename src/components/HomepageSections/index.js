import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Job Hunting for Early-Career Devs',
    Svg: require('@site/static/img/undraw_proud_coder.svg').default,
    description: (
      <>
        Job hunting is really tough, especially if you're looking for your first job as a developer, so I've put together some resources that were helpful to me in my job hunt.
      </>
    ),
    route: '/early-career',
    label: 'Break into Tech'
  },
  {
    title: 'Career Dev for Software Devs',
    Svg: require('@site/static/img/undraw_engineering_team.svg').default,
    description: (
      <>
        So you're confident as a software developer, but what about as a career developer? Most of us don't learn how to be an employee in a way that best serves us.
      </>
    ),
    route: '/career-dev',
    label: 'Develop Your Career'
  },
];

function Feature({Svg, title, description, route, label}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={route}>
            {label}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageSections() {
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
