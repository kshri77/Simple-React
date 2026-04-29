import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

const Success: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-20 w-20 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Registration Successful</h2>
        <p className="text-gray-600 mb-8">
          Thank you for applying to ABC College. Our admissions team will review your application and contact you soon.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          <Home className="mr-2 h-5 w-5" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
