import React from "react"

const Portfolio = () => {
    return (
        <section id="portfolio" className="animated-section">
            <div className="section-content portfolio-bg">
                <div className="page-title">
                    <h2>Portfolio</h2>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        {/* <!-- Portfolio Content --> */}
                        <div className="portfolio-content">

                            <ul className="portfolio-filters">
                                <li className="active">
                                    <a className="filter btn btn-sm btn-link" data-group="category_all">All</a>
                                </li>
                                <li>
                                    <a className="filter btn btn-sm btn-link" data-group="category_rigging">Rigging</a>
                                </li>
                                <li>
                                    <a className="filter btn btn-sm btn-link" data-group="category_scripting">Scripting</a>
                                </li>
                                <li>
                                    <a className="filter btn btn-sm btn-link" data-group="category_modeling">Modeling</a>
                                </li>
                                <li>
                                    <a className="filter btn btn-sm btn-link" data-group="category_vfx">Visual FX</a>
                                </li>
                                <li>
                                    <a className="filter btn btn-sm btn-link" data-group="category_youtube-videos">YouTube Videos</a>
                                </li>
                            </ul>

                            {/* <!-- Portfolio Grid --> */}
                            <div className="portfolio-grid three-columns">



                                <figure className="item standard" data-groups='["category_all", "category_scripting"]'>
                                    <div className="portfolio-item-img">
                                        <img src="img/portfolio/2.jpg" alt="Media Project 2" title="" />
                                        <a href="portfolio-1.html" className="ajax-page-load"></a>
                                    </div>

                                    <i className="far fa-file-alt"></i>
                                    <h4 className="name">Similar Object Script</h4>
                                    <span className="category">Scripting</span>
                                </figure>

                                <figure className="item standard" data-groups='["category_all", "category_rigging"]'>
                                    <div className="portfolio-item-img">
                                        <img src="img/portfolio/2.jpg" alt="Media Project 2" title="" />
                                        <a href="portfolio-1.html" className="ajax-page-load"></a>
                                    </div>

                                    <i className="far fa-file-alt"></i>
                                    <h4 className="name">Basic Human Rig</h4>
                                    <span className="category">Rigging</span>
                                </figure>

                                <figure className="item standard" data-groups='["category_all", "category_modeling"]'>
                                    <div className="portfolio-item-img">
                                        <img src="img/portfolio/2.jpg" alt="Media Project 2" title="" />
                                        <a href="portfolio-1.html" className="ajax-page-load"></a>
                                    </div>

                                    <i className="far fa-file-alt"></i>
                                    <h4 className="name">Warm Environment</h4>
                                    <span className="category">Modeling</span>
                                </figure>

                                <figure className="item standard" data-groups='["category_all", "category_vfx"]'>
                                    <div className="portfolio-item-img">
                                        <img src="img/portfolio/2.jpg" alt="Media Project 2" title="" />
                                        <a href="portfolio-1.html" className="ajax-page-load"></a>
                                    </div>

                                    <i className="far fa-file-alt"></i>
                                    <h4 className="name">Nebula</h4>
                                    <span className="category">Visual FX</span>
                                </figure>

                                <figure className="item standard" data-groups='["category_all", "category_vfx"]'>
                                    <div className="portfolio-item-img">
                                        <img src="img/portfolio/2.jpg" alt="Media Project 2" title="" />
                                        <a href="portfolio-1.html" className="ajax-page-load"></a>
                                    </div>

                                    <i className="far fa-file-alt"></i>
                                    <h4 className="name">Explosion</h4>
                                    <span className="category">Visual FX</span>
                                </figure>


                                <figure className="item standard" data-groups='["category_all", "category_rigging"]'>
                                    <div className="portfolio-item-img">
                                        <img src="img/portfolio/4.jpg" alt="Media Project 1" title="" />
                                        <a href="portfolio-1.html" className="ajax-page-load"></a>
                                    </div>

                                    <i className="far fa-file-alt"></i>
                                    <h4 className="name">Basic Quad Rig</h4>
                                    <span className="category">Rigging</span>
                                </figure>




                            </div>
                        </div>
                        {/* <!-- End of Portfolio Content --> */}
                    </div>
                </div>
            </div>

        </section>
    )
}



export default Portfolio