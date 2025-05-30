import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 1000;
  font-size: 1.5rem;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(108, 99, 255, 0.2);
  }
`;

const App = () => {
  useEffect(() => {
    let lastScroll = 0;
    const nav = document.querySelector('nav');
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollToTop = document.querySelector('.scroll-to-top');

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      // Handle navigation visibility with smooth transition
      if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
      lastScroll = currentScroll;

      // Update scroll progress with smooth animation
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
      scrollProgress.style.transition = 'transform 0.2s ease';

      // Show/hide scroll to top button with smooth fade
      if (currentScroll > 500) {
        scrollToTop.classList.add('visible');
      } else {
        scrollToTop.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AppContainer>
      <ScrollProgress className="scroll-progress" />
      <Navigation>
        <NavList>
          <NavItem>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              activeClass="active"
            >
              Trang Chủ
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="thoughts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              activeClass="active"
            >
              Tư Tưởng
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="timeline"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              activeClass="active"
            >
              Dòng Thời Gian
            </Link>
          </NavItem>
        </NavList>
      </Navigation>

      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="thoughts">
          <Thoughts />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
      </main>

      <ScrollToTop
        className="scroll-to-top"
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </ScrollToTop>
    </AppContainer>
  );
};

export default App; 