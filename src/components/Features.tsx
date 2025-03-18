import React from "react";

const statesData = [
  { name: "Andhra Pradesh", description: "Strong telemedicine network and high vaccination coverage." },
  { name: "Arunachal Pradesh", description: "Limited healthcare access in rural regions, improving facilities." },
  { name: "Assam", description: "Expanding medical infrastructure with a focus on maternal health." },
  { name: "Bihar", description: "High population density, improving hospital-to-patient ratio with government initiatives." },
  { name: "Chhattisgarh", description: "Emerging AI-driven diagnostics and tribal health initiatives to combat malnutrition." },
  { name: "Goa", description: "Advanced private healthcare, medical tourism hub, and high doctor-to-patient ratio." },
  { name: "Gujarat", description: "Leading in organ transplants, smart hospital implementation, and AI-driven diagnostics." },
  { name: "Haryana", description: "Strong AI-based diagnostics, expanding medical research, and improved rural outreach programs." },
  { name: "Himachal Pradesh", description: "Focus on telemedicine to reach remote mountainous areas and health awareness campaigns." },
  { name: "Jharkhand", description: "Improving primary healthcare, malnutrition eradication, and mobile health units for villages." },
  { name: "Karnataka", description: "Bangalore - a health-tech innovation hub with AI-driven research, biotech, and pharma advancements." },
  { name: "Kerala", description: "Highest health index, robust public healthcare system, and pioneering digital health records." },
  { name: "Madhya Pradesh", description: "Strengthening rural healthcare with mobile clinics and AI-assisted diagnostics." },
  { name: "Maharashtra", description: "Pune and Mumbai leading in AI-based patient care, cancer treatment, and biotech research." },
  { name: "Manipur", description: "Developing telemedicine access, maternal health services, and better regional hospital infrastructure." },
  { name: "Meghalaya", description: "Traditional medicine integration with modern healthcare, enhancing public awareness." },
  { name: "Mizoram", description: "Improving disease surveillance, rural hospital connectivity, and access to digital health records." },
  { name: "Nagaland", description: "Expanding health outreach in tribal regions, AI-assisted diagnostics, and vaccine programs." },
  { name: "Odisha", description: "Disaster response medical units, coastal health programs, and advanced research initiatives." },
  { name: "Punjab", description: "High cancer awareness programs, free treatment initiatives, and AI-driven diagnostic centers." },
  { name: "Rajasthan", description: "Mobile healthcare services in desert areas, AI-driven telemedicine for rural regions." },
  { name: "Sikkim", description: "Integrating herbal medicine research with modern healthcare and boosting healthcare tourism." },
  { name: "Tamil Nadu", description: "High medical research output, leading organ donation program, and advanced hospital facilities." },
  { name: "Telangana", description: "Hyderabad - AI and biotech-driven healthcare development with smart hospital networks." },
  { name: "Tripura", description: "Strengthening rural health infrastructure, expanding vaccination programs, and new AI adoption." },
  { name: "Uttar Pradesh", description: "Large-scale health missions, AI-based rural healthcare access, and improved public hospitals." },
  { name: "Uttarakhand", description: "Himalayan region focus on telemedicine, mobile health units, and AI-driven patient monitoring." },
  { name: "West Bengal", description: "Leading in public health policies, urban healthcare growth, and AI-driven data tracking." },
  { name: "Delhi", description: "AI-powered patient management, high-tech hospitals, and centralized healthcare research hub." },
];

const Features = () => {
  return (
    <section className="py-20 bg-health-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 animate-slide-up">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-health-600 bg-white rounded-full">
          India's Medical Landscape
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-health-900 sm:text-4xl mb-4">
            
            State-Wise Healthcare Overview
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-health-600">
            Explore healthcare initiatives, challenges, and advancements in different states.
          </p>
        </div>

        {/* Scrollable Cards Container */}
        <div className="overflow-x-auto whitespace-nowrap px-2">
          <div className="flex space-x-6 pb-4">
            {statesData.map((state, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md min-w-[280px] max-w-[320px] h-auto border border-health-100 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-health-900 mb-2 text-center">
                  {state.name}
                </h3>
                <p className="text-health-600 text-sm text-center whitespace-normal break-words">
                  {state.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
