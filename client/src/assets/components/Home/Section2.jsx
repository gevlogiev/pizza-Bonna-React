const Section2 = () => {
    const welcomeSection = {
        backgroundImage: `url(./../../../images/about.jpg)`,
      };


    return (
<>
<section class="ftco-about d-md-flex">
      <div class="one-half img"style={welcomeSection}></div>
      <div class="one-half ftco-animate">
      <div class="heading-section ftco-animate ">
        <h2 class="mb-4">Welcome to <span class="flaticon-pizza">Pizza</span> A Restaurant</h2>
      </div>
      <div>
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
            </div>
      </div>
  </section>
        <section className="ftco-intro">
    	<div className="container-wrap">
    		<div className="wrap d-md-flex">
	    		<div className="info">
	    			<div className="row no-gutters">
	    				<div className="col-md-4 d-flex ftco-animate">
	    					<div className="icon"><span className="icon-phone"></span></div>
	    					<div className="text">
	    						<h3> +359 87 858 5852 </h3>
	    						<p>Телефон за поръчки</p>
	    					</div>
	    				</div>
	    				<div className="col-md-4 d-flex ftco-animate">
	    					<div className="icon"><span className="icon-my_location"></span></div>
	    					<div className="text">
	    						<h3>Варна, бул. „Сливница“ 14</h3>
	    						<p>срещу хотел "Черно море"</p>
	    					</div>
	    				</div>
	    				<div className="col-md-4 d-flex ftco-animate">
	    					<div className="icon"><span className="icon-clock-o"></span></div>
	    					<div className="text">
	    						<h3>Отворено всеки ден</h3>
	    						<p>08:00 - 04:00</p>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    		<div className="social d-md-flex pl-md-5 p-4 align-items-center">
	    			<ul className="social-icon">
              <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
            </ul>
	    		</div>
    		</div>
    	</div>
    </section>
     
  </>
    )
}

export default Section2