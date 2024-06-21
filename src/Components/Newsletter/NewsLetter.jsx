"use client";

import React, { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
// import axios from 'axios';
import { axiosSecure } from '../../Providers/UseAxiosSecure';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosSecure.post('/api/newsletter', { email, message });
      alert(response.data);
    } catch (error) {
      console.error('Error submitting subscription:', error);
      alert('Failed to submit subscription');
    }

    setEmail('');
    setMessage('');
  };

  return (
    <div className="w-11/12 m-auto my-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold my-2">NewsLetter</h1>
        <p className="text-xl w-2/3 m-auto my-4">
          Subscribe to our newsletter to receive the latest updates, news, and exclusive offers directly to your inbox. Be the first to know about new product launches, special promotions, and exciting events. Join our community of subscribers and stay connected with us for all the latest developments and happenings!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div>
          <img className="rounded-lg" src="https://i.ibb.co/ym2RHTt/2148259120.jpg" alt="" />
        </div>
        <div className="flex items-center gap-10 justify-center flex-col border border-dashed rounded-lg">
          <h1 className="text-3xl text-center ">
            <span className="font-semibold">Stay Updated</span> <br /> with Our Latest News and Exclusive Offers!
          </h1>
          <form className="flex max-w-md flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="message" value="Your Message" />
              </div>
              <TextInput
                id="message"
                type="text"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
