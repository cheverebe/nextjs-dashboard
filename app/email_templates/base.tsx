import React from 'react';
import './base.scss';

type Props = {
  title: string;
  content: React.ReactNode;
};

export default function BaseEmailTemplate({ title, content }: Props) {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '24rem',
        borderRadius: '0.5rem',
        backgroundColor: 'white',
        padding: '1.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <div
        style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://tailormadenews.com/logo.png"
            alt="TailorMadeNews Logo"
            width="40"
            height="40"
            style={{
              marginRight: '0.5rem',
              aspectRatio: 1,
              objectFit: 'cover',
            }}
          />
          <h2
            style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            TailorMadeNews
          </h2>
        </div>
        <div style={{ fontSize: '0.875rem', color: '#6c757d' }}>
          {new Date().toLocaleDateString()}
        </div>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <div
          style={{
            borderRadius: '0.375rem',
            backgroundColor: '#f8f9fa',
            padding: '1rem',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          <h3
            style={{
              marginBottom: '0.5rem',
              fontSize: '1.125rem',
              fontWeight: 600,
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            {title}
          </h3>
          {content}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.875rem',
            color: '#6c757d',
          }}
        >
          <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            Stop receiving these emails
          </a>
          <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            Manage email preferences
          </a>
        </div>
      </div>
    </div>
  );
}
