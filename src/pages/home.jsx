import { Fragment } from "react";
import Header from "../components/header/header";
import HeroSection from "../components/hero-Section/hero-section";
import CompanySection from "../components/company-section/company";

import AboutUs from "../components/about-us/about-us";
import Courses from "../components/courses-section/courses";
import ChooseUs from "../components/choose-us/choose-us";
import Features from "../components/feature-section/features";
import FreeCourse from "../components/free-course-section/free-course";

import Testimonials from "../components/testimonial/testimonials";

import Newsletter from "../components/newsletter/newsletter";
import Footer from "../components/footer/footer";

const Home = () => {
  return (
    <Fragment>
      <Header/>
      <HeroSection/>
      <CompanySection/>
      <AboutUs/>
      <Courses/>
      <ChooseUs/>
      <Features/>
      <FreeCourse/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </Fragment>
  );
};

export default Home;
