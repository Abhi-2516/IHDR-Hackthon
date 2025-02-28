
import { Database, Heart, Compass, Server, Lock, Activity } from 'lucide-react';

const features = [
  {
    icon: <Database className="h-6 w-6 text-health-500" />,
    title: "Structured Medical Datasets",
    description: "Access to disease trends, prescriptions, imaging data, and genomic data specific to the Indian population."
  },
  {
    icon: <Activity className="h-6 w-6 text-health-500" />,
    title: "Real-time Health Trends",
    description: "Track epidemic outbreaks, air pollution impact, and other health-related events across India."
  },
  {
    icon: <Compass className="h-6 w-6 text-health-500" />,
    title: "Research Data Hub",
    description: "Integration with Indian medical research findings to provide context-rich information."
  },
  {
    icon: <Server className="h-6 w-6 text-health-500" />,
    title: "APIs for AI Training",
    description: "AI startups and institutions can access our APIs for data-driven insights and model training."
  },
  {
    icon: <Lock className="h-6 w-6 text-health-500" />,
    title: "Blockchain-based Data Integrity",
    description: "Ensuring transparency and security of all health data through advanced blockchain technology."
  },
  {
    icon: <Heart className="h-6 w-6 text-health-500" />,
    title: "India-Specific Health Insights",
    description: "Tailored analysis of health patterns unique to Indian demographics and lifestyles."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-health-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-health-600 bg-white rounded-full">
            Key Offerings
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-health-900 sm:text-4xl mb-4">
            Empowering Healthcare Innovation
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-health-600">
            Our platform offers comprehensive resources to accelerate healthcare research and development in India.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm border border-health-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-health-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-health-900 mb-3">{feature.title}</h3>
              <p className="text-health-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
