import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Bell, TrendingUp, Target } from 'lucide-react';
import { Logo } from '../components/common/Logo';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Vivid Animated Gradient Background */}
      <div className="animate-gradient" style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 25%, #db2777 50%, #0284c7 75%, #4338ca 100%)',
      }}></div>

      {/* Animated Floating Shapes */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="floating-shape" style={{
          position: 'absolute', top: '5rem', left: '2.5rem',
          width: '16rem', height: '16rem',
          background: 'rgba(244, 114, 182, 0.3)',
          borderRadius: '50%',
          filter: 'blur(3rem)'
        }}></div>
        <div className="floating-shape-delay" style={{
          position: 'absolute', bottom: '5rem', right: '5rem',
          width: '20rem', height: '20rem',
          background: 'rgba(34, 211, 238, 0.3)',
          borderRadius: '50%',
          filter: 'blur(3rem)'
        }}></div>
        <div className="floating-shape-slow" style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '24rem', height: '24rem',
          background: 'rgba(232, 121, 249, 0.2)',
          borderRadius: '50%',
          filter: 'blur(3rem)',
          transform: 'translate(-50%, -50%)'
        }}></div>
      </div>

      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', paddingTop: '3rem', paddingBottom: '3rem' }} className="px-3 px-md-4">
        <div className="container-lg">
          
          {/* Hero Section */}
          <div style={{ textAlign: 'center', marginBottom: '7rem' }}>
            {/* Logo with Glow Effect */}
            <div style={{ display: 'inline-block', marginBottom: '3rem' }}>
              <Logo size={200} />
            </div>

            {/* Title with Gradient Text */}
            <h1 style={{
              maxWidth: '48rem',
              margin: '0 auto 1.5rem',
              fontSize: 'clamp(2rem, 8vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: '1.2',
              background: 'linear-gradient(to right, #ffffff, #fce7f3, #a5f3fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              AccelTrack
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              margin: '0 auto 1rem',
              maxWidth: '48rem',
              fontWeight: 500
            }}>
              Your Ultimate Study Companion 📚
            </p>

            <p style={{
              fontSize: 'clamp(1.2rem, 1.5vw, 1.125rem)',
              color: 'rgba(255, 255, 255, 0.8)',
              margin: '0 auto 2.5rem',
              maxWidth: '42rem',
              lineHeight: '1.6'
            }}>
              Track tests, manage schedules, and ace your exams with smart notifications
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <button
                onClick={() => navigate('/login')}
                style={{
                  background: 'white',
                  color: '#581c87',
                  padding: '0.75rem 2rem',
                  borderRadius: '1rem',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  border: 'none',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Get Started 🚀
              </button>
              <button
                onClick={() => navigate('/register')}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '1rem',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(4px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Sign Up Free ✨
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="row g-4" style={{ marginBottom: '7rem', maxWidth: '90rem', margin: '0 auto 7rem' }}>
            {/* Card 1 - Track Tests */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card" style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)',
                padding: '2rem',
                borderRadius: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                  e.currentTarget.style.boxShadow = 'rgba(236, 72, 153, 0.3) 0 30px 60px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
                }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #ec4899, #f43f5e)',
                  width: '5rem', height: '5rem',
                  borderRadius: '1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '2rem',
                  boxShadow: '0 15px 30px rgba(236, 72, 153, 0.4)',
                  transition: 'transform 0.3s ease'
                }}>
                  <Calendar size={40} color="white" strokeWidth={2.5} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '1.25rem', color: 'white' }}>Track Tests</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1rem', lineHeight: '1.6' }}>
                  Organize all your exams in one beautiful dashboard. Never lose track of important dates! 📅
                </p>
              </div>
            </div>

            {/* Card 2 - Manage Schedule */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card" style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)',
                padding: '2rem',
                borderRadius: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                  e.currentTarget.style.boxShadow = 'rgba(34, 211, 238, 0.3) 0 30px 60px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
                }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
                  width: '5rem', height: '5rem',
                  borderRadius: '1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '2rem',
                  boxShadow: '0 15px 30px rgba(34, 211, 238, 0.4)',
                  transition: 'transform 0.3s ease'
                }}>
                  <Clock size={40} color="white" strokeWidth={2.5} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '1.25rem', color: 'white' }}>Smart Schedule</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1rem', lineHeight: '1.6' }}>
                  Your weekly classes at a glance. Stay organized and in control of your time! ⏰
                </p>
              </div>
            </div>

            {/* Card 3 - Get Notifications */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card" style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)',
                padding: '2rem',
                borderRadius: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                  e.currentTarget.style.boxShadow = 'rgba(168, 85, 247, 0.3) 0 30px 60px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
                }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                  width: '5rem', height: '5rem',
                  borderRadius: '1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '2rem',
                  boxShadow: '0 15px 30px rgba(168, 85, 247, 0.4)',
                  transition: 'transform 0.3s ease'
                }}>
                  <Bell size={40} color="white" strokeWidth={2.5} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '1.25rem', color: 'white' }}>Smart Alerts</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1rem', lineHeight: '1.6' }}>
                  Get reminded 24h and 1h before tests. Never miss an exam again! 🔔
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="row g-4" style={{ maxWidth: '60rem', margin: '0 auto', marginBottom: '5rem' }}>
            <div className="col-12 col-md-6">
              <div style={{
                background: 'rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(10px)',
                padding: '2.5rem',
                borderRadius: '1.25rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                  <TrendingUp size={50} color="#fce7f3" />
                </div>
                <p style={{ fontSize: '3rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>95%</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.125rem' }}>Success Rate</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div style={{
                background: 'rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(10px)',
                padding: '2.5rem',
                borderRadius: '1.25rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                  <Target size={50} color="#e9d5ff" />
                </div>
                <p style={{ fontSize: '3rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>4.5/5</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.125rem' }}>Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
