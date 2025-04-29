
import { useEffect, useRef } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { DollarSign, TrendingUp, PieChart as PieChartIcon, BarChart, Users } from 'lucide-react';

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

  // Data for the pie chart
  const data = [
    { name: 'SHT Infotech', value: 25, color: '#0ea5e9' },
    { name: 'SHT Logistics', value: 20, color: '#06b6d4' },
    { name: 'SHT Solar Services', value: 20, color: '#0284c7' },
    { name: 'RE Groups', value: 15, color: '#0369a1' },
    { name: 'RE Builders', value: 20, color: '#0c4a6e' },
  ];

  // Investment highlights data
  const highlights = [
    {
      title: 'Company Valuation',
      value: '₹20,000,000',
      description: 'Current market valuation of the company',
      icon: TrendingUp,
    },
    {
      title: 'Share Price',
      value: '₹555',
      description: 'Per share value across all business divisions',
      icon: DollarSign,
    },
    {
      title: 'Business Divisions',
      value: '5',
      description: 'Strategically diversified business units',
      icon: PieChartIcon,
    },
    {
      title: 'Growth Rate',
      value: '22%',
      description: 'Year-over-year company growth',
      icon: BarChart,
    },
    {
      title: 'Shareholders',
      value: '120+',
      description: 'Growing investor community',
      icon: Users,
    },
  ];

  return (
    <section id="investment" className="section-padding bg-white">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Investment Opportunity</h2>
          <p className="section-subtitle">
            A strategic investment approach with diversification across multiple business segments
          </p>
        </div>

        <div ref={investmentRef} className="reveal">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Investment description */}
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-sht-light-blue to-white rounded-2xl shadow-sm border border-sht-blue/10">
                <h3 className="text-2xl font-semibold mb-4">Our Investment Model</h3>
                <p className="text-muted-foreground mb-4">
                  SHT Infotech India Private Limited has established a robust investment structure that
                  distributes company shares across our five key business divisions, creating a
                  balanced portfolio that minimizes risk while maximizing growth potential.
                </p>
                <p className="text-muted-foreground mb-4">
                  With a current share price of ₹555 and a company valuation of ₹20,000,000, we offer
                  investors the opportunity to participate in our diversified growth strategy spanning
                  technology, logistics, renewable energy, investments, and real estate.
                </p>
                <p className="text-muted-foreground">
                  Our strategic business diversification ensures stability during market fluctuations
                  while positioning the company to capitalize on growth opportunities across multiple
                  sectors simultaneously.
                </p>
              </div>
            </div>

            {/* Pie chart - Updated for better text visibility */}
            <div className="flex justify-center">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-sht-blue/10 w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4 text-center">Business Division Allocation</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={90}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={{strokeWidth: 1, stroke: '#333'}}
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Allocation']}
                        contentStyle={{ backgroundColor: 'white', borderRadius: '8px', padding: '10px', border: '1px solid #e2e8f0' }}
                        labelStyle={{ fontWeight: 'bold', marginBottom: '5px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {data.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm">{item.name}: {item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Investment highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm border border-sht-blue/10 text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sht-light-blue text-sht-blue mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-2xl font-bold text-sht-blue mb-2">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
