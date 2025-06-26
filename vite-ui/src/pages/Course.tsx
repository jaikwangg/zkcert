
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Star, Clock, Users, PlayCircle, BookOpen, Award, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const Course = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const courses = [
    {
      id: 1,
      title: "Complete React Development Bootcamp",
      instructor: "John Smith",
      category: "Web Development",
      level: "Beginner to Advanced",
      rating: 4.9,
      reviewCount: 1234,
      studentsCount: 15420,
      duration: "42 hours",
      price: "$89",
      originalPrice: "$199",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop",
      description: "Master React from basics to advanced concepts. Build real-world projects and get job-ready skills.",
      skills: ["React", "JavaScript", "HTML/CSS", "Node.js"],
      features: ["42 hours of video", "15 projects", "Certificate", "Lifetime access"],
      bestseller: true
    },
    {
      id: 2,
      title: "Python for Data Science & Machine Learning",
      instructor: "Dr. Sarah Johnson",
      category: "Data Science",
      level: "Intermediate",
      rating: 4.8,
      reviewCount: 892,
      studentsCount: 8950,
      duration: "36 hours",
      price: "$79",
      originalPrice: "$179",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      description: "Learn Python programming for data analysis, visualization, and machine learning applications.",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      features: ["36 hours of video", "20+ datasets", "Certificate", "Job assistance"],
      bestseller: false
    },
    {
      id: 3,
      title: "Blockchain Development Fundamentals",
      instructor: "Alex Chen",
      category: "Blockchain",
      level: "Advanced",
      rating: 4.7,
      reviewCount: 456,
      studentsCount: 3200,
      duration: "28 hours",
      price: "$129",
      originalPrice: "$249",
      thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
      description: "Build decentralized applications with Ethereum, Solidity, and Web3 technologies.",
      skills: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
      features: ["28 hours of video", "5 DApp projects", "Certificate", "Community access"],
      bestseller: false
    },
    {
      id: 4,
      title: "UI/UX Design Masterclass",
      instructor: "Maria Rodriguez",
      category: "Design",
      level: "Beginner",
      rating: 4.9,
      reviewCount: 678,
      studentsCount: 5670,
      duration: "32 hours",
      price: "$69",
      originalPrice: "$159",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop",
      description: "Learn modern UI/UX design principles, tools, and create stunning user experiences.",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      features: ["32 hours of video", "10 design projects", "Certificate", "Design resources"],
      bestseller: true
    }
  ];

  const categories = ["Web Development", "Data Science", "Blockchain", "Design", "Mobile Development", "DevOps"];
  const levels = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Learn New Skills Online</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Master in-demand technologies with expert-led courses. Get certified and advance your career.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>30K+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>150+ Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Certificates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search courses, topics, or instructors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>{level}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Course Categories Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="bestseller">Bestsellers</TabsTrigger>
            <TabsTrigger value="free">Free</TabsTrigger>
            <TabsTrigger value="certified">Certified</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            {/* Results Summary */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{courses.length} courses found</p>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Sort by: Most Popular</span>
              </div>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden">
                  <div className="relative">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    {course.bestseller && (
                      <Badge className="absolute top-2 left-2 bg-orange-500 text-white">
                        Bestseller
                      </Badge>
                    )}
                    <Button 
                      size="sm" 
                      className="absolute top-2 right-2 bg-black/70 hover:bg-black/90 text-white"
                    >
                      <PlayCircle className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <CardContent className="p-6">
                    {/* Course Header */}
                    <div className="mb-4">
                      <Badge variant="outline" className="text-xs mb-2">
                        {course.category}
                      </Badge>
                      <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {course.description}
                      </p>
                    </div>

                    {/* Instructor */}
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-sm text-gray-700">{course.instructor}</span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{course.rating}</span>
                        <span className="text-gray-500">({course.reviewCount})</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>{course.studentsCount.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <TrendingUp className="w-4 h-4" />
                        <span>{course.level}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {course.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {course.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{course.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <ul className="text-xs text-gray-600 space-y-1">
                        {course.features.slice(0, 2).map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-lg text-green-600">{course.price}</span>
                        <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Courses
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Course;
