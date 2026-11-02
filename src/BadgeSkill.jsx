
function BadgeSkill({ namaSkill, level }) {
  const warnaBadge = {
    Pemula: {
      backgroundColor: '#D4EDDA',
      color: '#155724'
    },
    Menengah: {
      backgroundColor: '#FFF3CD',
      color: '#856404'
    },
    Mahir: {
      backgroundColor: '#D1ECF1',
      color: '#0C5460'
    }
  };

  return (
    <span style={{
      display: 'inline-block',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: 'bold',
      margin: '5px',
      ...warnaBadge[level]
    }}>
      {namaSkill} - {level}
    </span>
  );
}

export default BadgeSkill;
