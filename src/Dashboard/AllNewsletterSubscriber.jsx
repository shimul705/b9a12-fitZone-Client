import { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { axiosSecure } from "../Providers/UseAxiosSecure";
import Loader from "../Components/Loader/Loader";
// import Loader from "../components/Loader"; // Make sure to import your Loader component

const AllNewsletterSubscriber = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true); // State variable to track loading state

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axiosSecure.get('/api/newsletter');
        setSubscribers(response.data);
      } catch (error) {
        console.error('Error fetching subscribers:', error);
      } finally {
        setLoading(false); // Set loading to false once data fetching is complete
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center border-2 h-full">
      <div>
        <div className="text-center my-10">
          <h1 className="text-5xl font-bold my-2">All Newsletter Subscribers</h1>
        </div>
      </div>
      {loading ? (
        <Loader /> // Render the Loader component while loading
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <Table.Head className="text-xl">
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Message</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-lg">
              {subscribers.map((subscriber, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {subscriber.email}
                  </Table.Cell>
                  <Table.Cell>{subscriber.message}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </div>
  );
};

export default AllNewsletterSubscriber;
