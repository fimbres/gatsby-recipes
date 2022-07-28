import React from 'react';
import Layout from '../components/Layout';

const contact = () => {
  return (
    <Layout>
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>
            <h3>Want to Get in Touch?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
          <article>
            <form className='form contact-form' action="https://formspree.io/f/myyorror" method="POST">
              <div className='form-row'>
                <label htmlFor='name'>your name</label>
                <input type="text" id='name' name='name'></input>
              </div>
              <div className='form-row'>
                <label htmlFor='email'>your email</label>
                <input type="text" id='email' name='email'></input>
              </div>
              <div className='form-row'>
                <label htmlFor='message'>message</label>
                <textarea name="message" id='message'></textarea>
              </div>
              <button type='submit' className='btn block'>submit</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contact;