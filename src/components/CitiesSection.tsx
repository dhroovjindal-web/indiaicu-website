export function CitiesSection() {
  const cities = [
    "Mumbai", "Bengaluru", "Hyderabad", "Chennai", 
    "Kolkata", "Pune", "Jaipur", "Lucknow", 
    "Chandigarh", "Patna", "Ahmedabad"
  ];

  return (
    <section id="cities" className="py-24 bg-card/40 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
          Operational Footprint
        </h2>
        <p className="text-lg text-primary font-medium mb-16 tracking-wide">
          50+ Cities Across India
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Hero City */}
          <div className="mb-12">
            <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#0d1b35] to-blue-400 tracking-tighter">
              DELHI NCR
            </span>
            <p className="text-muted-foreground mt-2 font-medium">Headquarters & Primary Hub</p>
          </div>

          {/* Other Cities Grid */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
            {cities.map((city, i) => (
              <span key={i} className="text-lg md:text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-default">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
