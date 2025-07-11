
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Clock, DollarSign, MapPin, Star, Bookmark } from 'lucide-react';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [budgetRange, setBudgetRange] = useState('');

  const jobs = [
    {
      id: 1,
      title: "React Frontend Developer",
      company: "TechStart",
      location: "Remote",
      budget: "$2,500 - $4,000",
      duration: "2-3 months",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      description: "Looking for a skilled React developer to build a modern dashboard application with real-time features. The project involves creating a comprehensive admin panel with data visualization, user management, and reporting capabilities.",
      postedTime: "2 hours ago",
      proposals: 5,
      featured: true
    },
    {
      id: 2,
      title: "Smart Contract Developer",
      company: "CryptoVenture",
      location: "Remote",
      budget: "$3,000 - $5,500",
      duration: "1-2 months",
      skills: ["Solidity", "Web3.js", "Ethereum"],
      description: "Seeking an experienced blockchain developer to create DeFi smart contracts with security best practices. Must have experience with testing frameworks and gas optimization.",
      postedTime: "5 hours ago",
      proposals: 12,
      featured: true
    },
    {
      id: 3,
      title: "Full Stack Python Developer",
      company: "DataFlow",
      location: "Hybrid",
      budget: "$2,000 - $3,500",
      duration: "3-4 months",
      skills: ["Python", "Django", "PostgreSQL"],
      description: "Building a data analytics platform with Python backend and modern frontend integration. Experience with data processing and API development required.",
      postedTime: "1 day ago",
      proposals: 8,
      featured: false
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Next Opportunity</h1>
          <p className="text-lg text-gray-600">Discover projects that match your verified skills and start building your Web3 reputation</p>
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
                  placeholder="Search jobs, skills, or companies..."
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
            <Select value={budgetRange} onValueChange={setBudgetRange}>
              <SelectTrigger>
                <SelectValue placeholder="Budget Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Budget</SelectItem>
                <SelectItem value="0-1000">$0 - $1,000</SelectItem>
                <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                <SelectItem value="5000+">$5,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">{jobs.length} jobs found</p>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Sort by: Newest</span>
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {job.title}
                      </CardTitle>
                      {job.featured && (
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="font-medium">{job.company}</span>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{job.location}</span>
                      </div>
                      
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 mb-4">{job.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-1 text-green-600">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-medium">{job.budget}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{job.duration}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {job.proposals} proposals • {job.postedTime}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Jobs
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
