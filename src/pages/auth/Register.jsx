import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Lock, Mail, User, Loader2, AlertCircle, UserPlus } from "lucide-react";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await register(form);
    setLoading(false);

    if (res.success) {
      navigate("/admin/dashboard");
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Register Card */}
      <div className="w-full max-w-4xl relative z-10">
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/20 overflow-hidden">
          {/* Header with Icon */}
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 md:p-8 text-center border-b border-primary/30">
           
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary">
              Admin Registration
            </h2>
            <p className="text-gray-400 text-sm mt-2 font-orbitron">
              Create your admin account to get started
            </p>
          </div>

          {/* Form */}
          <div className="p-6 md:p-8">
            {/* Error Alert */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-start gap-3 animate-shake">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-red-400 text-sm font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and Email (2 columns on large screens) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300 font-orbitron">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300 font-orbitron">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="admin@cybex.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Password and Submit Button (2 columns on large screens) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Password Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300 font-orbitron">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      value={form.password}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <p className="text-gray-500 text-xs mt-1 font-orbitron">
                    Minimum 8 characters recommended
                  </p>
                </div>

                {/* Submit Button - Aligned to match input height */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300 font-orbitron opacity-0 pointer-events-none">
                    Action
                  </label>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-gradient-to-r from-primary to-secondary text-white font-orbitron font-semibold rounded-xl hover:from-primary-light hover:to-secondary-light transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <>
                        <UserPlus className="w-5 h-5" />
                        <span>Create Account</span>
                      </>
                    )}
                    
                    {/* Button shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="px-6 md:px-8 pb-6 md:pb-8">
            <div className="pt-6 border-t border-gray-700/50 text-center">
              <p className="text-gray-400 text-sm font-orbitron mb-3">
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-primary hover:text-primary-light font-semibold transition-colors duration-300"
                >
                  Sign In
                </button>
              </p>
              <p className="text-gray-500 text-xs font-orbitron">
                Protected by <span className="text-primary font-semibold">CYBEX</span> Security
              </p>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
       
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}