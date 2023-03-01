import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  // console.log(dataStats);
  return (<section className="css.statistics">
    <h2 className="css.title">{title}</h2>

    <ul className="css.stat-list">
      {stats.map(data => (
        <li className="css.item" key={data.id}>
          <span className="css.label">{data.label}</span>
          <span className="css.percentage">{data.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>);
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
}