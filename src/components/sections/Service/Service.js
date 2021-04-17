import React,{ useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Section from '../../../HOC/Section';

const Service = () => {
  useEffect(() => {
    AOS.init();
},[])
  return (
    <Section id='services'>
     <div class="container text-center  " data-aos="fade-right" >
       <div className=" rotate skew scale translate">
<h2 class="text-center service-box">Features</h2>
</div>
</div>

<div class="row mt-5 bg-section-v2">
<div class="col-md-5">
<div class="">
<div class="card card-custom-shadow " data-aos="fade-left">
<div class="card-body ">
<div class="d-flex p-3">
<div class="pr-4"><span class="icon2 feature-icon feature-icon2"></span></div>
<div class="service-box">
<h6 class='section-subtitle mr-auto ml-auto'>Triage Assistance</h6>
<p class='section-subtitle mr-auto ml-auto'>MYAIRA assists in triaging patients accurately - categorzing high risk and low risk patients.
Reduces Time to Initial Treatment.</p>
</div>
</div>
</div>
</div>

<div class="card card-custom-shadow" data-aos="fade-right">
<div class="card-body">
<div class="d-flex p-3">
<div class="pr-4"><span class="icon2 feature-icon feature-icon3"></span></div>
<div class="service-box">
<h6 class="font-18">Generate Diagnostic Report with ease</h6>
<p class="font-tofino-regular mt-4 mb-0">Generate radiological report of an x-ray with a single button click.</p>
</div>
</div>
</div>
</div>

<div class="card card-custom-shadow" data-aos="fade-up">
<div class="card-body">
<div class="d-flex p-3">
<div class="pr-4"><span class="icon2 feature-icon feature-icon4"></span></div>
<div class="service-box">
<h6 class="font-18">Continuously Improving AI Model</h6>
<p class="font-tofino-regular mt-4 mb-0 text-justify">As and when new clinical data is available,
we plan to continue our effort to improve the AI model to be production-ready.
So that medical professionals can use our AI services confidently. </p>
</div>
</div>
</div>
</div>

<div class="card card-custom-shadow" data-aos="fade-up">
<div class="card-body">
<div class="d-flex p-3">
<div class="pr-4"><span class="icon2 feature-icon feature-icon1"></span></div>
<div class="service-box">
<h6 class="font-18"> Free Trial for Everyone <a class = "btn btn-danger mr-2" href="/register">Signup Now </a></h6>
<p class="font-tofino-regular mt-4 mb-0">Users can signup up and start evaluating the service for <strong> Free</strong>. </p>
</div>
</div>
</div>
</div>

</div>
</div>

<div class="col-md-7">
<div class="row" data-aos="fade-up">
<img src="sample_demo3.jpg" style={{boxshadow:"4px 2px 14px -4px rgba(0,110,108,0.54)" ,width:"100%",height:"auto"}} alt="logo1"/>
</div>
<div class="row pb-2" data-aos="fade-right">
<img src="sample_demo1.png" style={{boxshadow:"4px 2px 14px -4px rgba(0,110,108,0.54)", width:"100%" ,height:"auto" }} alt="logo2"/>
</div>
<div class="row" data-aos="fade-left">
<img src="sample_demo2.jpg" style={{boxshadow:"4px 2px 14px -4px rgba(0,110,108,0.54)", width:"100%" , height:"auto" }} alt="logo4"/>
</div>
</div>
</div>
<div class="row mt-5 bg-section-v2 " data-aos="fade-up">
<img src="MedicalModel_COVID19_96x96_4CNN_NT_LR0001.png" style={{boxshadow:"0 2px 7px 0 #8971ea", width:"100%", height:"auto"}} alt="logo3"/>
</div>
    </Section>
  );
};

export default Service;
