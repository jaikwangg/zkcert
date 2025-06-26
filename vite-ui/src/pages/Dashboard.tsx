import { useEffect, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer'; 
import { useUser } from '@/context/UserContext';

const Dashboard = () => {
  const { user } = useUser();
  const [isProofValid, setIsProofValid] = useState(false);

  useEffect(() => {
    if (
        !user ||
        user.role !== "Student" ||
        user.gpa == 0||
        user.id == ""
      ) {
        setIsProofValid(false);
      } else {
        // mock verify success
        setIsProofValid(true);
      }
  }, [user]);

  return (
    <>
    <Navigation />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white py-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-100 p-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div>
              <h1 className="text-4xl font-extrabold text-blue-700 mb-1">{user?.name}</h1>
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                {user?.role}
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow">
              <span className="text-2xl font-bold text-blue-600">GPA</span>
              <span className="text-4xl font-extrabold text-blue-800 mt-2">{user?.gpa}</span>
            </div>
            <div className={`rounded-xl p-6 flex flex-col items-center shadow
              ${isProofValid ? "bg-green-50" : "bg-red-50"}`}>
              {isProofValid ? (
                <>
                  <CheckCircle2 className="w-10 h-10 text-green-500 mb-2" />
                  <span className="text-lg font-bold text-green-700">Proof is valid</span>
                </>
              ) : (
                <>
                  <XCircle className="w-10 h-10 text-red-500 mb-2" />
                  <span className="text-lg font-bold text-red-700">Proof is invalid</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Dashboard;
