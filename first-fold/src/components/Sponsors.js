import React from 'react';
import Carousel from './ImageCarousel';
import FAQSection from './FAQSection';



export default function Sponsors() {

  const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://thumbs.dreamstime.com/b/csr-closeup-hand-arrange-wood-letters-as-abbreviation-corporate-social-responsibility-61871188.jpg",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ]; 

  return (
    <div className='sponsorship'>
      <div className="become_sponsor">
        <h2 className="head">Sponsor a special weekend</h2>
        <h4 className="para">Each year, our sponsors help us unite thousands of emerging developers, designers, and builders. Hackers make lasting connections with our sponsors that extend past just our hackathon weekend. Stay tuned as we confirm more sponsors for the event.</h4>
        <a
          href="mailto:example@example.com?subject=Interested%20in%20Sponsorship"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="sponsorb">Become a Sponsor</button>
        </a>
      </div>

     <div className="sponsor-section">
      <div className="carousel">
        <Carousel
         images={images}
         />
      </div>
      <div className="carousel-para">
        <p className='para-1'>You may already know that RBC is Canada’s largest bank, with 89,000+ employees and 17 million clients globally. But did you know we are also one of Canada’s largest tech employers? With over 10,000 employees working across different technical roles, our teams apply imagination, insight and cutting-edge technology to create solutions that lead to better experiences for our clients, colleagues and communities.Tech @ RBC offers hundreds of student and new grad roles, with opportunities to learn, grow and work with purpose.From Developers to Data Scientists, from Cyber Threat Hunters to AI and ML Specialists, we inspire the next generation of brilliant minds to Be What’s Next.If you’re interesting in exploring a broad range of exciting technology career paths, click below to view our Student Co Op and New Graduate Full Time job opportunities.</p>
      </div>
     </div>

     <div className='faqs'>
      <div className='faq_heading'>
         <h1> Frequently asked questions</h1>
      </div>
      <FAQSection />
     </div>
    </div>
  );
}
