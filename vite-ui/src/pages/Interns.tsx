import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Star, MapPin, Shield, ExternalLink, Clock, GraduationCap } from 'lucide-react';

const Interns = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const interns = [
    {
      id: 1,
      name: "Nina Patel",
      title: "Computer Science Student",
      university: "Chulalongkorn University",
      location: "Bangkok, Thailand",
      reviewCount: 12,
      availability: "Part-time",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face",
      skills: ["Python", "React", "JavaScript", "Git"],
      sbtCount: 3,
      description: "Third-year CS student with strong programming fundamentals. Completed several academic projects and looking for hands-on industry experience.",
      verifiedSkills: ["Python Programming", "Web Development"],
      year: "3rd Year",
      gpa: "3.8/4.0",
      languages: ["English", "Thai"]
    },
    {
      id: 2,
      name: "Carlos Martinez",
      title: "Software Engineering Student",
      university: "Universidad Nacional Autónoma de México",
      location: "Mexico City, Mexico",
      reviewCount: 8,
      availability: "Full-time",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      skills: ["Java", "Spring Boot", "MySQL", "Docker"],
      sbtCount: 4,
      description: "Final year software engineering student with experience in full-stack development. Passionate about learning new technologies and contributing to real projects.",
      verifiedSkills: ["Java Development", "Database Design"],
      year: "4th Year",
      gpa: "3.9/4.0",
      languages: ["English", "Spanish"]
    },
    {
      id: 3,
      name: "Aisha Hassan",
      title: "Data Science Student",
      university: "Cairo University",
      location: "Cairo, Egypt",
      reviewCount: 15,
      availability: "Part-time",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      skills: ["Python", "R", "Machine Learning", "Statistics"],
      sbtCount: 5,
      description: "Data science student with strong analytical skills. Completed multiple data analysis projects and eager to apply machine learning in real-world scenarios.",
      verifiedSkills: ["Data Analysis", "Statistical Modeling"],
      year: "3rd Year",
      gpa: "3.7/4.0",
      languages: ["English", "Arabic"]
    },
    {
      id: 4,
      name: "Li Wei",
      title: "Computer Engineering Student",
      university: "National University of Singapore",
      location: "Singapore",
      reviewCount: 10,
      availability: "Full-time",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      skills: ["C++", "Python", "Embedded Systems", "IoT"],
      sbtCount: 4,
      description: "Computer engineering student specializing in embedded systems and IoT. Built several hardware-software integration projects during coursework.",
      verifiedSkills: ["Embedded Programming", "Hardware Design"],
      year: "4th Year",
      gpa: "3.8/4.0",
      languages: ["English", "Mandarin"]
    }
  ];

  const skills = [
    "Python", "Java", "JavaScript", "React", "C++", "Machine Learning", 
    "Data Analysis", "Web Development", "Mobile Development", "Database Design"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Talented Interns</h1>
          <p className="text-lg text-gray-600">Connect with promising students who have verified academic credentials and are eager to gain real-world experience</p>
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
                  placeholder="Search interns, skills, or universities..."
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
          <p className="text-gray-600">{interns.length} talented students found</p>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Sort by: Top Rated</span>
          </div>
        </div>

        {/* Intern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interns.map((intern) => (
            <Card key={intern.id} className="hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                {/* Profile Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <img
                      src={intern.avatar}
                      alt={intern.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 text-lg">{intern.name}</h3>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        intern.availability === 'Full-time' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {intern.availability}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{intern.title}</p>
                    <p className="text-xs text-blue-600 mb-1">{intern.university}</p>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{intern.location}</span>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <p className="text-xs text-gray-500">{intern.reviewCount} reviews</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-sm text-blue-600">{intern.sbtCount}</span>
                    </div>
                    <p className="text-xs text-gray-500">SBTs</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <GraduationCap className="w-4 h-4 text-purple-600" />
                      <span className="font-medium text-sm">{intern.year}</span>
                    </div>
                    <p className="text-xs text-gray-500">GPA: {intern.gpa}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{intern.description}</p>

                {/* Verified Skills */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-900 mb-2">Verified Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {intern.verifiedSkills.map((skill) => (
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
                    {intern.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-900 mb-1">Languages:</p>
                  <p className="text-sm text-gray-600">{intern.languages.join(', ')}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="font-medium text-purple-600">{intern.availability}</span>
                    <p className="text-xs text-gray-500">{intern.university}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex items-center space-x-1">
                      <span>View Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
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
            Load More Interns
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Interns;