import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import s from './Header.module.scss';


import arrow from '../../images/header/arrow.svg';



const Header = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { pathname } = useLocation();
  const isRender = pathname === '/login' || pathname === '/registration';
  const isPathcalculate = pathname === '/calculator-calories';
  const isUserLogin = useSelector(state=>state.auth.isLogin);

  if (!isUserLogin) {
    if (isDesctop && isRender) {
      return (
        <header className={s.header}>
        
        </header>
      );
    }

    return (
      <header className={s.header}>
        
        <div className={s.wrap}>
          
        </div>
      </header>
    );
  }

  if (isUserLogin) {
    if (isMobile) {
      return (
        <header className={s.headerIsLogin}>
          <div className={s.headerNav}>
            
          </div>
          <div className={s.userInfo}>
           
            {!isPathcalculate && (
              <Link to="/calculator-calories">
                <img src={arrow} alt="arrow" />
              </Link>
            )}
          </div>
        </header>
      );
    }

    if (isTablet) {
      return (
        <>
          <header className={s.headerIsLogin}>
            <div className={s.headerNav}>
             

              <div className={s.userInfoTablet}>
                
              </div>
            </div>
          </header>
        </>
      );
    }

    if (isDesctop) {
      return (
        <>
          <header className={s.headerIsLogin}>
            <div className={s.headerNavDesc}>
              <div className={s.logoNavWrap}>
                
              </div>

              <div className={s.userInfoDesct}>
              
              </div>
            </div>
          </header>
        </>
      );
    }
  }
};

export default Header;
