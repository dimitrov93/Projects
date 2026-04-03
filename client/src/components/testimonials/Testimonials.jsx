import React, { useEffect, useState } from "react";
import {AiFillDelete} from 'react-icons/ai'
import "./testimonials.css";
import * as testimonialService from "../../services/testimonialService";
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAuthContext } from "../../context/AuthContext";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const { user } = useAuthContext();

  
  useEffect(() => {
  
    try {
      testimonialService.getAll()
        .then(result => {
          setTestimonials(result)
        })
    } catch (error) {
      console.log(error);
    }
  
  }, [])

  const onDelete = (e,id) => {
    e.preventDefault();

    let confirmation = window.confirm(
      "Are you sure that you want to delete this item?"
    )

    if (confirmation) {
      try {
        testimonialService.remove(id)
          .then(result => {
            window.location.reload(false)
          })
      } catch (error) {
        console.log(error);
      }
    }


  }

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
           // install Swiper modules
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
      >
          {
            testimonials.length > 0 ?
            testimonials.map((x, index) => {
              return (
                <SwiperSlide key={index} className="testimonials">
                  {user.email ? 
                    <button className="delete__btn" onClick={(e) => onDelete(e, x._id)}><AiFillDelete /></button>
                  : 
                    ""
                  }
                <div className="client__avatar">
                  <img src={x.avatar} />
                </div>
                <h5 className="client__name">{x.name}</h5>
                <small className="client__review">
                  {x.review}
                </small>
              </SwiperSlide>
              )
            }) :          <small className="testimonials no__reviews">
                There are no reviews left yet
          </small>
          }
      </Swiper>
      <Link to={'/testimonials/add'}>
      <button className="btn btn-primary btn-swiper">Write a testimonial</button>
      </Link>
    </section>
  );
};

export default Testimonials;
