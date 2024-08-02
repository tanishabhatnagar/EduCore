import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Motion variants for fade in from left and right
const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};

const cardsData = [
  {
    title: 'Database Management Systems',
    description: 'Learn about database design, SQL, and data management techniques.',
    imgSrc: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww',
  },
  {
    title: 'Object-Oriented Programming',
    description: 'Master the principles of OOP in various programming languages.',
    imgSrc: 'https://images.unsplash.com/photo-1537202108838-e7072bad1927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN5c3RlbSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Computer Networks',
    description: 'Understand the fundamentals of networking, protocols, and network design.',
    imgSrc: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Operating Systems (OS)',
    description: 'Explore the concepts of operating systems, process management, memory management.',
    imgSrc: 'https://plus.unsplash.com/premium_photo-1661601756523-470b21a18963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZHklMjBkYXJrfGVufDB8fDB8fHww',
  },
  {
    title: 'System Design',
    description: 'Learn how to design scalable and efficient systems for real-world applications.',
    imgSrc: 'https://images.unsplash.com/photo-1655794387399-6dd29236eaa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3lzdGVtJTIwZGVzaWdufGVufDB8fDB8fHww',
  },
  {
    title: 'SQL',
    description: 'Master SQL for data querying, manipulation, and database management.',
    imgSrc: 'https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww',
  },
];

export function CardDefault({ darkMode }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`w-full p-6 mt-10 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="block md:hidden">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className="mb-6"
            initial="hidden"
            whileInView="show"
            variants={fadeIn(index % 2 === 0 ? 'left' : 'right', 0.1)}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className={`w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src={card.imgSrc}
                  alt="card-image"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" className="mb-2">
                  {card.title}
                </Typography>
                <Typography className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {card.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button className="bg-blue-600 hover:bg-blue-700">Read More</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="hidden md:block">
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <div key={index} className="px-4 w-full">
              <Card className={`w-10/12 h-96 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    src={card.imgSrc}
                    alt="card-image"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" className="mb-2">
                    {card.title}
                  </Typography>
                  <Typography className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {card.description}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button className="bg-blue-600 hover:bg-blue-700">Read More</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CardDefault;
