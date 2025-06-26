
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Shield, ExternalLink } from 'lucide-react';

const FeaturedFreelancers = () => {
  const freelancers = [
    {
      id: 1,
      name: "Alex Thompson",
      title: "Full Stack Developer",
      location: "Bangkok, Thailand",
      rating: 4.9,
      reviewCount: 23,
      hourlyRate: "$25/hr",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      sbtCount: 5,
      description: "Recent CS graduate with strong foundation in modern web technologies. Completed 15+ projects with 100% client satisfaction.",
      verifiedSkills: ["JavaScript", "React", "Database Design"]
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      title: "UI/UX Designer & Frontend Dev",
      location: "Mexico City, Mexico",
      rating: 4.8,
      reviewCount: 18,
      hourlyRate: "$22/hr",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face",
      skills: ["Figma", "React", "Tailwind CSS", "Design Systems"],
      sbtCount: 4,
      description: "Creative designer with coding skills. Specialized in creating beautiful, user-friendly interfaces backed by solid frontend development.",
      verifiedSkills: ["UI Design", "Frontend Development", "User Research"]
    },
    {
      id: 3,
      name: "David Chen",
      title: "Blockchain Developer",
      location: "Singapore",
      rating: 5.0,
      reviewCount: 12,
      hourlyRate: "$35/hr",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      skills: ["Solidity", "Web3.js", "Smart Contracts", "DeFi"],
      sbtCount: 6,
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
                    <img
                      src={freelancer.avatar}
                      alt={freelancer.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Shield className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-lg">{freelancer.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{freelancer.title}</p>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{freelancer.location}</span>
                    </div>
                  </div>
                </div>

                {/* Rating and SBTs */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-sm">{freelancer.rating}</span>
                    <span className="text-sm text-gray-500">({freelancer.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-blue-600">
                    <Shield className="w-4 h-4" />
                    <span className="font-medium">{freelancer.sbtCount} SBTs</span>
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
