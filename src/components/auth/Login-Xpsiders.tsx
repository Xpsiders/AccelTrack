import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../context/AuthContext';
import type { LoginRequest } from '../../types/user.types';
import { loginSchema } from '../../utils/validators';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState<string>('');

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginRequest) => {
    try {
      setError('');
      await login(data);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to login');
    }
  };

  return (
     <div className="animate-gradient" style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 25%, #db2777 50%, #0284c7 75%, #4338ca 100%)',
      }}>
    <div className="min-vh-100 d-flex align-items-center justify-content-center animate-gradient">
      <div className="card shadow-sm w-100" style={{ maxWidth: 420 }}>
        <div className="card-body p-4">
          <h2 className="h3 text-center mb-4">Login</h2>

          {error && (
            <div className="alert alert-danger py-2 mb-3">{error}</div>
          )}
          

          <div>
            <div className="mb-3">
              <label className="form-label small mb-1">Email</label>
              <input
                {...register('email')}
                type="email"
                className="form-control"
              />
              {errors.email && <p className="text-danger small mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label small mb-1">Password</label>
              <input
                {...register('password')}
                type="password"
                className="form-control"
              />
              {errors.password && <p className="text-danger small mt-1">{errors.password.message}</p>}
            </div>

            <button
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="btn btn-primary w-100"
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </div>

          <p className="text-center mt-3 mb-0 text-muted">
            Don't have an account? <Link to="/register" className="text-primary">Register</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};
