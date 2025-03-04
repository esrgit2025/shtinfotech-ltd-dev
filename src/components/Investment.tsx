
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useEffect, useRef } from 'react';

const Investment = () => {
  const investmentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScroll = () => {
      if (investmentRef.current) {
        const investmentRect = investmentRef.current.getBoundingClientRect();
        if (investmentRect.top < window.innerHeight * 0.75) {
          investmentRef.current.classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on mount

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const data = [
    { name: 'SHT Infotech', value: 20 },
    { name: 'SHT Logistics', value: 20 },
    { name: 'SHT Solar Services', value: 20 },
    { name: 'RE Groups', value: 20 },
    { name: 'RE Builders', value: 20 },
  ];

  const COLORS = ['#00D2F8', '#0099CC', '#00CCFF', '#0088B2', '#00AADD'];

  return (
    <section id="investment" className="section-padding bg-gradient-to-b from-sht-light-blue to-white">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Investment Structure</h2>
          <p className="section-subtitle">Our business divisions and investment opportunities</p>
        </div>

        <div 
          ref={investmentRef}
          className="grid md:grid-cols-2 gap-12 items-center reveal"
        >
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-md border border-sht-blue/10">
              <h3 className="text-2xl font-semibold mb-4">Company Value</h3>
              <p className="text-xl mb-6 text-muted-foreground">
                SHT Infotech India Private Limited is valued at <span className="font-semibold text-sht-blue">Rs. 20,000,000</span> with shares priced at <span className="font-semibold text-sht-blue">Rs. 555</span> per share.
              </p>
              
              <h4 className="text-xl font-semibold mb-3">Investment Model</h4>
              <p className="text-muted-foreground mb-4">
                Our unique investment structure distributes each share equally across our five business divisions, providing investors with diversified exposure to multiple growth sectors.
              </p>
              
              <h4 className="text-xl font-semibold mb-3">Business Divisions</h4>
              <ul className="space-y-3 text-muted-foreground">
                {data.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: COLORS[index] }}></span>
                    <span>{item.name} <span className="text-sm">({item.value}%)</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Chart */}
          <div className="h-[400px] w-full">
            <div className="bg-white rounded-xl p-6 shadow-md h-full border border-sht-blue/10">
              <h3 className="text-xl font-semibold mb-4 text-center">Division Distribution</h3>
              <ResponsiveContainer width="100%" height="90%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
