import React from 'react';
import PropTypes from 'prop-types';
import { getRandomHexColor } from 'random-color';
import css from './Statistics.module.css'

const Statistics = (title, data) => {
  console.log(data)
  return (
    <section className={css.statistics}>
      {title.lenght > 0 && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>

        {data.map(({ id, label, percentage }) => (
          <li
            class={css.item}
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.string.isRequired,
//     }).isRequired,
//   ),
// };

export default Statistics;
