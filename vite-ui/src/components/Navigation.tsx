import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Briefcase, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { mockUsers } from '@/lib/mockUsers';
import { useUser } from '@/context/UserContext';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  // Handler for user selection
  const handleUserChange = (e) => {
    const selected = mockUsers.find(u => u.id === e.target.value);
    if (selected) {
      setUser(selected);
      navigate('/dashboard');
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GP</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GradPad
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/jobs" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Briefcase className="w-4 h-4" />
              <span>Jobs</span>
            </Link>
            <Link to="/freelancers" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <User className="w-4 h-4" />
              <span>Freelancers</span>
            </Link>
            <Link to="/interns" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <User className="w-4 h-4" />
              <span>Interns</span>
            </Link>
            <Link to="/course" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Search className="w-4 h-4" />
              <span>Courses</span>
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
              How It Works
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
          </div>

          {/* Desktop CTA + User Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            {/* User Switcher Dropdown */}
            <div className="relative">
              <select
                className="border rounded px-2 py-1 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 min-w-[140px]"
                value={user ? user.id : ''}
                onChange={handleUserChange}
              >
                <option value="">Select User</option>
                {mockUsers.map(u => (
                  <option key={u.id} value={u.id}>{u.name} ({u.role})</option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/jobs" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Briefcase className="w-4 h-4" />
                <span>Jobs</span>
              </Link>
              <Link to="/freelancers" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <User className="w-4 h-4" />
                <span>Freelancers</span>
              </Link>
              <Link to="/interns" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <User className="w-4 h-4" />
                <span>Interns</span>
              </Link>
              <Link to="/course" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Search className="w-4 h-4" />
                <span>Courses</span>
              </Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
                How It Works
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              {/* User Switcher Dropdown for Mobile */}
              <div className="relative w-full">
                <select
                  className="border rounded px-2 py-2 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full"
                  value={user ? user.id : ''}
                  onChange={handleUserChange}
                >
                  <option value="">Select User</option>
                  {mockUsers.map(u => (
                    <option key={u.id} value={u.id}>{u.name} ({u.role})</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
