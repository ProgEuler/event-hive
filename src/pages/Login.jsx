import { use, useEffect, useState } from 'react';
import { Mail, Lock, Eye, EyeOff, CircleX } from 'lucide-react';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

export default function Login() {
    const { logIn } = use(AuthContext)
  const [passwordVisible, setPasswordVisible] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues))
      setIsSubmit(true)
      console.log('Login attempt with:', {formValues});
      // Add your registration logic here
      logIn(formValues.email, formValues.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('User Logged in', user);
        // You can also update the user's profile with the name and photo URL here
        // user.updateProfile({
        //   displayName: formValues.name,
        //   photoURL: formValues.photoUrl,
        // });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error logging in user:', errorCode, errorMessage);
      });
    }
    useEffect( () => {
      console.log(formErrors)
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log('Login successful:', formValues);
        // Perform registration logic here, e.g., API call
      }
    }, [])

    const validate = (values) => {
      const errors = {}
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!values.email) {
        errors.email = "Email is required"
      } else if (!regex.test(values.email)) {
        errors.email = "Invalid email format"
      }
      if (!values.password) {
        errors.password = "Password is required"
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters"
      }

      return errors
    }
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="lg:py-24 bg-gradient-to-r from-blue-900 to-purple-900 flex flex-col items-center justify-center p-4">

      {/* Login Card */}
      <div className="bg-indigo-900/80 backdrop-blur-sm rounded-xl p-6 w-full max-w-md border border-purple-500/30 shadow-lg mt-24 lg:mt-16">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login to Your Account</h2>

        <form
            onSubmit={handleSubmit}
            className="space-y-6">
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
                onChange={handleChange}
                className="bg-indigo-800/50 border border-purple-500/50 text-white placeholder-purple-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-3"
                placeholder="your@email.com"
              />
            </div>
              <p className='flex gap-1 items-center'>
                    {formErrors.email && <CircleX size={18}/>}
                    {formErrors.email}
              </p>
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
                onChange={handleChange}
                className="bg-indigo-800/50 border border-purple-500/50 text-white placeholder-purple-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-3 pr-10"
                placeholder="••••••••"
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
                <p className='flex gap-1 items-center'>
                    {formErrors.password && <CircleX size={18}/>}
                    {formErrors.password}
                </p>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 bg-indigo-800 border-purple-500 rounded focus:ring-purple-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-purple-200">
                Remember me
              </label>
            </div>
            <div className="text-sm font-medium text-purple-300 hover:text-white cursor-pointer">
              Forgot password?
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type='submit'
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-purple-200">
            Don't have an account?{' '}

            <NavLink
                to="/register"
                className="font-medium text-purple-300 hover:text-white cursor-pointer"
            >
              Sign up now
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
