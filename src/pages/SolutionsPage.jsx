import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Zap, Award, CheckCircle } from 'lucide-react';
import ConsultationForm from '../components/ConsultationForm';

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

const SolutionsPage = () => {
  return (
    <div className="page">
      <section className="hero bg-primary">
        <div className="container">
          <div className="hero-content text-center" style={{ maxWidth: '100%' }}>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Solar Solutions
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ margin: '0 auto' }}
            >
              Tailored solar energy systems for homes, housing societies, and commercial buildings
            </motion.p>
          </div>
        </div>
      </section>

      <section id="residential" style={{ padding: '8rem 0', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(45rem, 1fr))',
            gap: '6rem',
            alignItems: 'center'
          }}>
            <motion.div
              {...fadeIn}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '2.4rem', color: 'var(--primary-color)' }}>Residential Solar Solutions</h2>
              <p style={{ marginBottom: '2.4rem' }}>
                Our residential solar solutions are designed to help homeowners in Tamil Nadu reduce their electricity bills and contribute to a greener environment.
              </p>
              
              <div style={{ marginBottom: '2.4rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.6rem' }}>Key Benefits:</h3>
                <ul style={{ listStyle: 'none', marginLeft: '0' }}>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    marginBottom: '1.2rem'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>Reduce Electricity Bills:</strong> Generate your own power and save up to 90% on your electricity bills.</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    marginBottom: '1.2rem'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>Government Subsidies:</strong> Take advantage of Tamil Nadu's solar subsidies of ₹20,000 per kilowatt and additional 30% from MNRE.</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    marginBottom: '1.2rem'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>Net Metering:</strong> Feed excess electricity back to the grid and get credits on your electricity bill.</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    marginBottom: '1.2rem'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>Increase Property Value:</strong> Solar installations can increase your home's market value.</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>25-Year Warranty:</strong> Our solar panels come with a performance warranty of 25 years.</span>
                  </li>
                </ul>
              </div>
              
              <a href="#consultation" className="button accent">Get Free Residential Solar Quote</a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Residential Solar Installation"
                style={{ 
                  width: '100%',
                  borderRadius: 'var(--border-radius)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="commercial" style={{ padding: '8rem 0', backgroundColor: 'var(--neutral-100)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(45rem, 1fr))',
            gap: '6rem',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ order: { xs: 2, md: 1 } }}
            >
              <img 
                src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Commercial Solar Installation"
                style={{ 
                  width: '100%',
                  borderRadius: 'var(--border-radius)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              />
            </motion.div>
            
            <motion.div
              {...fadeIn}
              viewport={{ once: true }}
              style={{ order: { xs: 1, md: 2 } }}
            >
              <h2 style={{ marginBottom: '2.4rem', color: 'var(--primary-color)' }}>Commercial Solar Solutions</h2>
              <p style={{ marginBottom: '2.4rem' }}>
                Our commercial solar solutions help businesses reduce operational costs and demonstrate their commitment to sustainability.
              </p>
              
              <div style={{ marginBottom: '2.4rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.6rem' }}>Key Benefits:</h3>
                <ul style={{ listStyle: 'none', marginLeft: '0' }}>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    marginBottom: '1.2rem'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>Significant Cost Savings:</strong> Reduce your energy costs and improve your bottom line.</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    marginBottom: '1.2rem'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>Tax Benefits:</strong> Take advantage of accelerated depreciation and other tax benefits for businesses.</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    marginBottom: '1.2rem'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>Corporate Social Responsibility:</strong> Showcase your commitment to sustainability and reduce your carbon footprint.</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    marginBottom: '1.2rem'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>Energy Independence:</strong> Protect your business from rising energy costs and power outages.</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>Customized Solutions:</strong> We design systems based on your specific energy consumption patterns and space constraints.</span>
                  </li>
                </ul>
              </div>
              
              <a href="#consultation" className="button accent">Get Commercial Solar Quote</a>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="housing" style={{ padding: '8rem 0', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(45rem, 1fr))',
            gap: '6rem',
            alignItems: 'center'
          }}>
            <motion.div
              {...fadeIn}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '2.4rem', color: 'var(--primary-color)' }}>Housing Society Solar Solutions</h2>
              <p style={{ marginBottom: '2.4rem' }}>
                Our housing society solutions enable multiple residential units to benefit from shared solar infrastructure, reducing costs for all residents.
              </p>
              
              <div style={{ marginBottom: '2.4rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.6rem' }}>Key Benefits:</h3>
                <ul style={{ listStyle: 'none', marginLeft: '0' }}>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    marginBottom: '1.2rem'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>Shared Benefits:</strong> All residents benefit from reduced electricity costs for common areas.</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    marginBottom: '1.2rem'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>Efficient Use of Space:</strong> Utilize common areas and rooftops for maximum solar generation.</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    marginBottom: '1.2rem'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>Community Engagement:</strong> Foster community spirit through a shared sustainable initiative.</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    marginBottom: '1.2rem'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>Enhanced Property Value:</strong> Increase the market value and appeal of the entire housing society.</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start'
                  }}>
                    <CheckCircle size={20} style={{ marginRight: '1.2rem', color: 'var(--success-color)', flexShrink: 0, marginTop: '0.4rem' }} />
                    <span><strong>Maintenance Support:</strong> Comprehensive maintenance plans for hassle-free operation.</span>
                  </li>
                </ul>
              </div>
              
              <a href="#consultation" className="button accent">Get Housing Society Solar Quote</a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Housing Society Solar Installation"
                style={{ 
                  width: '100%',
                  borderRadius: 'var(--border-radius)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="technology" style={{ padding: '8rem 0', backgroundColor: 'var(--neutral-100)' }}>
        <div className="container">
          <motion.h2 
            style={{ textAlign: 'center', marginBottom: '4.8rem' }}
            {...fadeIn}
            viewport={{ once: true }}
          >
            Our Technology
          </motion.h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
            gap: '3.2rem'
          }}>
            <motion.div 
              className="card"
              style={{ padding: '3.2rem' }}
              {...fadeIn}
              viewport={{ once: true }}
            >
              <div style={{
                width: '8rem',
                height: '8rem',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2.4rem'
              }}>
                <Sun size={40} color="white" />
              </div>
              <h3 style={{ marginBottom: '1.6rem' }}>On-Grid Solar Systems</h3>
              <p style={{ marginBottom: '2.4rem' }}>
                Connect to the utility grid, allowing you to feed excess power back to the grid and get credited for it. Ideal for areas with reliable grid electricity.
              </p>
              <a href="/contact" className="button">Learn More</a>
            </motion.div>
            
            <motion.div 
              className="card"
              style={{ padding: '3.2rem' }}
              {...fadeIn}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div style={{
                width: '8rem',
                height: '8rem',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2.4rem'
              }}>
                <Battery size={40} color="white" />
              </div>
              <h3 style={{ marginBottom: '1.6rem' }}>Off-Grid Solar Systems</h3>
              <p style={{ marginBottom: '2.4rem' }}>
                Completely independent from the utility grid, these systems store energy in batteries for use when the sun isn't shining. Perfect for remote locations or areas with unreliable grid power.
              </p>
              <a href="/contact" className="button">Learn More</a>
            </motion.div>
            
            <motion.div 
              className="card"
              style={{ padding: '3.2rem' }}
              {...fadeIn}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div style={{
                width: '8rem',
                height: '8rem',
                borderRadius: '50%',
                backgroundColor: 'var(--secondary-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2.4rem'
              }}>
                <Zap size={40} color="white" />
              </div>
              <h3 style={{ marginBottom: '1.6rem' }}>Hybrid Solar Systems</h3>
              <p style={{ marginBottom: '2.4rem' }}>
                The best of both worlds, hybrid systems can both connect to the grid and store energy in batteries, offering maximum flexibility and backup power during outages.
              </p>
              <a href="/contact" className="button">Learn More</a>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="consultation" style={{ padding: '8rem 0', backgroundColor: 'white' }}>
        <div className="container">
          <motion.h2 
            style={{ textAlign: 'center', marginBottom: '2.4rem' }}
            {...fadeIn}
            viewport={{ once: true }}
          >
            Ready to Go Solar?
          </motion.h2>
          <motion.p 
            style={{ textAlign: 'center', maxWidth: '64rem', margin: '0 auto 4.8rem' }}
            {...fadeIn}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Fill out the form below to schedule a free consultation with our solar experts. We'll analyze your electricity consumption and design a custom solution for your specific needs.
          </motion.p>
          
          <motion.div
            style={{ maxWidth: '64rem', margin: '0 auto' }}
            {...fadeIn}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;