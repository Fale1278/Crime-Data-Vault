import { PieChart } from 'react-minimal-pie-chart';

const Chart = () => {
  const data = [
    { value: 15 , title: 'Server Assault', color: '#124DA4' },
    { value: 25 , title: 'Cybercrime', color: '#1D54A6' },
    { value: 20, title: 'Kidnapping', color: '#15326A' },
    { value: 20, title: 'Robbery/Theft', color: '#1762D0' },
    { value: 20, title: 'Murder', color: '#336CC0' },
  ];

  return (
    <div>
      <div className='Chart'>
        <PieChart
          data={data}
          lineWidth={100}
          label={({ dataEntry }) => `${dataEntry.value}% ${dataEntry.title}`}
            labelPosition={50}
          labelStyle={{
            fontSize: '3px',
            fontFamily: 'sans-serif',
            fill: 'White'
          }}
        />
      </div>
      <div className="legend">
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            <div className="color-box" style={{ background: item.color }}></div>
            <div className="legend-text">{item.title}</div>
          </div>
        ))}
      </div>     
    </div>
  );
}

export default Chart;