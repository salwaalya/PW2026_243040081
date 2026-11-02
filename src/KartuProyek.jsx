
import React from 'react';

function KartuProyek({ judul, deskripsi, teknologi, github }) {
  return (
    <div style={{
      border: '1px solid #D0D7DE',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginBottom: '16px'
    }}>
      <h3 style={{
        color: '#1B365D',
        marginTop: '0'
      }}>
        {judul}
      </h3>

      <p style={{
        color: '#555',
        fontSize: '14px',
        lineHeight: '1.6'
      }}>
        {deskripsi}
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '16px'
      }}>
        {teknologi.map((tech, index) => (
          <span key={index} style={{
            backgroundColor: '#E1EAF5',
            color: '#1B365D',
            padding: '5px 10px',
            borderRadius: '15px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            #{tech}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          backgroundColor: '#1B365D',
          color: '#FFFFFF',
          padding: '9px 16px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '13px',
          fontWeight: 'bold'
        }}
      >
        Lihat Repositori GitHub
      </a>
    </div>
  );
}

export default KartuProyek;
