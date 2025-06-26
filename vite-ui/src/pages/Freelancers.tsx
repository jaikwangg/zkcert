
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Star, MapPin, Shield, ExternalLink, Clock } from 'lucide-react';

const Freelancers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const freelancers = [
    {
      id: 1,
      title: "Full Stack Developer",
      location: "Bangkok, Thailand",
      hourlyRate: "$25/hr",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      polCount: 56,
      poeCount: 51,
      description: "Recent CS graduate with strong foundation in modern web technologies. Completed 15+ projects with 100% client satisfaction. Specializing in building scalable web applications with modern frameworks.",
      verifiedSkills: ["JavaScript", "React", "Database Design"],
      completedJobs: 15,
      responseTime: "2 hours",
      availability: "Available",
      languages: ["English", "Thai"]
    },
    {
      id: 2,
      title: "UI/UX Designer & Frontend Dev",
      location: "Mexico City, Mexico",
      hourlyRate: "$22/hr",
      skills: ["Figma", "React", "Tailwind CSS", "Design Systems"],
      polCount: 25,
      poeCount: 35,
      description: "Creative designer with coding skills. Specialized in creating beautiful, user-friendly interfaces backed by solid frontend development. Experience in design systems and accessibility.",
      verifiedSkills: ["UI Design", "Frontend Development", "User Research"],
      completedJobs: 12,
      responseTime: "1 hour",
      availability: "Available",
      languages: ["English", "Spanish"]
    },
    {
      id: 3,
      title: "Blockchain Developer",
      location: "Singapore",
      hourlyRate: "$35/hr",
      skills: ["Solidity", "Web3.js", "Smart Contracts", "DeFi"],
      polCount: 52,
      poeCount: 15,
      description: "Passionate blockchain developer with university certification in distributed systems. Built 8 DeFi applications from scratch with focus on security and gas optimization.",
      verifiedSkills: ["Solidity", "Smart Contracts", "Ethereum"],
      completedJobs: 8,
      responseTime: "4 hours",
      availability: "Busy",
      languages: ["English", "Mandarin"]
    }
  ];

  const skills = [
    "React", "Python", "JavaScript", "TypeScript", "Node.js", "Solidity", 
    "Django", "AWS", "Docker", "Figma", "PostgreSQL", "MongoDB"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Verified Talent</h1>
          <p className="text-lg text-gray-600">Connect with skilled developers who have blockchain-verified credentials from trusted institutions</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search freelancers, skills, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedSkill} onValueChange={setSelectedSkill}>
              <SelectTrigger>
                <SelectValue placeholder="Skills" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                {skills.map((skill) => (
                  <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="americas">Americas</SelectItem>
                <SelectItem value="africa">Africa</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">{freelancers.length} talented developers found</p>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Sort by: Top Rated</span>
          </div>
        </div>

        {/* Freelancer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {freelancers.map((freelancer) => (
            <Card key={freelancer.id} className="hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                {/* Profile Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Shield className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        freelancer.availability === 'Available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {freelancer.availability}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{freelancer.title}</p>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{freelancer.location}</span>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
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
                  <div>
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span className="font-medium text-sm">{freelancer.responseTime}</span>
                    </div>
                    <p className="text-xs text-gray-500">response time</p>
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

                {/* Languages */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-900 mb-1">Languages:</p>
                  <p className="text-sm text-gray-600">{freelancer.languages.join(', ')}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="font-medium text-green-600">{freelancer.hourlyRate}</span>
                    <p className="text-xs text-gray-500">{freelancer.completedJobs} jobs completed</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex items-center space-x-1">
                      <span>View Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Contact
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Freelancers
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Freelancers;
