import teamMembers from '../data/teamMembers.json';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Company Info Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          About ShopHub
        </h1>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to provide the best shopping experience with quality products 
          and exceptional customer service. Founded in 2024, we've quickly become a trusted 
          name in e-commerce.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-5xl mb-4">🎯</div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower customers with high-quality products at affordable prices, 
            while delivering an exceptional shopping experience that exceeds expectations.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-5xl mb-4">👁️</div>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become the world's most customer-centric e-commerce platform, 
            revolutionizing how people shop online with innovation and trust.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800 text-sm">
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;