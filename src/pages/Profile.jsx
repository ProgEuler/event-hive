import { useState, useEffect, use } from 'react';
import { User, Save } from 'lucide-react';
import { AuthContext } from '../provider/AuthProvider';

export default function Profile() {
    const { user } = use(AuthContext)
  // Initialize state with placeholder user data
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    photoURL: "/api/placeholder/150/150"
  });

  // State to track if edit mode is active
  const [isEditing, setIsEditing] = useState(false);

  // State for form input values
  const [formValues, setFormValues] = useState({
    name: userData.name,
    photoURL: userData.photoURL
  });

  // Update form values when userData changes
  useEffect(() => {
    setFormValues({
      name: userData.name,
      photoURL: userData.photoURL
    });
  }, [userData]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    // Update user data with form values
    setUserData({
      ...userData,
      name: formValues.name,
      photoURL: formValues.photoURL
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-700 text-white p-6">

      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">User Profile</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="bg-indigo-900 bg-opacity-50 rounded-lg p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Image */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-purple-800 rounded-lg p-2 text-center">
                <User className="inline-block mr-2" size={18} />
                <span className="font-medium">User</span>
              </div>
            </div>

            {/* User Information */}
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={user.displayName}
                      onChange={handleInputChange}
                      className="bg-indigo-800 bg-opacity-50 w-full p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      className="bg-indigo-800 bg-opacity-50 w-full p-3 rounded-lg text-white cursor-not-allowed opacity-70"
                      disabled
                    />
                    <p className="text-xs text-purple-300 mt-1">Email cannot be changed</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Photo URL</label>
                    <input
                      type="text"
                      name="photoURL"
                      value={user.photoURL}
                      onChange={handleInputChange}
                      className="bg-indigo-800 bg-opacity-50 w-full p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg flex items-center"
                  >
                    <Save className="mr-2" size={18} />
                    Save Changes
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-purple-300">Name</h3>
                    <p className="text-xl font-semibold">{user.displayName}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-purple-300">Email</h3>
                    <p className="text-xl font-semibold">{user.email}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
