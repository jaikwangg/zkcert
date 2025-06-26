
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign, MapPin, Star } from 'lucide-react';

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "React Frontend Developer",
      company: "TechStart",
      location: "Remote",
      budget: "$2,500 - $4,000",
      duration: "2-3 months",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      description: "Looking for a skilled React developer to build a modern dashboard application with real-time features.",
      postedTime: "2 hours ago"
    },
    {
      id: 2,
      title: "Smart Contract Developer",
      company: "CryptoVenture",
      location: "Remote",
      budget: "$3,000 - $5,500",
      duration: "1-2 months",
      skills: ["Solidity", "Web3.js", "Ethereum"],
      description: "Seeking an experienced blockchain developer to create DeFi smart contracts with security best practices.",
      postedTime: "5 hours ago"
    },
    {
      id: 3,
      title: "Full Stack Python Developer",
      company: "DataFlow",
      location: "Hybrid",
      budget: "$2,000 - $3,500",
      duration: "3-4 months",
      skills: ["Python", "Django", "PostgreSQL"],
      description: "Building a data analytics platform with Python backend and modern frontend integration.",
      postedTime: "1 day ago"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Opportunities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover high-quality projects from verified clients looking for talented developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-gray-900 line-clamp-2">
                    {job.title}
                  </CardTitle>
                  
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  <p className="font-medium">{job.company}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{job.location}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-green-600">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-medium">{job.budget}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{job.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{job.postedTime}</span>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
