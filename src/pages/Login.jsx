import { use, useRef, useState } from 'react';
import { Mail, Lock, Eye, EyeOff, CircleX } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useToast } from '../components/ui/ToastProvider';

export default function Login() {
    const { googleSignIn, resetPassword } = use(AuthContext)
    const { showToast } = useToast()
    const emailRef = useRef()

    document.title = 'Login | MyApp'
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location)
    const { logIn } = use(AuthContext)
  const [passwordVisible, setPasswordVisible] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues))
    //   console.log('Login attempt with:', {formValues});
      // Add your registration logic here
      setLoading(true)
      logIn(formValues.email, formValues.password)
        .then((userCredential) => {
            showToast('Logged in successfully!', 'success')
            // Signed in
            navigate(location.state || '/')
            // const user = userCredential.user;
            // console.log('User Logged in', user);
            // You can also update the user's profile with the name and photo URL here
            // user.updateProfile({
            //   displayName: formValues.name,
            //   photoURL: formValues.photoUrl,
            // });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setFormErrors({ ...formErrors, password: errorMessage })

            console.error('Error logging in user:', errorCode, errorMessage);
        })
        .finally(() => {
            setLoading(false)
        })
    }

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

  const passReset = () => {
    const email = (emailRef.current.value)
    // console.log(email)
    resetPassword(email)
        .then(() => {
            showToast("A reset email sent to your account.")
        })
        .catch((error) => {
            throw error
        })
  }

  return (
    <div className="lg:py-24 bg-gradient-to-r from-blue-900 to-purple-900 flex flex-col items-center justify-center p-4">
        {loading && (
                <div className="absolute inset-0 bg-white/10 min-h-screen flex items-center justify-center z-50">
                    <div className="loader border-t-4 border-b-4 border-purple-500 rounded-full w-12 h-12 animate-spin"></div>
                </div>
            )}
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
                ref={emailRef}
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
            <div onClick={passReset} className="text-sm font-medium text-purple-300 hover:text-white cursor-pointer">
              Forgot password?
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type='submit'
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Login
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
            Sign in with Google
        </button>
        </div>
        {/* Divider */}
        <div className="flex items-center justify-between mt-4">
          <hr className="w-full border-t border-purple-500" />
          <span className="text-purple-200 px-2">or</span>
          <hr className="w-full border-t border-purple-500" />
        </div>
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
