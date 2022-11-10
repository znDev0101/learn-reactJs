// library
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// style
import './Home.css';

// pages
import CardProduct from '../pages/CardProduct/CardProduct';
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import UpdatePost from '../pages/UpdatePost/UpdatePost';

class Home extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <header>
            <nav>
              ZNMART
              <ul>
                <li>
                  <Link to="/">Blog Post</Link>
                </li>
                <li>
                  <Link to="/cardproduct">Product</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<BlogPost />} />
            <Route path="/detail-post/:PostID" element={<DetailPost />} />
            <Route path="/cardproduct" element={<CardProduct />} />
            <Route path="/update-post/:PostID" element={<UpdatePost />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Fragment>
      </Router>
    );
  }
}

export default Home;
