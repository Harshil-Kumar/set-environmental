import React from 'react';

const reviews = [
  {
    id: 1,
    title: "Mickel Jordan",
    videoUrl: "/videos/review1.mp4",
  },
  {
    id: 2,
    title: "Cristiano Ronaldo",
    videoUrl: "/videos/review2.mp4",
  },
  {
    id: 3,
    title: "Virat Kohli",
    videoUrl: "/videos/review3.mp4",
  },
  // Add more reviews as needed
];

const CustomerReviews: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-100 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">{review.title}</h3>
              <video controls className="w-full rounded-lg">
                <source src={review.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
