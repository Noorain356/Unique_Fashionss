import './App.css';
import { useEffect, useState } from 'react';
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';

const heroSlides = [
  {
    image: '/hero.JPEJ.jpeg',
    title: 'Crafted for Your Unique Fit.',
    subtitle: 'Tradition, craftsmanship, and excellence woven into every silhouette.',
    buttonText: 'DISCOVER THE COLLECTION',
  },
  {
    image: '/hero.JPEJ1.jpeg',
    title: 'Timeless Style, Made Personal.',
    subtitle: 'Discover distinctive pieces designed to move with your story.',
    buttonText: 'EXPLORE THE EDIT',
  },
  {
    image: '/hero.JPEJ2.jpeg',
    title: 'Details That Set You Apart.',
    subtitle: 'Refined craftsmanship brings every look to life.',
    buttonText: 'SHOP NEW ARRIVALS',
  },
  {
    image: '/hero.JPEJ3.jpeg',
    title: 'Your Signature Silhouette.',
    subtitle: 'Find beautifully crafted fashion for every occasion.',
    buttonText: 'FIND YOUR STYLE',
  },
];

function App({ clerkEnabled }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((currentIndex) => (currentIndex + 1) % heroSlides.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="app-container">
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        {/* COMPLIMENTARY SHIPPING ON PREPAID ORDERS • EASY RETURNS WITHIN 7 DAYS */}
      </div>

      {/* Main Sticky Header */}
      <header className="main-header">
      
        
        <div className="logo-container">
          <img src="unique-fashions-logo-transparent.png" alt="Unique Fashionss" className="logo-icon" />
          <span className="brand-name">UNIQUE FASHIONSS</span>
        </div>

        <nav className="header-actions" aria-label="Header actions">
          <button
            type="button"
            className="header-action"
            aria-label="Search"
            onClick={() => setIsSearchOpen(true)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.5 4.5" />
            </svg>
          </button>
          {clerkEnabled ? (
            <>
              <ClerkLoading>
                <button type="button" className="header-action" aria-label="Account loading" disabled>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="8" r="3.5" />
                    <path d="M5.5 20c.7-3.2 3-5 6.5-5s5.8 1.8 6.5 5" />
                  </svg>
                </button>
              </ClerkLoading>
              <ClerkLoaded>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button type="button" className="header-action" aria-label="Sign in">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="8" r="3.5" />
                        <path d="M5.5 20c.7-3.2 3-5 6.5-5s5.8 1.8 6.5 5" />
                      </svg>
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: 'account-user-button',
                      },
                    }}
                    aria-label="Account"
                  />
                </SignedIn>
              </ClerkLoaded>
            </>
          ) : (
            <button type="button" className="header-action" aria-label="Account unavailable" disabled>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5.5 20c.7-3.2 3-5 6.5-5s5.8 1.8 6.5 5" />
              </svg>
            </button>
          )}
          <button type="button" className="header-action" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 8.8c0 5-8.8 10-8.8 10s-8.8-5-8.8-10A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.5Z" />
            </svg>
          </button>
          <button type="button" className="header-action bag-action" aria-label="Shopping bag">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 8.5h14l-1 12H6l-1-12Z" />
              <path d="M9 8.5V6a3 3 0 0 1 6 0v2.5" />
            </svg>
            <span className="bag-badge">0</span>
          </button>
        </nav>
       
      </header>

      {/* Hero Banner Section */}
      <section className="hero-section">
        <div className="hero-slider" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.image}
              className={`hero-slide ${index === currentSlide ? 'active' : ''} ${index === 0 ? 'hanger-slide' : ''} ${index === 1 ? 'model-slide-1' : ''}`}
              style={{ backgroundImage: `url("${slide.image}")` }}
            />
          ))}
        </div>
        <div className={`hero-content ${currentSlide === 0 ? 'center-layout' : 'left-layout'} ${currentSlide === 1 ? 'model-layout-1' : ''} ${currentSlide === 2 ? 'model-layout-2' : ''} ${currentSlide === 3 ? 'model-layout-3' : ''}`} key={currentSlide}>
          <h1 className="hero-tagline">{heroSlides[currentSlide].title}</h1>
          <p className="hero-subtitle">
            {currentSlide === 2 ? (
              <>
                Refined craftsmanship brings<br />
                every look to life.
              </>
            ) : (
              heroSlides[currentSlide].subtitle
            )}
          </p>
          <button type="button" className="cta-button">{heroSlides[currentSlide].buttonText}</button>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="category-section">
        <h2 className="section-title">Shop The Collections</h2>
        <div className="category-grid">
          
          <div className="category-card">
            <div className="category-image-placeholder">
              <img src="/image.png1.jpeg" alt="Readymade embroidery suits" />
            </div>
            <h3>Readymade Embroidery Suits </h3>
          </div>
          
          <div className="category-card">
            <div className="category-image-placeholder">
              <img src="/image.png2.jpeg" alt="Unstitched embroidery suits" />
            </div>
            <h3>Unstitched Embroidery Suits</h3>
          </div>
          
          <div className="category-card">
            <div className="category-image-placeholder">
              <img src="/image.png3.jpeg" alt="Readymade printed suits" />
            </div>
            <h3>Readymade Printed Suits</h3>
          </div>

          <div className="category-card">
            <div className="category-image-placeholder">
              <img src="/image.png4.jpeg" alt="Unstitched printed suits" />
            </div>
            <h3>Unstitched Printed Suits</h3>
          </div>

        </div>
      </section>

      {isSearchOpen && (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-labelledby="search-title">
          <div className="search-panel">
            <button
              type="button"
              className="search-close"
              aria-label="Close search"
              onClick={() => setIsSearchOpen(false)}
            >
              <span aria-hidden="true">&#10005;</span>
            </button>
            <p className="search-eyebrow">UNIQUE FASHIONSS</p>
            <h2 id="search-title">What are you looking for?</h2>
            <form className="search-form" onSubmit={(event) => event.preventDefault()}>
              <input type="search" placeholder="Search the collection" aria-label="Search the collection" autoFocus />
              <button type="submit" className="search-submit">Search</button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="site-footer">
        
        <nav className="footer-navigation" aria-label="Footer Navigation">
          <a
            href="#search"
            onClick={(event) => {
              event.preventDefault();
              setIsSearchOpen(true);
            }}
          >
            Search
          </a>
          <a href="#size-chart">Size Chart</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#returns-exchange-policy">Returns/Exchange Policy</a>
          <a href="#shipping-policy">Shipping Policy</a>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms-and-conditions">Terms and Conditions</a>
          <a href="#terms-of-service">Terms of Service</a>
          <a href="#about-us">About Us</a>
          <a href="#refund-policy">Refund policy</a>
        </nav>
        <div className="footer-contact-info">
          <p className="follow-title">Follow us @</p>
          <div className="footer-social-columns">
            <p className="social-item">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
              <span>@uniquefashions777</span>
            </p>
            <p className="social-item">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M13.5 21v-8h2.75l.5-3h-3.25V8.05c0-.87.24-1.55 1.6-1.55h1.7V3.82A22.2 22.2 0 0 0 14.35 3C11.88 3 10.2 4.5 10.2 7.25V10H7.5v3h2.7v8h3.3Z" />
              </svg>
              <span>@Unique Fashionss</span>
            </p>
            <p className="social-item">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.58A3 3 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3 3 0 0 0 2.12 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.58a3 3 0 0 0 2.12-2.12C24 15.92 24 12 24 12s0-3.92-.5-5.8ZM9.6 15.58V8.42L15.82 12 9.6 15.58Z" />
              </svg>
              <span>@Unique Fashionss</span>
            </p>
          </div>
          <p className="contact-phone">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
            </svg>
            <span>Phone: 8779322723</span>
          </p>
          <div className="contact-address">
            <p>
              <svg className="contact-address-icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
              <span>Address: Fatmabai Building, Ground floor,</span>
            </p>
            <p>266, 278, Shop No. 4, Sardar Vallabhbhai Patel Rd, Dongri,</p>
            <p>Mumbai, Maharashtra 400009</p>
          </div>
        </div>
        <div className="footer-bottom-text">
          <p>TRADITION • CRAFTSMANSHIP • EXCELLENCE</p>
          <p>© 2026 UNIQUE FASHIONSS</p>
          <p>A Brand You Can Rely On.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;