import { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Music, Link } from 'lucide-react';

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
        alert('Name is required');
        return;
      }
      if (!photoUrl.trim()) {
        alert('Photo URL is required');
        return;
      }
      if (!email.trim()) {
        alert('Email is required');
        return;
      }
      if (!password.trim()) {
        alert('Password is required');
        return;
      }
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
    console.log('Register attempt with:', { name, photoUrl, email, password});
    // Add your registration logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 flex flex-col items-center justify-center p-4">

      {/* Register Card */}
      <div className="bg-indigo-900/80 backdrop-blur-sm rounded-xl p-6 w-full max-w-md border border-purple-500/30 shadow-lg mt-16">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Create Your Account</h2>

        <div className="space-y-5">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-purple-200 font-medium">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-purple-400" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-indigo-800/50 border border-purple-500/50 text-white placeholder-purple-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-3"
                placeholder="Your name"
              />
            </div>
          </div>

            {/* Photo Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-purple-200 font-medium">
              Photo
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Link className="h-5 w-5 text-purple-400" />
              </div>
              <input
                id="url"
                name="url"
                type="text"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="bg-indigo-800/50 border border-purple-500/50 text-white placeholder-purple-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-3"
                placeholder="URL"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-purple-200 font-medium">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-purple-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-indigo-800/50 border border-purple-500/50 text-white placeholder-purple-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-3"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-purple-200 font-medium">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-purple-400" />
              </div>
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-indigo-800/50 border border-purple-500/50 text-white placeholder-purple-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-3 pr-10"
                placeholder="••••••••"
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-purple-300 hover:text-white focus:outline-none"
                >
                  {passwordVisible ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-purple-200 font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-purple-400" />
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={confirmPasswordVisible ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-indigo-800/50 border border-purple-500/50 text-white placeholder-purple-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-3 pr-10"
                placeholder="••••••••"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="text-purple-300 hover:text-white focus:outline-none"
                >
                  {confirmPasswordVisible ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 bg-indigo-800 border-purple-500 rounded focus:ring-purple-500"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-purple-200">
              I agree to the{' '}
              <span className="text-purple-300 hover:text-white cursor-pointer">
                Terms and Conditions
              </span>
            </label>
          </div>

          {/* Register Button */}
          <div>
            <button
              onClick={handleSubmit}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Sign In Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-purple-200">
            Already have an account?{' '}
            <span className="font-medium text-purple-300 hover:text-white cursor-pointer">
              Sign in
            </span>
          </p>
        </div>
      </div>

    </div>
  );
}
