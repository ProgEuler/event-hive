import { use, useEffect, useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Link, CircleX } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useToast } from '../components/ui/ToastProvider';
import Toast from '../components/ui/Toast';

export default function Register() {
    document.title = 'Register'

    const { googleSignIn } = use(AuthContext)
    const { showToast } = useToast()
    const navigator = useNavigate()

    const { createUser, setUser, updateUser } = use(AuthContext)

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [formValues, setFormValues] = useState({
    name: '',
    photoUrl: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues)
    setFormErrors(errors)
    setIsSubmit(true)

    // console.log('Register attempt with:', {formValues});
    // console.log("errors: ", errors)

    if(Object.keys(errors).length === 0){
        setLoading(true)
        createUser(formValues.email, formValues.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        //   console.log('User registered:', user);
          showToast('Registration successful!', 'success')
          navigator('/')
          // You can also update the user's profile with the name and photo URL here
          // user.updateProfile({
          //   displayName: formValues.name,
          //   photoURL: formValues.photoUrl,
          // });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        //    setFormErrors(errorMessage)
          console.error('Error registering user:', errorCode, errorMessage);
        })
        .finally(() =>{
            setLoading(false)
        })
    }
  };

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!values.name) {
      errors.name = "Name is required"
    } else if (values.name.length < 3) {
      errors.name = "Name must be at least 3 characters"
    } else if (values.name.length > 20) {
      errors.name = "Name must be less than 20 characters"
    }
    if (!values.email) {
      errors.email = "Email is required"
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format"
    }
    if (!values.password) {
      errors.password = "Password is required"
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters"
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Password must contain at least one uppercase letter, one lowercase letter"
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required"
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match"
    }
    return errors
  }
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 flex flex-col items-center justify-center p-4">
        {/* Loading Overlay */}
            {loading && (
                <div className="absolute inset-0 bg-white/10 min-h-screen flex items-center justify-center z-50">
                    <div className="loader border-t-4 border-b-4 border-purple-500 rounded-full w-12 h-12 animate-spin"></div>
                </div>
            )}

      {/* Register Card */}
      <div className="bg-indigo-900/80 backdrop-blur-sm rounded-xl p-6 w-full max-w-md border border-purple-500/30 shadow-lg mt-16">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Create Your Account</h2>

        <form
            onSubmit={handleSubmit}
            className="space-y-2">
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
                onChange={handleChange}
                className="bg-indigo-800/50 border border-purple-500/50 text-white placeholder-purple-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-3"
                placeholder="Your name"
              />
            </div>
          <p className='flex gap-1 items-center'>
                {formErrors.name && <CircleX size={18}/>}
                {formErrors.name}
          </p>
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
                name="photoUrl"
                type="text"
                onChange={handleChange}
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
                onChange={handleChange}
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
            <p className='flex gap-1 items-center'>
                {formErrors.confirmPassword && <CircleX size={18}/>}
                {formErrors.confirmPassword}
            </p>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 bg-indigo-800 border-purple-500 rounded focus:ring-purple-500"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-purple-200">
              I agree to the{' '}
              <span className="text-purple-300 hover:text-white cursor-pointer">
                Terms and Conditions
              </span>
            </label>
            <p>{formErrors.terms}</p>
          </div>

          {/* Register Button */}
          <div>
            <button
              type='submit'
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Google Sign In Button */}
        <div className="mt-4">

          <button
            onClick={googleSignIn}
            className="flex gap-2 w-full justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <FaGoogle className="w-5 h-5 text-white" />
            Sign up with Google
          </button>
        </div>
        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <div className="border-t border-purple-500/30 flex-grow mr-3"></div>
          <span className="text-purple-200">or</span>
          <div className="border-t border-purple-500/30 flex-grow ml-3"></div>
        </div>
        {/* Sign In Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-purple-200">
            Already have an account?{' '}

            <NavLink
              to="/login"
                className="font-medium text-purple-300 hover:text-white cursor-pointer"
            >
                Sign in
            </NavLink>

          </p>
        </div>
      </div>

    </div>
  );
}
