import { Card, Table } from "flowbite-react";


const Balance = () => {
  return (
    <>
      <div className=" grid grid-cols-4 gap-10 justify-center items-center my-20 w-4/5 m-auto">
        <div className="col-span-1 flex justify-center items-center border rounded-md h-full">
          <Card href="#" className="max-w-sm text-center">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Balance
            </h5>
            <p className="font-semibold text-6xl text-gray-700 dark:text-gray-400">
              $ 1041
            </p>
          </Card>

        </div>

        <div className="col-span-3 border rounded-md h-full">
          <div>
            <h1 className="text-4xl text-center mb-4 font-semibold">Transactions</h1>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <Table.Head className="text-xl">
                <Table.HeadCell>Member Photo</Table.HeadCell>
                <Table.HeadCell>Member Name</Table.HeadCell>
                <Table.HeadCell>Member Email</Table.HeadCell>
                <Table.HeadCell>Paid</Table.HeadCell>
                {/* <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell> */}
              </Table.Head>

              <Table.Body className="divide-y text-lg">

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <img className="h-16 rounded-full" src="https://i.ibb.co/3mtWycy/2149205540.jpg" alt="" />
                  </Table.Cell>
                  <Table.Cell>Shimul Mahmud</Table.Cell>
                  <Table.Cell>shimulgub@gmail.com</Table.Cell>
                  <Table.Cell>$ 10</Table.Cell>
                </Table.Row>

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <img className="h-16 rounded-full" src="https://i.ibb.co/3mtWycy/2149205540.jpg" alt="" />
                  </Table.Cell>
                  <Table.Cell>Shimul Mahmud</Table.Cell>
                  <Table.Cell>shimulgub@gmail.com</Table.Cell>
                  <Table.Cell>$ 10</Table.Cell>
                </Table.Row>

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <img className="h-16 rounded-full" src="https://i.ibb.co/3mtWycy/2149205540.jpg" alt="" />
                  </Table.Cell>
                  <Table.Cell>Shimul Mahmud</Table.Cell>
                  <Table.Cell>shimulgub@gmail.com</Table.Cell>
                  <Table.Cell>$ 10</Table.Cell>
                </Table.Row>

              </Table.Body>

            </Table>
          </div>
        </div>

        <div className="col-span-4 border rounded-md h-full">
          <div>
            <h1 className="text-4xl text-center mb-4 font-semibold">Pie Chart</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;