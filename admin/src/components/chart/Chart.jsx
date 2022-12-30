import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useFetch from "../../hooks/useFetch";

const Chart = ({ aspect, title }) => {
  const date = new Date();
  const cMonth = date.getMonth();

  const { data: data6Month } = useFetch(`hotels/revenue/${cMonth - 6}`);
  const { data: data5Month } = useFetch(`hotels/revenue/${cMonth - 5}`);
  const { data: data4Month } = useFetch(`hotels/revenue/${cMonth - 4}`);
  const { data: data3Month } = useFetch(`hotels/revenue/${cMonth - 3}`);
  const { data: data2Month } = useFetch(`hotels/revenue/${cMonth - 2}`);
  const { data: data1Month } = useFetch(`hotels/revenue/${cMonth - 1}`);

  const getMonthName = (index) => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return month[index];
  };

  const tempData = [
    { name: getMonthName(cMonth - 6), Total: data6Month },
    { name: getMonthName(cMonth - 5), Total: data5Month },
    { name: getMonthName(cMonth - 4), Total: data4Month },
    { name: getMonthName(cMonth - 3), Total: data3Month },
    { name: getMonthName(cMonth - 2), Total: data2Month },
    { name: getMonthName(cMonth - 1), Total: data1Month },
  ];

  const arr = [];
  let d = new Date();

  for (let i = 0; i <= 5; i++) {
    arr.push(d);
    d.setMonth(d.getMonth() - 1);
    console.log(d.toLocaleDateString());
  }

  // const getSubtractedMonth = (num) => {
  //   const curr_date = new Date();
  //   const curr_month = curr_date.getMonth();
  //   const curr_year = curr_date.getFullYear();

  //   if (curr_month - num < 0) {
  //     return {
  //       newMonth: 12 - curr_month - num,
  //       curr_year: curr_year - 1,
  //     };
  //   } else {
  //     return {
  //       newMonth: curr_month - num,
  //       curr_year,
  //     };
  //   }
  // };

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={tempData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
