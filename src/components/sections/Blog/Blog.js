import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Section from '../../../HOC/Section';


const Blog = () => {
  useEffect(() => {
    AOS.init();
},[])
  return (
    <Section id="blog">
<div class="container py-5 ">
<div class="container text-center" data-aos="fade-in">
<h2 class="text-center">Blogs, Research and News</h2>
</div>
<div class="row mt-0 mt-md-5" data-aos="fade-up">
<div class="col-md-6">
<div class="card" style={{background: "#5f22ad"}}>
<div class="card-body text-white p-5">
<img src="blogShout.png" alt="bootstrap-templates" height="80" width="80" style={{backgroundcolor: "white"}}/>
<h3 class="mt-5 mb-4 text-white font-tofino-medium" style={{lineheight: "32px"}}>COVID-19 Detection using X-RAYs: A Detailed Analysis</h3>
<p style={{opacity: "0.5"}} class="font-tofino-regular mb-4 pb-2">Detailed analysis of COVID-19 situation and the case for using X-RAYs to detect the infection. </p>
<a href="/blog" class="text-white d-block" title="Checkout now">
Checkout now <i class="fas fa-arrow-right"></i>
</a>
</div>
</div>
</div>
<div class="col-md-6" data-aos="fade-right">
<div class="card" style={{background: "#0099ff"}}>
<div class="card-body text-white p-5">
<img src="blogShout.png" alt="react-templates" height="80" width="80" style={{backgroundcolor: "white"}}/>
<h3 class="mt-5 mb-4 text-white font-tofino-medium" style={{lineheight: "32px"}}>COVID-19: Infographics of Infections in India and World</h3>
<p style={{opacity: "0.5"}} class="font-tofino-regular mb-4 pb-2">Checkout the Infographics and details on the spread of COVID-19 infection in India and the World.</p>
<a href="/blog" class="text-white d-block" title="Checkout now">
Checkout now <i class="fas fa-arrow-right"></i>
</a>
</div>
</div>
</div>
<div class="col-md-6" data-aos="fade-up">
<div class="card" style={{background: "#df012a"}}>
<div class="card-body text-white p-5">
<img src="blogShout.png" alt="bootstrap-templates" height="80" width="80" style={{backgroundcolor: "white"}}/>
<h3 class="mt-5 mb-4 text-white font-tofino-medium" style={{lineheight: "32px"}}>COVID-19 Detection Strategies: A Survey </h3>
<p style={{opacity: "0.5"}} class="font-tofino-regular mb-4 pb-2">Upcoming survey on the mindset of medical professionals and the state of COVID-19 detection strategies.</p>
<a class="text-white d-block" title="Releasing Soon..!" href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md ">
Releasing Soon..! <i class="fas fa-arrow-right"></i>
</a>
</div>
</div>
</div>
<div class="col-md-6" data-aos="fade-left">
<div class="card" style={{background: "#5f22ad"}}>
<div class="card-body text-white p-5">
<img src="blogShout.png" alt="react-templates" height="80" width="80" style={{backgroundcolor: "white"}}/>
<h3 class="mt-5 mb-4 text-white font-tofino-medium" style={{lineheight: "32px"}}>MYAIRA: AI Powered Automated X-ray Analysis</h3>
<p style={{opacity: "0.5"}} class="font-tofino-regular mb-4 pb-2">We have developed R&D Artificial Intelligence (AI) system</p>
<a href="/blog" class="text-white d-block" title="Checkout now">
Checkout now <i class="fas fa-arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</Section>
  );
};

export default Blog;
