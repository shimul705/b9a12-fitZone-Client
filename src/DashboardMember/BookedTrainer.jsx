import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import UseAxiosSecure from '../Providers/UseAxiosSecure';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const BookedTrainer = () => {
  const { user } = useContext(AuthContext); // Getting user info from AuthContext
  const axiosSecure = UseAxiosSecure(); // Using the axiosSecure instance
  const [trainer, setTrainer] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    const fetchTrainerData = async () => {
      try {
        const response = await axiosSecure.get('/api/trainers'); // Adjust endpoint as necessary
        setTrainer(response.data[0]); // Assuming response.data is an array
      } catch (error) {
        console.error('Error fetching trainer data:', error);
      }
    };

    fetchTrainerData();
  }, [axiosSecure]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosSecure.get('/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [axiosSecure]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const reviewData = {
        trainerId: trainer._id,
        userId: user._id,
        userName: user.displayName,
        userEmail: user.email,
        userPhoto: user.photoURL,
        feedback: reviewText,
        rating,
      };

      await axiosSecure.post('/api/reviews', reviewData);

      // Fetch updated reviews after submitting new one
      const response = await axiosSecure.get('/api/reviews');
      setReviews(response.data);

      setReviewText('');
      setRating(0);
      setModalOpen(false);
      toast.success('Successfully added Review'); // Close the modal after submitting review
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  if (!trainer) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Trainer Info</h1>
      <div className="mb-6">
        <p className="text-lg font-semibold">Name: <span className="font-normal">{trainer.name}</span></p>
        <p className="text-lg font-semibold">Experience: <span className="font-normal">{trainer.experience}</span></p>
        <p className="text-lg font-semibold">Specialty: <span className="font-normal">{trainer.specialty}</span></p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Classes Info</h2>
      <ul className="list-disc list-inside mb-6">
        {trainer.classes && trainer.classes.map((classInfo) => (
          <li key={classInfo.id} className="text-lg">{classInfo.name}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Slot Info</h2>
      <ul className="list-disc list-inside mb-6">
        {trainer.slots && trainer.slots.map((slot) => (
          <li key={slot} className="text-lg">{slot}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Other Info</h2>
      <p className="text-lg mb-6">{trainer.otherInfo}</p>

      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
      <ul className="space-y-4 mb-6">
        {reviews.map((review) => (
          <li key={review._id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <div className='flex items-center gap-5'>
              <div>
                {review.userPhoto ? (
                  <img className='h-16 w-16 rounded-full' src={review.userPhoto} alt="User" />
                ) : (
                  <FaUserCircle className='h-16 w-16 text-gray-500' /> // Default avatar icon
                )}
              </div>
              <div>
                <div>
                  {review.userName ? (
                    <p className="text-base font-semibold">{review.userName}</p>
                  ) : (
                    <p className="text-base font-semibold">User</p> // Default avatar icon
                  )}
                </div>
                <div>
                  {review.userEmail ? (
                    <p className="text-xs ">{review.userEmail}</p>
                  ) : (
                    <p className="ttext-xs">User@mail.com</p> // Default avatar icon
                  )}
                </div>


              </div>
            </div>
            <div className='my-5'>
              <p className="text-lg"><b>Review:</b> {review.feedback}</p>
              <p className="text-sm font-bold flex items-center gap-2"><b>Rating:</b>  {review.rating} <span><FaStar className='text-yellow-400' /></span></p>
            </div>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Write a Review
      </button>

      {modalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Write your review here..."
              />
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="0"
                max="5"
                required
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Rating (0-5)"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer/>
    </div>
  );
};

export default BookedTrainer;
