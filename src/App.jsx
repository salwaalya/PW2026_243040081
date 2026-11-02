
import React from 'react';
import KartuProfil from './KartuProfil.jsx';
import BadgeSkill from './BadgeSkill.jsx';
import ItemMatkul from './ItemMatkul.jsx';
import KartuProyek from './KartuProyek.jsx';

function App() {
  const daftarPraktikum = [
    {
      id: 101,
      kode: 'IF211',
      nama: 'Pemrograman Web (React & Laravel)',
      sks: 3,
      hari: 'Senin'
    },
    {
      id: 102,
      kode: 'IF212',
      nama: 'Sistem Basis Data (PostgreSQL)',
      sks: 3,
      hari: 'Rabu'
    },
    {
      id: 103,
      kode: 'IF213',
      nama: 'Rekayasa Perangkat Lunak Terapan',
      sks: 3,
      hari: 'Kamis'
    },
    {
      id: 104,
      kode: 'IF214',
      nama: 'Arsitektur Sistem Terdistribusi',
      sks: 2,
      hari: 'Jumat'
    }
  ];

  const daftarProyek = [
    {
      id: 1,
      judul: 'Website Hotel',
      deskripsi: 'Website pemesanan hotel dengan informasi kamar dan fasilitas.',
      teknologi: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/salwaalya/PW2026_243040081'
    },
    {
      id: 2,
      judul: 'Aplikasi Kasir',
      deskripsi: 'Aplikasi untuk membantu proses transaksi dan pencatatan penjualan.',
      teknologi: ['React JS', 'JavaScript'],
      github: 'https://github.com/salwaalya/PW2026_243040081'
    },
    {
      id: 3,
      judul: 'Sistem Inventaris',
      deskripsi: 'Sistem untuk mengelola data barang dan persediaan.',
      teknologi: ['React JS', 'CSS'],
      github: 'https://github.com/salwaalya/PW2026_243040081'
    },
    {
      id: 4,
      judul: 'Aplikasi Akademik',
      deskripsi: 'Aplikasi untuk mengelola informasi dan data akademik mahasiswa.',
      teknologi: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/salwaalya/PW2026_243040081'
    }
  ];

  const notifikasiSapaan = () => {
    alert(
      'Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.'
    );
  };

  return (
    <div className="portfolio">

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #FFF7F8;
          font-family: 'Segoe UI', sans-serif;
        }

        .portfolio {
          max-width: 1100px;
          margin: auto;
          padding: 45px 35px;
          color: #6B6375;
        }

        .hero {
          background: linear-gradient(135deg, #FBB3BB, #FCE0E4);
          padding: 55px 25px;
          border-radius: 25px;
          text-align: center;
          margin-bottom: 45px;
          position: relative;
          overflow: hidden;
        }

        .hero-label {
          color: #9B3160;
          font-size: 13px;
          letter-spacing: 3px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .hero h1 {
          font-size: clamp(32px, 5vw, 52px);
          color: #7D294F;
          font-weight: 800;
          margin: 15px 0 10px;
          letter-spacing: -1.5px;
        }

        .hero p {
          color: #8D4765;
          font-size: 16px;
        }

        .section {
          margin-bottom: 48px;
        }

        .section-heading {
          margin-bottom: 22px;
          border-bottom: 2px solid #F3CCD5;
          padding-bottom: 12px;
        }

        .section-heading h2 {
          color: #9B3160;
          font-size: 25px;
          margin: 0;
          font-weight: 700;
        }

        .section-heading p {
          font-size: 13px;
          color: #A18B98;
          margin-top: 5px;
        }

        /* PROFILE */

        .profile-layout {
          background: #FFFFFF;
          border: 1px solid #F2D7DF;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 8px 25px rgba(155,49,96,0.07);
        }

        .profile-card > div {
          max-width: none !important;
          margin: 0 !important;
          border: none !important;
          box-shadow: none !important;
          padding: 5px !important;
          background: transparent !important;
        }

        .profile-card h3 {
          color: #9B3160 !important;
        }

        .profile-card img {
          border: 4px solid #FBB3BB;
        }

        .profile-card p {
          color: #776776 !important;
        }

        .profile-card span {
          background: #FCE0E4 !important;
          color: #9B3160 !important;
        }

        .skill-area {
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid #F3DDE3;
        }

        .skill-area h3 {
          color: #9B3160;
          font-size: 17px;
          margin: 0 0 14px;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-list span {
          margin: 0 !important;
          padding: 9px 16px !important;
          border-radius: 30px !important;
          background: #FCE0E4 !important;
          color: #9B3160 !important;
          font-size: 13px !important;
        }

        /* SUBJECT */

        .subject-list {
          display: grid;
          gap: 14px;
        }

        .subject-list > div {
          background: #FFFFFF !important;
          border: 1px solid #F2D7DF !important;
          border-left: 5px solid #D46C8C !important;
          border-radius: 13px !important;
          padding: 20px 22px !important;
          margin: 0 !important;
          box-shadow: 0 4px 12px rgba(155,49,96,0.05);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .subject-list > div:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(155,49,96,0.12);
        }

        .subject-list > div > div span {
          color: #9B3160 !important;
        }

        .subject-list > div > span {
          background: #FCE0E4 !important;
          color: #9B3160 !important;
          font-weight: bold;
        }

        /* PROJECT */

        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .project-grid > div {
          background: #FFFFFF !important;
          border: 1px solid #F2D7DF !important;
          border-radius: 18px !important;
          padding: 25px !important;
          margin: 0 !important;
          box-shadow: 0 6px 20px rgba(155,49,96,0.07) !important;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .project-grid > div:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(155,49,96,0.13) !important;
        }

        .project-grid h3 {
          color: #9B3160 !important;
          font-size: 21px;
        }

        .project-grid p {
          color: #776776 !important;
        }

        .project-grid a {
          background: #9B3160 !important;
          border-radius: 25px !important;
          transition: background 0.2s;
        }

        .project-grid a:hover {
          background: #D46C8C !important;
        }

        .project-grid span {
          background: #FCE0E4 !important;
          color: #9B3160 !important;
        }

        /* BUTTON */

        .button-area {
          text-align: center;
          margin: 45px 0 25px;
        }

        .main-button {
          background: #9B3160;
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          font-size: 15px;
          font-weight: bold;
          box-shadow: 0 6px 15px rgba(155,49,96,0.2);
          transition: all 0.2s;
        }

        .main-button:hover {
          background: #D46C8C;
          transform: translateY(-3px);
        }

        .footer {
          text-align: center;
          border-top: 1px solid #F2D7DF;
          padding-top: 20px;
          color: #A18B98;
          font-size: 13px;
        }

        @media (max-width: 650px) {
          .portfolio {
            padding: 25px 16px;
          }

          .hero {
            padding: 40px 18px;
          }

          .project-grid {
            grid-template-columns: 1fr;
          }

          .section-heading h2 {
            font-size: 21px;
          }

          .subject-list > div {
            gap: 10px;
            align-items: flex-start !important;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="hero">
        <div className="hero-label">
          ✦ Informatics Student Portfolio ✦
        </div>

        <h1>Praktikum Pemrograman Web</h1>

        <p>
          Laboratorium Informatika · Modul 1
          <br />
          Pengenalan React JS & Vite
        </p>
      </header>

      {/* PROFILE */}
      <section className="section">
        <div className="section-heading">
          <h2>Profil Mahasiswa Praktikan</h2>
          <p>Kenali lebih dekat identitas dan keahlian saya.</p>
        </div>

        <div className="profile-layout">
          <div className="profile-card">
            <KartuProfil
              nama="Mahasiswa Informatika"
              npm="233040081"
              kelas="IF - Praktikum"
              status="Aktif"
              fotoUrl="https://via.placeholder.com/80"
            />
          </div>

          <div className="skill-area">
            <h3>Keahlian Mahasiswa ✦</h3>

            <div className="skill-list">
              <BadgeSkill namaSkill="HTML" level="Pemula" />
              <BadgeSkill namaSkill="CSS" level="Menengah" />
              <BadgeSkill namaSkill="JavaScript" level="Mahir" />
            </div>
          </div>
        </div>
      </section>

      {/* MATA KULIAH */}
      <section className="section">
        <div className="section-heading">
          <h2>Rencana Praktikum Semester</h2>
          <p>Daftar mata kuliah praktikum yang sedang dipelajari.</p>
        </div>

        <div className="subject-list">
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul
              key={matkul.id}
              kode={matkul.kode}
              nama={matkul.nama}
              sks={matkul.sks}
              hari={matkul.hari}
            />
          ))}
        </div>
      </section>

      {/* PORTOFOLIO */}
      <section className="section">
        <div className="section-heading">
          <h2>Showcase Portofolio Mini</h2>
          <p>Beberapa proyek sebagai hasil pembelajaran.</p>
        </div>

        <div className="project-grid">
          {daftarProyek.map((proyek) => (
            <KartuProyek
              key={proyek.id}
              judul={proyek.judul}
              deskripsi={proyek.deskripsi}
              teknologi={proyek.teknologi}
              github={proyek.github}
            />
          ))}
        </div>
      </section>

      {/* TOMBOL INTERAKTIF */}
      <div className="button-area">
        <button
          className="main-button"
          onClick={notifikasiSapaan}
        >
          ✨ Uji Interaktivitas Event
        </button>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>Made with ♡ · Praktikum Pemrograman Web · Modul 1</p>
      </footer>

    </div>
  );
}

export default App;
