
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wallet, Shield, Users, Zap, CheckCircle, ArrowRight, Star, Lock, Brain } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How Global Launchpad Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The first Web3 platform that connects verified IT graduates with global opportunities through blockchain technology, secure payments, and AI-powered matching.
          </p>
        </div>
      </div>

      {/* For Graduates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">For Graduates</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Build Your Web3 Career</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your education into verifiable credentials and start earning with blockchain-secured projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-blue-600" />
              </div>
              <div className="bg-blue-600 text-white text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Connect Your Wallet</h3>
              <p className="text-sm text-gray-600">
                Sign up using MetaMask or any Web3 wallet. Your wallet becomes your secure identity on the platform.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <div className="bg-purple-600 text-white text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Verify Your Skills</h3>
              <p className="text-sm text-gray-600">
                Connect your university credentials and course certificates to mint Soulbound Tokens (SBTs) that prove your skills.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="bg-green-600 text-white text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Find Projects</h3>
              <p className="text-sm text-gray-600">
                Browse jobs matched to your verified skills or get AI-powered recommendations based on your profile.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <div className="bg-orange-600 text-white text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Work & Get Paid</h3>
              <p className="text-sm text-gray-600">
                Complete milestones and receive automatic payments through smart contracts. Build your reputation with each project.
              </p>
            </div>
          </div>

          {/* Graduate Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Verifiable Credentials</h3>
                <p className="text-gray-600 text-sm">
                  Your skills are verified by trusted institutions and stored as Soulbound Tokens on the blockchain, creating an unalterable proof of your capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure Payments</h3>
                <p className="text-gray-600 text-sm">
                  Smart contracts ensure you get paid for completed work. Funds are held in escrow and released automatically when milestones are approved.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Tools</h3>
                <p className="text-gray-600 text-sm">
                  Get personalized job recommendations, AI-assisted proposal writing, and instant translation between Thai and English.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 mb-4">For Clients</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hire with Confidence</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access a pool of verified talent with blockchain-proven skills and secure, milestone-based payments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="bg-blue-600 text-white text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Post Your Project</h3>
              <p className="text-sm text-gray-600">
                Create a detailed job posting with required skills, budget, and milestones. Our system matches you with qualified candidates.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <div className="bg-purple-600 text-white text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Review Verified Talent</h3>
              <p className="text-sm text-gray-600">
                See proposals from developers with blockchain-verified credentials. Check their SBTs to confirm their skills are legitimate.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-green-600" />
              </div>
              <div className="bg-green-600 text-white text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure Escrow</h3>
              <p className="text-sm text-gray-600">
                Fund the project through our smart contract escrow. Your money is protected and only released when you approve completed work.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <div className="bg-orange-600 text-white text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Approve & Release</h3>
              <p className="text-sm text-gray-600">
                Review completed milestones and approve payments. The smart contract automatically releases funds to the freelancer.
              </p>
            </div>
          </div>

          {/* Client Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">
                  Every freelancer's skills are verified by trusted educational institutions. No more guessing about candidate qualifications.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Risk-Free Hiring</h3>
                <p className="text-gray-600 text-sm">
                  Smart contract escrow protects your investment. Pay only for approved work and get refunds for incomplete projects.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Global Talent Pool</h3>
                <p className="text-gray-600 text-sm">
                  Access emerging talent from top universities worldwide. Find skilled developers at competitive rates with verified capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powered by Web3 Technology</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on blockchain infrastructure for transparency, security, and trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Soulbound Tokens (SBTs)</h3>
              <p className="text-gray-600 text-sm">
                Non-transferable blockchain credentials that verify your skills and education, creating a permanent, verifiable professional identity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Contract Escrow</h3>
              <p className="text-gray-600 text-sm">
                Automated payment system that holds funds securely and releases them based on predefined milestones and approvals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Integration</h3>
              <p className="text-gray-600 text-sm">
                Machine learning algorithms for job matching, proposal assistance, and real-time translation to break down language barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the future of work where skills are verified, payments are secure, and opportunities are global.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              <Wallet className="w-5 h-5" />
              <span>Connect Wallet</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
