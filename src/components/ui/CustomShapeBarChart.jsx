import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Label,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];

// #endregion
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { x, y, width, height, fill } = props; // 'fill' comes from the Cell mapping below
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Simplified Label component
const renderCustomBarLabel = ({ x, y, width, value, index }) => {
  return (
    <text 
      x={x + width / 2} 
      y={y - 10} 
      fill={colors[index % colors.length]} 
      textAnchor="middle" 
      dominantBaseline="middle"
      className="font-bold text-xs"
    >
      {value}
    </text>
  );
};

export default function CustomShapeBarChart({ chartData }) {
  return (
    <div className="w-full bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
      <ResponsiveContainer width="100%" height={450}>
        {" "}
        {/* Ensure height is defined here */}
        <BarChart
          data={chartData}
          margin={{ top: 30, right: 30, left: 20, bottom: 80 }} // Increased bottom margin for titles
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="bookName"
            interval={0}
            tick={{ fontSize: 11, fill: "#64748b" }}
            angle={-45} // More aggressive angle for long book names
            textAnchor="end"
          />
          <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar
            dataKey="totalPages"
            shape={<TriangleBar />}
            isAnimationActive={true}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
            <LabelList dataKey="totalPages" content={renderCustomBarLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}