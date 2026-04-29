import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About ABC College</h2>
          
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p className="mb-4">
              Founded in 1985, ABC College has been a beacon of academic excellence for over three decades. 
              We are dedicated to providing a transformative education that prepares our students for the 
              challenges of the 21st century.
            </p>
            <p className="mb-4">
              Our campus is home to state-of-the-art laboratories, a vast digital library, and modern 
              recreational facilities. We believe in a holistic approach to education, combining 
              rigorous academics with co-curricular activities and character development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="bg-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6">Our Mission</h3>
              <p className="text-indigo-800 italic">
                "To nurture innovative thinkers and responsible global citizens through excellence 
                in education, research, and community service."
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">123 Education Lane, Knowledge City, ST 56789</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">admissions@abccollege.edu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <p className="font-semibold">Office Hours</p>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
