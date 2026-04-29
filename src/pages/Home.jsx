import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      <section className="bg-indigo-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to ABC College</h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Empowering students to achieve their dreams through world-class education and innovation.
          </p>
          <Link
            to="/registration"
            className="inline-flex items-center px-8 py-3 bg-white text-indigo-700 font-bold rounded-lg hover:bg-indigo-50 transition transform hover:scale-105"
          >
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Education</h3>
              <p className="text-gray-600">
                Diverse courses designed to meet industry standards and future demands.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from industry veterans and experienced professors dedicated to your success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Placement Cell</h3>
              <p className="text-gray-600">
                Our dedicated placement team ensures students land their dream jobs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
