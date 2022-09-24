import React from "react";
import {NavBar} from "../../component/menyuComponent/NavBar";

export const Menyu = () => {
    return (

        <div className="super_container">
            <div className="home">

                <div className="hero_slider_container">
                    <div className="hero_slider owl-carousel">

                        <div className="hero_slide">
                            <div className="hero_slide_background"
                                 style={{backgroundImage: 'url("./assets/images/slider_background.jpg")'}}/>
                            <div
                                className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                                <div className="hero_slide_content text-center">
                                    <h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut">Get
                                        your <span>Education</span>
                                        today!</h1>
                                </div>
                            </div>
                        </div>

                        <div className="hero_slide">
                            <div className="hero_slide_background"
                                 style={{backgroundImage: 'url("./assets/images/slider_background.jpg")'}}/>
                            <div
                                className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                                <div className="hero_slide_content text-center">
                                    <h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut">Get
                                        your <span>Education</span>
                                        today!</h1>
                                </div>
                            </div>
                        </div>

                        <div className="hero_slide">
                            <div className="hero_slide_background"
                                 style={{backgroundImage: "url('./assets/images/slider_background.jpg')"}}/>
                            <div
                                className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                                <div className="hero_slide_content text-center">
                                    <h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut">Get
                                        your <span>Education</span>
                                        today!</h1>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="hero_slider_left hero_slider_nav trans_200"><span className="trans_200">prev</span>
                    </div>
                    <div className="hero_slider_right hero_slider_nav trans_200"><span className="trans_200">next</span>
                    </div>
                </div>

            </div>

            <div className="hero_boxes">
                <div className="hero_boxes_inner">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 hero_box_col">
                                <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                                    <img src="./assets/images/earth-globe.svg" className="svg" alt=""/>
                                    <div className="hero_box_content">
                                        <h2 className="hero_box_title">Online Courses</h2>
                                        <a href="#" className="hero_box_link">view more</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 hero_box_col">
                                <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                                    <img src="./assets/images/books.svg" className="svg" alt=""/>
                                    <div className="hero_box_content">
                                        <h2 className="hero_box_title">Our Library</h2>
                                        <a href="#" className="hero_box_link">view more</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 hero_box_col">
                                <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                                    <img src="./assets/images/professor.svg" className="svg" alt=""/>
                                    <div className="hero_box_content">
                                        <h2 className="hero_box_title">Our Teachers</h2>
                                        <a href="#" className="hero_box_link">view more</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="popular page_section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section_title text-center">
                                <h1>Popular Courses</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row course_boxes">

                        <div className="col-lg-4 course_box">
                            <div className="card">
                                <img className="card-img-top" src="./assets/images/course_1.jpg"
                                     alt="https://unsplash.com/@kellybrito"/>
                                <div className="card-body text-center">
                                    <div className="card-title"><a href="#">A complete guide to
                                        design</a></div>
                                    <div className="card-text">Adobe Guide, Layes, Smart Objects etc...</div>
                                </div>
                                <div className="price_box d-flex flex-row align-items-center">
                                    <div className="course_author_image">
                                        <img src="./assets/images/author.jpg" alt="https://unsplash.com/@mehdizadeh"/>
                                    </div>
                                    <div className="course_author_name">Michael Smith, <span>Author</span></div>
                                    <div
                                        className="course_price d-flex flex-column align-items-center justify-content-center">
                                        <span>$29</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 course_box">
                            <div className="card">
                                <img className="card-img-top" src="./assets/images/course_2.jpg"
                                     alt="https://unsplash.com/@cikstefan"/>
                                <div className="card-body text-center">
                                    <div className="card-title"><a href="#">Beginners guide to HTML</a>
                                    </div>
                                    <div className="card-text">Adobe Guide, Layes, Smart Objects etc...</div>
                                </div>
                                <div className="price_box d-flex flex-row align-items-center">
                                    <div className="course_author_image">
                                        <img src="./assets/images/author.jpg" alt="https://unsplash.com/@mehdizadeh"/>
                                    </div>
                                    <div className="course_author_name">Michael Smith, <span>Author</span></div>
                                    <div
                                        className="course_price d-flex flex-column align-items-center justify-content-center">
                                        <span>$29</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 course_box">
                            <div className="card">
                                <img className="card-img-top" src="./assets/images/course_3.jpg"
                                     alt="https://unsplash.com/@dsmacinnes"/>
                                <div className="card-body text-center">
                                    <div className="card-title"><a href="#">Advanced Photoshop</a></div>
                                    <div className="card-text">Adobe Guide, Layes, Smart Objects etc...</div>
                                </div>
                                <div className="price_box d-flex flex-row align-items-center">
                                    <div className="course_author_image">
                                        <img src="./assets/images/author.jpg" alt="https://unsplash.com/@mehdizadeh"/>
                                    </div>
                                    <div className="course_author_name">Michael Smith, <span>Author</span></div>
                                    <div
                                        className="course_price d-flex flex-column align-items-center justify-content-center">
                                        <span>$29</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="register">

                <div className="container-fluid">

                    <div className="row row-eq-height">
                        <div className="col-lg-6 nopadding">


                            <div
                                className="register_section d-flex flex-column align-items-center justify-content-center">
                                <div className="register_content text-center">
                                    <h1 className="register_title">Register now and get a
                                        discount <span>50%</span> discount until 1
                                        January</h1>
                                    <p className="register_text">In aliquam, augue a gravida rutrum, ante nisl fermentum
                                        nulla,
                                        vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
                                        fermentum.
                                        Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                                    <div className="button button_1 register_button mx-auto trans_200"><a href="#">register
                                        now</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 nopadding">


                            <div
                                className="search_section d-flex flex-column align-items-center justify-content-center">
                                <div className="search_background"
                                     style={{backgroundImage: 'url("./assets/images/search_background.jpg")'}}/>
                                <div className="search_content text-center">
                                    <h1 className="search_title">Search for your course</h1>
                                    <form id="search_form" className="search_form">
                                        <input id="search_form_name" className="input_field search_form_name"
                                               type="text"
                                               placeholder="Course Name" required="required"
                                               data-error="Course name is required."/>
                                        <input id="search_form_category"
                                               className="input_field search_form_category" type="text"
                                               placeholder="Category"/>
                                        <input id="search_form_degree"
                                               className="input_field search_form_degree" type="text"
                                               placeholder="Degree"/>
                                        <button id="search_submit_button" type="submit"
                                                className="search_submit_button trans_200"
                                                value="Submit">search course
                                        </button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="services page_section">

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section_title text-center">
                                <h1>Our Services</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row services_row">

                        <div
                            className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
                            <div className="icon_container d-flex flex-column justify-content-end">
                                <img src="./assets/images/earth-globe.svg" alt=""/>
                            </div>
                            <h3>Online Courses</h3>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula
                                vel nunc.
                                Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>

                        <div
                            className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
                            <div className="icon_container d-flex flex-column justify-content-end">
                                <img src="./assets/images/exam.svg" alt=""/>
                            </div>
                            <h3>Indoor Courses</h3>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula
                                vel nunc.
                                Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>

                        <div
                            className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
                            <div className="icon_container d-flex flex-column justify-content-end">
                                <img src="./assets/images/books.svg" alt=""/>
                            </div>
                            <h3>Amazing Library</h3>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula
                                vel nunc.
                                Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>

                        <div
                            className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
                            <div className="icon_container d-flex flex-column justify-content-end">
                                <img src="./assets/images/professor.svg" alt=""/>
                            </div>
                            <h3>Exceptional Professors</h3>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula
                                vel nunc.
                                Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>

                        <div
                            className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
                            <div className="icon_container d-flex flex-column justify-content-end">
                                <img src="./assets/images/blackboard.svg" alt=""/>
                            </div>
                            <h3>Top Programs</h3>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula
                                vel nunc.
                                Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>

                        <div
                            className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
                            <div className="icon_container d-flex flex-column justify-content-end">
                                <img src="./assets/images/mortarboard.svg" alt=""/>
                            </div>
                            <h3>Graduate Diploma</h3>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula
                                vel nunc.
                                Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="testimonials page_section">
                <div className="testimonials_background_container prlx_parent">
                    <div className="testimonials_background prlx"
                         style={{backgroundImage: "url('./assets/images/testimonials_background.jpg')"}}/>
                </div>
                <div className="container">

                    <div className="row">
                        <div className="col">
                            <div className="section_title text-center">
                                <h1>What our students say</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">

                            <div className="testimonials_slider_container">

                                <div className="owl-carousel owl-theme testimonials_slider">

                                    <div className="owl-item">
                                        <div className="testimonials_item text-center">
                                            <div className="quote">“</div>
                                            <p className="testimonials_text">In aliquam, augue a gravida rutrum, ante
                                                nisl fermentum
                                                nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                                                finibus
                                                tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum
                                                nulla,
                                                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus
                                                tortor
                                                fermentum.</p>
                                            <div className="testimonial_user">
                                                <div className="testimonial_image mx-auto">
                                                    <img src="./assets/images/testimonials_user.jpg" alt=""/>
                                                </div>
                                                <div className="testimonial_name">james cooper</div>
                                                <div className="testimonial_title">Graduate Student</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="owl-item">
                                        <div className="testimonials_item text-center">
                                            <div className="quote">“</div>
                                            <p className="testimonials_text">In aliquam, augue a gravida rutrum, ante
                                                nisl fermentum
                                                nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                                                finibus
                                                tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum
                                                nulla,
                                                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus
                                                tortor
                                                fermentum.</p>
                                            <div className="testimonial_user">
                                                <div className="testimonial_image mx-auto">
                                                    <img src="./assets/images/testimonials_user.jpg" alt=""/>
                                                </div>
                                                <div className="testimonial_name">james cooper</div>
                                                <div className="testimonial_title">Graduate Student</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="owl-item">
                                        <div className="testimonials_item text-center">
                                            <div className="quote">“</div>
                                            <p className="testimonials_text">In aliquam, augue a gravida rutrum, ante
                                                nisl fermentum
                                                nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                                                finibus
                                                tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum
                                                nulla,
                                                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus
                                                tortor
                                                fermentum.</p>
                                            <div className="testimonial_user">
                                                <div className="testimonial_image mx-auto">
                                                    <img src="./assets/images/testimonials_user.jpg" alt=""/>
                                                </div>
                                                <div className="testimonial_name">james cooper</div>
                                                <div className="testimonial_title">Graduate Student</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="events page_section">
                <div className="container">

                    <div className="row">
                        <div className="col">
                            <div className="section_title text-center">
                                <h1>Upcoming Events</h1>
                            </div>
                        </div>
                    </div>

                    <div className="event_items">

                        <div className="row event_item">
                            <div className="col">
                                <div className="row d-flex flex-row align-items-end">

                                    <div className="col-lg-2 order-lg-1 order-2">
                                        <div
                                            className="event_date d-flex flex-column align-items-center justify-content-center">
                                            <div className="event_day">07</div>
                                            <div className="event_month">January</div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 order-lg-2 order-3">
                                        <div className="event_content">
                                            <div className="event_name"><a className="trans_200" href="#">Student
                                                Festival</a></div>
                                            <div className="event_location">Grand Central Park</div>
                                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                                                tempor nisl
                                                ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 order-lg-3 order-1">
                                        <div className="event_image">
                                            <img src="./assets/images/event_1.jpg"
                                                 alt="https://unsplash.com/@theunsteady5"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row event_item">
                            <div className="col">
                                <div className="row d-flex flex-row align-items-end">

                                    <div className="col-lg-2 order-lg-1 order-2">
                                        <div
                                            className="event_date d-flex flex-column align-items-center justify-content-center">
                                            <div className="event_day">07</div>
                                            <div className="event_month">January</div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 order-lg-2 order-3">
                                        <div className="event_content">
                                            <div className="event_name"><a className="trans_200" href="#">Open day in
                                                the Univesrsity
                                                campus</a></div>
                                            <div className="event_location">Grand Central Park</div>
                                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                                                tempor nisl
                                                ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 order-lg-3 order-1">
                                        <div className="event_image">
                                            <img src="./assets/images/event_2.jpg"
                                                 alt="https://unsplash.com/@claybanks1989"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row event_item">
                            <div className="col">
                                <div className="row d-flex flex-row align-items-end">

                                    <div className="col-lg-2 order-lg-1 order-2">
                                        <div
                                            className="event_date d-flex flex-column align-items-center justify-content-center">
                                            <div className="event_day">07</div>
                                            <div className="event_month">January</div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 order-lg-2 order-3">
                                        <div className="event_content">
                                            <div className="event_name"><a className="trans_200" href="#">Student
                                                Graduation
                                                Ceremony</a></div>
                                            <div className="event_location">Grand Central Park</div>
                                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                                                tempor nisl
                                                ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 order-lg-3 order-1">
                                        <div className="event_image">
                                            <img src="./assets/images/event_3.jpg"
                                                 alt="https://unsplash.com/@juanmramosjr"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}