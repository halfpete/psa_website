import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
import website_name from './images/websitename2.png';
import book1 from './images/book/Book master.png';
import book2 from './images/book/Book master2.png';
import book3 from './images/book/Book master3.png';
import book4 from './images/book/Book master4.png';
import book5 from './images/book/Book master5.png';
import book6 from './images/book/Book master6.png';
import book7 from './images/book/Book master7.png';
import book8 from './images/book/Book master8.png';
import book9 from './images/book/Book master9.png';
import book10 from './images/book/Book master10.png';
import book11 from './images/book/Book master11.png';
import book12 from './images/book/Book master12.png';
import book13 from './images/book/Book master13.png';
import book14 from './images/book/Book master14.png';
import book15 from './images/book/Book master15.png';
import book16 from './images/book/Book master16.png';
import book17 from './images/book/Book master17.png';
import book18 from './images/book/Book master18.png';
import book19 from './images/book/Book master19.png';
import book20 from './images/book/Book master20.png';
import book21 from './images/book/Book master21.png';
import book22 from './images/book/Book master22.png';
import book23 from './images/book/Book master23.png';
import book24 from './images/book/Book master24.png';
import book25 from './images/book/Book master25.png';
import book26 from './images/book/Book master26.png';
import book27 from './images/book/Book master27.png';
import book28 from './images/book/Book master28.png';
import book29 from './images/book/Book master29.png';
import book30 from './images/book/Book master30.png';
import book31 from './images/book/Book master31.png';
import book32 from './images/book/Book master32.png';
import book33 from './images/book/Book master33.png';
import book34 from './images/book/Book master34.png';
import book35 from './images/book/Book master35.png';
import book36 from './images/book/Book master36.png';
import book37 from './images/book/Book master37.png';
import './App.css';

class CollectionBook extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img src={website_name} id="name_header" alt="title" />
        </Link>
        <div className="page_links">
          <Link to="/about" id="first_sub_header">
            About
          </Link>
          <Link to="/contact" id="second_sub_header">
            Contact
          </Link>
        </div>
        <div className="row" id="book_padding">
          <div className="column">
            <img src={book1} id="book_image" alt="book1" />
            <img src={book2} id="book_image" alt="book2" />
            <img src={book3} id="book_image" alt="book3" />
            <img src={book4} id="book_image" alt="book4" />
            <img src={book5} id="book_image" alt="book5" />
            <img src={book6} id="book_image" alt="book6" />
            <img src={book7} id="book_image" alt="book7" />
            <img src={book8} id="book_image" alt="book8" />
            <img src={book9} id="book_image" alt="book9" />
            <img src={book10} id="book_image" alt="book10" />
            <img src={book11} id="book_image" alt="book11" />
            <img src={book12} id="book_image" alt="book12" />
            <img src={book13} id="book_image" alt="book13" />
            <img src={book14} id="book_image" alt="book14" />
            <img src={book15} id="book_image" alt="book15" />
            <img src={book16} id="book_image" alt="book16" />
            <img src={book17} id="book_image" alt="book17" />
            <img src={book18} id="book_image" alt="book18" />
            <img src={book19} id="book_image" alt="book19" />
            <img src={book20} id="book_image" alt="book20" />
            <img src={book21} id="book_image" alt="book21" />
            <img src={book22} id="book_image" alt="book22" />
            <img src={book23} id="book_image" alt="book23" />
            <img src={book24} id="book_image" alt="book24" />
            <img src={book25} id="book_image" alt="book25" />
            <img src={book26} id="book_image" alt="book26" />
            <img src={book27} id="book_image" alt="book27" />
            <img src={book28} id="book_image" alt="book28" />
            <img src={book29} id="book_image" alt="book29" />
            <img src={book30} id="book_image" alt="book30" />
            <img src={book31} id="book_image" alt="book31" />
            <img src={book32} id="book_image" alt="book32" />
            <img src={book33} id="book_image" alt="book33" />
            <img src={book34} id="book_image" alt="book34" />
            <img src={book35} id="book_image" alt="book35" />
            <img src={book36} id="book_image" alt="book36" />
            <img src={book37} id="book_image" alt="book37" />
          </div>
        </div>
      </div>
    );
  }
}

export default CollectionBook;
