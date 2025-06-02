import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Zap } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AboutPage = () => {
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
              About KON Sun Energy Solutions
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ margin: '0 auto' }}
            >
              We're on a mission to make solar energy accessible and affordable for everyone in Tamil Nadu
            </motion.p>
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
        <div className="container">
          <div className="row">
            <motion.div 
              className="col"
              style={{ flex: '0 0 60%' }}
              {...fadeIn}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '2.4rem', color: 'var(--primary-color)' }}>Our Story</h2>
              <p>
                KON Sun Energy Solutions was founded with a simple yet powerful vision: to transform how homes and businesses in Tamil Nadu consume energy. We believe that clean, renewable solar energy should be accessible to everyone.
              </p>
              <p>
                Starting as a small team of passionate solar energy advocates, we've grown to become one of the most trusted names in Tamil Nadu's solar industry. Our dedication to quality, transparency, and customer satisfaction has helped us build a strong reputation and a growing base of happy customers.
              </p>
              <p>
                What sets us apart is our commitment to tailoring solar solutions to the specific needs of our clients. We don't just sell solar panels; we create comprehensive energy solutions that maximize returns and minimize environmental impact.
              </p>
            </motion.div>

            <motion.div 
              className="col"
              style={{ flex: '0 0 40%' }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Our team installing solar panels"
                  style={{
                    width: '100%',
                    maxHeight: '40rem',
                    objectFit: 'cover',
                    borderRadius: 'var(--border-radius)'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 0', backgroundColor: 'var(--neutral-100)' }}>
        <div className="container">
          <motion.h2 
            className="text-center mb-5"
            {...fadeIn}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))',
            gap: '3rem'
          }}>
            <motion.div 
              className="card"
              style={{ padding: '3rem', textAlign: 'center' }}
              {...fadeIn}
              viewport={{ once: true }}
            >
              <div style={{
                width: '8rem',
                height: '8rem',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem'
              }}>
                <Shield size={40} color="white" />
              </div>
              <h3 style={{ marginBottom: '1.6rem' }}>Quality & Reliability</h3>
              <p>
                We use only the highest quality solar equipment with industry-leading warranties. Our systems are built to perform efficiently for decades.
              </p>
            </motion.div>

            <motion.div 
              className="card"
              style={{ padding: '3rem', textAlign: 'center' }}
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
                margin: '0 auto 2rem'
              }}>
                <Users size={40} color="white" />
              </div>
              <h3 style={{ marginBottom: '1.6rem' }}>Customer-Centric Approach</h3>
              <p>
                We prioritize our customers' needs and provide personalized solutions that align with their energy consumption patterns and budget.
              </p>
            </motion.div>

            <motion.div 
              className="card"
              style={{ padding: '3rem', textAlign: 'center' }}
              {...fadeIn}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div style={{
                width: '8rem',
                height: '8rem',
                borderRadius: '50%',
                backgroundColor: 'var(--success-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem'
              }}>
                <Zap size={40} color="white" />
              </div>
              <h3 style={{ marginBottom: '1.6rem' }}>Innovation</h3>
              <p>
                We constantly stay updated with the latest advancements in solar technology to offer cutting-edge solutions to our customers.
              </p>
            </motion.div>

            <motion.div 
              className="card"
              style={{ padding: '3rem', textAlign: 'center' }}
              {...fadeIn}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div style={{
                width: '8rem',
                height: '8rem',
                borderRadius: '50%',
                backgroundColor: 'var(--secondary-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem'
              }}>
                <Award size={40} color="white" />
              </div>
              <h3 style={{ marginBottom: '1.6rem' }}>Transparency</h3>
              <p>
                We believe in complete transparency in our pricing, processes, and expectations, ensuring our customers are well-informed at every step.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
        <div className="container">
          <motion.h2 
            className="text-center mb-5"
            {...fadeIn}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>

          <motion.p 
            className="text-center mb-5"
            style={{ maxWidth: '80rem', margin: '0 auto 4rem' }}
            {...fadeIn}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our team consists of passionate solar energy experts, skilled engineers, and dedicated customer service professionals who work together to deliver exceptional solar solutions.
          </motion.p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(26rem, 1fr))',
            gap: '3rem'
          }}>
            <motion.div 
              className="card"
              {...fadeIn}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team member"
                style={{ 
                  width: '100%', 
                  height: '30rem', 
                  objectFit: 'cover',
                  borderTopLeftRadius: 'var(--border-radius)',
                  borderTopRightRadius: 'var(--border-radius)'
                }}
              />
              <div style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '0.8rem' }}>Raj Kumar</h3>
                <p style={{ color: 'var(--primary-color)', marginBottom: '1.2rem' }}>Founder & CEO</p>
                <p>With over 15 years of experience in renewable energy, Raj leads our company with a vision of sustainable energy future for Tamil Nadu.</p>
              </div>
            </motion.div>

            <motion.div 
              className="card"
              {...fadeIn}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <img 
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team member"
                style={{ 
                  width: '100%', 
                  height: '30rem', 
                  objectFit: 'cover',
                  borderTopLeftRadius: 'var(--border-radius)',
                  borderTopRightRadius: 'var(--border-radius)'
                }}
              />
              <div style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '0.8rem' }}>Priya Venkat</h3>
                <p style={{ color: 'var(--primary-color)', marginBottom: '1.2rem' }}>Chief Technical Officer</p>
                <p>Priya oversees all technical aspects of our solar installations, ensuring optimal performance and reliability.</p>
              </div>
            </motion.div>

            <motion.div 
              className="card"
              {...fadeIn}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team member"
                style={{ 
                  width: '100%', 
                  height: '30rem', 
                  objectFit: 'cover',
                  borderTopLeftRadius: 'var(--border-radius)',
                  borderTopRightRadius: 'var(--border-radius)'
                }}
              />
              <div style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '0.8rem' }}>Arun Subramanian</h3>
                <p style={{ color: 'var(--primary-color)', marginBottom: '1.2rem' }}>Customer Success Manager</p>
                <p>Arun ensures that every customer receives exceptional support from initial consultation through the lifetime of their solar system.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 0', backgroundColor: 'var(--primary-color)', color: 'white' }}>
        <div className="container text-center">
          <motion.h2 
            style={{ color: 'white', marginBottom: '2.4rem' }}
            {...fadeIn}
            viewport={{ once: true }}
          >
            Ready to Switch to Solar?
          </motion.h2>
          
          <motion.p 
            style={{ maxWidth: '64rem', margin: '0 auto 3.2rem' }}
            {...fadeIn}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Contact our team today to schedule a free consultation and learn how solar energy can benefit your home or business.
          </motion.p>
          
          <motion.div
            {...fadeIn}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="/#consultation" className="button accent" style={{ fontSize: '1.8rem', padding: '1.6rem 3.2rem' }}>
              Get Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;