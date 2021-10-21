import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <section className='section'>
        <div className='container'>
          <header className='header'>
            <div className='logo-container'>
              <h2>Food Recepie</h2>
            </div>
            <nav className='navbar'>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/searchname'>Search By Name</Link>
                </li>
                <li>
                  <Link to='/searchingredients'>Search By Ingredients</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </section>
    </>
  );
};

export default Navigation;
