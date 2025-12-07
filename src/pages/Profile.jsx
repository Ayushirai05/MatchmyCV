import React from 'react';
import { User, Mail, Save } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h1>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
        
        {/* Profile Picture */}
        <div className="flex items-center gap-6">
          <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center text-primary">
            <User size={32} />
          </div>
          <div>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
              Change Photo
            </button>
          </div>
        </div>

        {/* Form Info */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" defaultValue="Alex" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" defaultValue="Morgan" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="flex items-center">
              <span className="bg-gray-100 px-4 py-3 border border-r-0 border-gray-300 rounded-l-lg text-gray-500">
                <Mail size={18} />
              </span>
              <input type="email" defaultValue="alex@example.com" className="w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none" />
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Change Password</h3>
            <div className="space-y-4">
              <input type="password" placeholder="Current Password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none" />
              <input type="password" placeholder="New Password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none" />
            </div>
          </div>

          <div className="flex justify-end pt-4">
             <button type="submit" className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-md transition flex items-center gap-2">
               <Save size={18} /> Save Changes
             </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;