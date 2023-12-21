import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => {
  //   console.log(stats);
  return (
    <section className={css.stats}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.persentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
// {
/* <li class="item">
  <span class="label">{stats.label}</span>
  <span class="percentage">{stats.percentage}%</span>
</li>; */
// }
