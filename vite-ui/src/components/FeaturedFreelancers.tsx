
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Shield, ExternalLink } from 'lucide-react';

const FeaturedFreelancers = () => {
  const freelancers = [
    {
      id: 1,
      title: "Full Stack Developer",
      location: "Bangkok, Thailand",
      hourlyRate: "$25/hr",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      polCount: 127,
      poeCount: 99,
      description: "Recent CS graduate with strong foundation in modern web technologies. Completed 15+ projects with 100% client satisfaction.",
      verifiedSkills: ["JavaScript", "React", "Database Design"]
    },
    {
      id: 2,
      title: "UI/UX Designer & Frontend Dev",
      location: "Mexico City, Mexico",
      hourlyRate: "$22/hr",
      skills: ["Figma", "React", "Tailwind CSS", "Design Systems"],
      polCount: 100,
      poeCount: 90,
      description: "Creative designer with coding skills. Specialized in creating beautiful, user-friendly interfaces backed by solid frontend development.",
      verifiedSkills: ["UI Design", "Frontend Development", "User Research"]
    },
    {
      id: 3,
      title: "Blockchain Developer",
      location: "Singapore",
      hourlyRate: "$35/hr",
      skills: ["Solidity", "Web3.js", "Smart Contracts", "DeFi"],
      polCount: 106,
      poeCount: 68,
      description: "Passionate blockchain developer with university certification in distributed systems. Built 8 DeFi applications from scratch.",
      verifiedSkills: ["Solidity", "Smart Contracts", "Ethereum"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Verified Talent</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with skilled developers who have blockchain-verified credentials from trusted institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancers.map((freelancer) => (
            <Card key={freelancer.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Profile Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Shield className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-600 mb-1">{freelancer.title}</p>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{freelancer.location}</span>
                    </div>
                  </div>
                </div>

                {/* Rating and SBTs */}
                <div className="flex items-center justify-between mb-4">
                <div>
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Shield className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-sm text-gray-400">{freelancer.polCount}</span>
                    </div>
                    <p className="text-xs text-gray-500">POL</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Shield className="w-4 h-4 text-yellow-400" />
                      <span className="font-medium text-sm text-yellow-400">{freelancer.poeCount}</span>
                    </div>
                    <p className="text-xs text-gray-500">POW</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{freelancer.description}</p>

                {/* Verified Skills */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-900 mb-2">Verified Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {freelancer.verifiedSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-blue-50 text-blue-700 flex items-center space-x-1">
                        <Shield className="w-2 h-2" />
                        <span>{skill}</span>
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* All Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {freelancer.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-medium text-green-600">{freelancer.hourlyRate}</span>
                  <Button size="sm" variant="outline" className="flex items-center space-x-1">
                    <span>View Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Browse All Talent
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFreelancers;
