import React from 'react';
import { Button } from './Button';
import './results.css';
import { GiInternalInjury } from 'react-icons/gi';
import { GiRingingBell } from 'react-icons/gi';

import { GiLadder } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Results() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Accidents</h1>
          <div className='pricing__container'>
            <Link to='/precaution' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiInternalInjury />
                </div>
                <h3>2020</h3>
                <h4>7417</h4>
                <p>total per year</p>
                <ul className='pricing__container-features'>
                  <li>1,715 Health and Social Work</li>
                  <li>1,255 Manufacturing</li>
                  <li>971 Wholesale and Retail</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                Precautions                 </Button>
              </div>
            </Link>
            <Link to='/precaution' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiInternalInjury />
                </div>
                <h3>Past 2 Years</h3>
                <h4>16,752</h4>
                <p>in total</p>
                <ul className='pricing__container-features'>
                  <li>3,619 Health and Social Work</li>
                  <li>3,179 Manufacturing</li>
                  <li>2106 Wholesale and Retail</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                Precautions               </Button>
              </div>
            </Link>
            <Link to='/precaution' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiInternalInjury />
                </div>
                <h3>2019</h3>
                <h4>9335</h4>
                <p>total per year</p>
                <ul className='pricing__container-features'>
                  <li>1,904 Health and Social Work</li>
                  <li>1,464 Manufacturing</li>
                  <li>1,135 Wholesale and Retail</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                Precautions              
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Results;