import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <nav style={{ width: '100%', padding: '32px 0', backgroundColor: 'gray' }}>
        <button onClick={() => handleClick('en')}>
          English
        </button>
        <button onClick={() => handleClick('ko')}>
          Korean
        </button>
        <button onClick={() => handleClick('chi')}>
          China
        </button>
        <button onClick={() => handleClick('de')}>
          German
        </button>
      </nav>

      <div id="home">
        <div className="container">
          <p>{t('description.part1')}</p>
          <p>{t('title')}</p>

          <p>Hello </p>
        </div>
      </div>
    </>
  );
}





// <div className="header">
    //   <h1>City <span>Tech</span></h1>
    //   <ul>
    //     <li><a href="#">Home</a></li>
    //     <li><a href="#">About</a></li>
    //     <li><a href="#">Services</a></li>
    //     <li><a href="#">Contact</a></li>
    //     <li><a href="#">Company</a></li>
    //   </ul>
    // </div>