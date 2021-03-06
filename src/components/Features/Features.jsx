import React from 'react';
import features from './Features.module.css';
import $ from "jquery";
import students from '../../img/students.png';
import brain from '../../img/brain.png';
import time from '../../img/time.png';
import tablet from '../../img/tablet.png';
import file from '../../img/file.png';

$(function() {
    $(window).on("scroll resize", function() {
        $('#features h2').each(function(){
            let imagePos = $(this).offset().top;
    
            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__jackInTheBox");
            }
        });
        $('#features .card-students').each(function(){
            let imagePos = $(this).offset().top;
    
            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInTopLeft");
            }
        });
        $('#features .card-children').each(function(){
            let imagePos = $(this).offset().top;
    
            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInDown");
            }
        });
        $('#features .card-practice').each(function(){
            let imagePos = $(this).offset().top;
    
            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInTopRight");
            }
        });
        $('#features .card-system').each(function(){
            let imagePos = $(this).offset().top;
    
            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInBottomLeft");
            }
        });
        $('#features .card-individuality').each(function(){
            let imagePos = $(this).offset().top;
    
            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInBottomRight");
            }
        });
    });
})

const Features = () => {
    return (
        <section className={`${features.features} features text-center`} id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2 className="text-uppercase animate__animated">
                            ???????? ??????????????????????
                        </h2>
                    </div>
                    <div className="col-md-4">
                        <div className={`${features.card} card card-students border-0 animate__animated`}>
                            <div className={`${features.wrapper} d-flex justify-content-center align-items-center`}>
                                <img src={students} alt="??????????????" className={`${features.icon} ${features.icon_students}`}/>
                            </div>
                            <h4 className="card-title m-0 text-lowercase">
                                ???????? ?????????????? - ???????? ??????????????
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${features.card} card card-children border-0 animate__animated`}>
                            <div className={`${features.wrapper} d-flex justify-content-center align-items-center`}>
                                <img src={brain} alt="????????" className={`${features.icon} ${features.icon_brain}`}/>
                            </div>
                            <h4 className="card-title m-0 text-lowercase">
                                ?????????????? ?? 10 ??????
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${features.card} card card-practice border-0 animate__animated`}>
                            <div className={`${features.wrapper} d-flex justify-content-center align-items-center`}>
                                <img src={time} alt="????????" className={`${features.icon} ${features.icon_time}`}/>
                            </div>
                            <h4 className="card-title m-0 text-lowercase">
                                ?????????? ????????????????
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${features.card} card card-system border-0 animate__animated`}>
                            <div className={`${features.wrapper} d-flex justify-content-center align-items-center`}>
                                <img src={tablet} alt="??????????????" className={`${features.icon}  ${features.icon_tablet}`}/>
                            </div>
                            <h4 className="card-title m-0 text-lowercase">
                                ???????????? ?????????????? ????????????????
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${features.card} card card-individuality border-0 animate__animated`}>
                            <div className={`${features.wrapper} d-flex justify-content-center align-items-center`}>
                                <img src={file} alt="????????????????" className={`${features.icon} ${features.icon_file}`}/>
                            </div>
                            <h4 className="card-title m-0 text-lowercase">
                                ???????????????????????????? ????????????
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;