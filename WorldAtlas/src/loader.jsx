import React from 'react';
import { PulseLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div style={styles.wrapper} className='w-screen'>
      <PulseLoader size={35} color="#8B5CF6" speedMultiplier={1} />
      <h3 style={styles.text}>Loading data Please Wait..</h3>
      <h3 style={styles.text}></h3>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '4rem',
  },
  text: {
    marginBottom: '100rem',
    fontWeight: 800,
    color: '#1967c7ff',
  },
};

export default Loader;
