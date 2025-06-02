import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Zap, Coins, LineChart, Shield } from 'lucide-react';
import ConsultationForm from '../components/ConsultationForm';
import '../styles/Home.css';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const HomePage = () => {
  return (
    <>
      <section className="hero home-hero">
        <div className="container">
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Harness The Power of Solar Energy in Tamil Nadu
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Reduce your electricity bills by up to 90% with our custom solar solutions. Take advantage of Tamil Nadu's solar subsidies today!
            </motion.p>
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#benefits" className="button">Learn More</a>
            </motion.div>
          </div>
        </div>
        <div className="hero-image-container">
          <video className="hero-video" src="src/assets/videos/Drone Video.mp4" autoPlay loop muted playsInline></video>
        </div>
      </section>

      <section id="benefits" className="benefits-section">
        <div className="container">
          <motion.h2 
            className="benefits-title"
            {...fadeIn}
          >
            Benefits of Using Solar Panels at Home
          </motion.h2>
          
          <motion.div 
            className="benefits-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="benefit-card card" variants={fadeIn}>
              <div className="benefit-icon">
                <Coins size={32} />
              </div>
              <h3 className="benefit-title">Reduced Electricity Bills</h3>
              <p>Generate your own electricity from sunlight and decrease reliance on the grid, leading to substantial savings on energy bills.</p>
            </motion.div>
            
            <motion.div className="benefit-card card" variants={fadeIn}>
              <div className="benefit-icon">
                <Battery size={32} />
              </div>
              <h3 className="benefit-title">Energy Independence</h3>
              <p>Produce your own electricity and enhance energy security, reducing vulnerability to power outages and fluctuating energy prices.</p>
            </motion.div>
            
            <motion.div className="benefit-card card" variants={fadeIn}>
              <div className="benefit-icon">
                <Sun size={32} />
              </div>
              <h3 className="benefit-title">Environmental Impact</h3>
              <p>Solar energy is a clean, renewable resource that reduces your carbon footprint by decreasing greenhouse gas emissions.</p>
            </motion.div>
            
            <motion.div className="benefit-card card" variants={fadeIn}>
              <div className="benefit-icon">
                <LineChart size={32} />
              </div>
              <h3 className="benefit-title">Increased Property Value</h3>
              <p>Homes equipped with solar panels often see an appreciation in property value due to lower energy costs and sustainable living.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="container">
          <motion.h2 
            className="solutions-title"
            {...fadeIn}
            viewport={{ once: true }}
          >
            Our Solar Solutions
          </motion.h2>
          
          <motion.div 
            className="solutions-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="solution-card card" variants={fadeIn}>
              <img 
                src="src\assets\images\S5.jpg" 
                alt="Residential Solar" 
                className="solution-image"
              />
              <div className="solution-content">
                <h3 className="solution-title">Residential Solar</h3>
                <p className="solution-description">
                  Custom solar solutions for homes in Tamil Nadu. Take advantage of government subsidies and reduce your electricity bills by up to 90%.
                </p>
                <a href="/solutions#residential" className="button solution-cta">Learn More</a>
              </div>
            </motion.div>
            
            <motion.div className="solution-card card" variants={fadeIn}>
              <img 
                src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Housing Society Solar" 
                className="solution-image"
              />
              <div className="solution-content">
                <h3 className="solution-title">Housing Society</h3>
                <p className="solution-description">
                  Comprehensive solar solutions for housing societies and apartments. Share the benefits of solar energy among all residents.
                </p>
                <a href="/solutions#housing" className="button solution-cta">Learn More</a>
              </div>
            </motion.div>
            
            <motion.div className="solution-card card" variants={fadeIn}>
              <img 
                src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Commercial Solar" 
                className="solution-image"
              />
              <div className="solution-content">
                <h3 className="solution-title">Commercial</h3>
                <p className="solution-description">
                  Reduce operational costs and showcase your commitment to sustainability with our commercial solar installations.
                </p>
                <a href="/solutions#commercial" className="button solution-cta">Learn More</a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <section className="stats-section">
        <div className="container">
          <motion.h2 
            className="stats-title"
            {...fadeIn}
            viewport={{ once: true }}
          >
            Why Choose KON Sun Energy Solutions?
          </motion.h2>
          
          <motion.div 
            className="stats-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="stat-item" variants={fadeIn}>
              <div className="stat-number">500+</div>
              <div className="stat-label">Installations Completed</div>
            </motion.div>
            
            <motion.div className="stat-item" variants={fadeIn}>
              <div className="stat-number">90%</div>
              <div className="stat-label">Electricity Bill Savings</div>
            </motion.div>
            
            <motion.div className="stat-item" variants={fadeIn}>
              <div className="stat-number">5000+</div>
              <div className="stat-label">Tons of CO2 Reduced</div>
            </motion.div>
            
            <motion.div className="stat-item" variants={fadeIn}>
              <div className="stat-number">100%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <motion.h2 
                className="cta-title"
                {...fadeIn}
                viewport={{ once: true }}
              >
                Ready to Harness Solar Power?
              </motion.h2>
              <motion.p 
                className="cta-text"
                {...fadeIn}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                Schedule a free consultation with our experts today. We'll analyze your electricity consumption and design a custom solar solution for your home or business.
              </motion.p>
              
              <motion.div 
                className="consultation-form-container"
                {...fadeIn}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ConsultationForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;