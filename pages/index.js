import React from 'react';
import Head from 'next/head';
import InteractiveBackground from '../components/InteractiveBackground';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>My Interactive Background</title>
      </Head>
      <InteractiveBackground />
      <div className="content">
        <p>text</p>
        {/* Your page content goes here */}
      </div>
    </div>
  );
};

export default HomePage;