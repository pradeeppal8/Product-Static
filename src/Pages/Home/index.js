import { useState, useEffect } from "react";
// import CustomLoader from "../../Component/CustomeLoader";
import ScrollButtons from "../../Component/ScrollButtons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  // const [isHovering, setIsHovering] = useState(false);


  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8500);
    return () => clearTimeout(timer);
  }, []);

  // if (loading) return <CustomLoader loading />;
  return (
    <>
      <div className="main-wrapper">
        <div className="homepage">
          {loading ? (
            <Skeleton width={308} height={50} borderRadius={8} baseColor="#ebebeb"
              highlightColor="#f5f5f5" />
          ) : (
            <button className="primary-btn sm mt-0">Reserve a table</button>
          )}
          {loading ? (
            <Skeleton
              width={308}
              height={50}
              borderRadius={8}
              baseColor="#ebebeb"
              highlightColor="#f5f5f5"
            />
          ) : (
            <div className="title">About Us</div>
          )}
          <nav className="navbar">
            <input type="text" placeholder="Search products..." />
            <div>
              <button>Cart</button>
              <button>Login</button>
            </div>
          </nav>
          <div className="date-wrap">
            <DatePicker
              selected={value}
              onChange={setValue}
              placeholderText="Pick a date"
              renderDayContents={(dayOfMonth, date) => (
                <span
                  onMouseEnter={() => setHoverDate(date)}
                  onMouseLeave={() => setHoverDate(null)}
                  title={format(date, "EEE, dd MMM yyyy")}
                >
                  {dayOfMonth}
                </span>
              )}
              shouldCloseOnSelect
            />
            {hoverDate && (
              <div className="hover-chip">
                {format(hoverDate, "EEE, MMM d, yyyy")}
              </div>
            )}
          </div>

          <section className="hero">
            <img
              src="https://via.placeholder.com/400x200?text=Running+Shoes"
              alt="Running Shoes"
            />
            <img
              src="https://via.placeholder.com/400x200?text=Mountain+Cycle"
              alt="Mountain Cycle"
            />
          </section>

          <section className="features">
            <div>Free Shipping</div>
            <div>Easy Returns</div>
            <div>Secure Payment</div>
          </section>

          <section className="categories">
            <h2>Featured Categories</h2>
            <div className="items">
              <div>
                <img src="https://via.placeholder.com/60" alt="Cycle" />
              </div>
              <div>
                <img src="https://via.placeholder.com/60" alt="Luggage" />
              </div>
              <div>
                <img src="https://via.placeholder.com/60" alt="Shoes" />
              </div>
              <div>
                <img src="https://via.placeholder.com/60" alt="Camping" />
              </div>
              <div>
                <img src="https://via.placeholder.com/60" alt="Fitness" />
              </div>
            </div>
          </section>

          <section className="sale-banner">
            <img
              src="https://via.placeholder.com/300x150?text=70%25+Off+Offer"
              alt="Sale"
            />
          </section>

          <section className="products">
            <div className="product">
              <img src="https://via.placeholder.com/100" alt="Shoe" />
              <h4>Shoe</h4>
              <p>$29.99</p>
            </div>
            <div className="product">
              <img src="https://via.placeholder.com/100" alt="Bag" />
              <h4>Bag</h4>
              <p>$39.99</p>
            </div>
            <div className="product">
              <img src="https://via.placeholder.com/100" alt="Fitness Band" />
              <h4>Fitness Band</h4>
              <p>$49.99</p>
            </div>
          </section>

          <section className="shop-banner">
            <h2>Sports and Fitness Accessories</h2>
            <button>Shop Now</button>
          </section>
        </div>
      </div>
      <ScrollButtons />
    </>
  );
}

export default Home;
