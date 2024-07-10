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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export function CardDefault() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full p-6 bg-black mt-10">
      <div className="block md:hidden">
        {cardsData.map((card, index) => (
          <div key={index} className="mb-6">
            <Card className="w-full bg-gray-800 text-white">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src={card.imgSrc}
                  alt="card-image"
                  className="w-full h-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="white" className="mb-2">
                  {card.title}
                </Typography>
                <Typography className="text-gray-300">
                  {card.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button className="bg-blue-600 hover:bg-blue-700">Read More</Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <div key={index} className="px-2">
              <Card className="w-86 bg-gray-800 text-white">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    src={card.imgSrc}
                    alt="card-image"
                    className="w-full h-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="white" className="mb-2">
                    {card.title}
                  </Typography>
                  <Typography className="text-gray-300">
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
