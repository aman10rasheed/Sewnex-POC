import { useState, useEffect, useMemo } from "react";

const OrderManagment = () => {
  const testData = useMemo(
    () => [
      {
        no: 1,
        orderDate: "2022-03-15",
        deliveryDate: "2022-03-20",
        name: "John Doe",
        phoneNumber: "123-456-7890",
        status: "Order Placed",
        amount: 250,
        dueAmount: 0,
        paymentStatus: "Paid",
      },
      {
        no: 2,
        orderDate: "2022-03-18",
        deliveryDate: "2022-03-25",
        name: "Jane Smith",
        phoneNumber: "987-654-3210",
        status: "Order Placed",
        amount: 150,
        dueAmount: 75,
        paymentStatus: "Pending",
      },
      {
        no: 3,
        orderDate: "2022-03-20",
        deliveryDate: "2022-03-28",
        name: "Alice Johnson",
        phoneNumber: "555-555-5555",
        status: "Delivered",
        amount: 500,
        dueAmount: 0,
        paymentStatus: "Paid",
      },
      {
        no: 4,
        orderDate: "2022-03-22",
        deliveryDate: "2022-03-30",
        name: "Bob Brown",
        phoneNumber: "111-222-3333",
        status: "Manufacturing",
        amount: 350,
        dueAmount: 175,
        paymentStatus: "Pending",
      },
      {
        no: 5,
        orderDate: "2022-03-25",
        deliveryDate: "2022-04-01",
        name: "Emily Wilson",
        phoneNumber: "444-444-4444",
        status: "Delivered",
        amount: 200,
        dueAmount: 0,
        paymentStatus: "Paid",
      },
    ],
    []
  );

  const [orderPlacedCount, setOrderPlacedCount] = useState(0);
  const [processingCount, setProcessingCount] = useState(0);
  const [manufacturingCount, setManufacturingCount] = useState(0);
  const [dispatchCount, setDispatchCount] = useState(0);
  const [deliveredCount, setDeliveredCount] = useState(0);
  const [totalOrderCount, setTotalOrderCount] = useState(0);

  useEffect(() => {
    // Calculate the count for each status type
    const counts = {
      orderPlaced: 0,
      processing: 0,
      manufacturing: 0,
      dispatch: 0,
      delivered: 0,
    };

    testData.forEach((order) => {
      switch (order.status) {
        case "Order Placed":
          counts.orderPlaced++;
          break;
        case "Processing":
          counts.processing++;
          break;
        case "Manufacturing":
          counts.manufacturing++;
          break;
        case "Dispatch":
          counts.dispatch++;
          break;
        case "Delivered":
          counts.delivered++;
          break;
        default:
          break;
      }
    });

    setOrderPlacedCount(counts.orderPlaced);
    setProcessingCount(counts.processing);
    setManufacturingCount(counts.manufacturing);
    setDispatchCount(counts.dispatch);
    setDeliveredCount(counts.delivered);
    setTotalOrderCount(testData.length);
  }, [testData]);

  return (
    <>
      <div className="mt-4 border-t">
        <div className="flex justify-between border-b px-8 py-8 ">
          <p className="text-3xl font-bold ">ORDER MANAGEMENT</p>
          <button className="btn btn-accent">New Order</button>
        </div>
        <div className="flex mt-3 px-[30px] gap-5 border-b pb-2">
          <div className="card w-[200px] bg-red-500 shadow-xl -z-10">
            <div className="card-body">
              <h2 className="card-title text-white text-3xl">
                {orderPlacedCount}
              </h2>
              <p className="text-white">ORDER PLACED</p>
            </div>
          </div>
          <div className="card w-[200px] bg-blue-500 shadow-xl -z-10">
            <div className="card-body">
              <h2 className="card-title text-white text-3xl">
                {processingCount}
              </h2>
              <p className="text-white">PROCESSING</p>
            </div>
          </div>
          <div className="card w-[200px] bg-green-500 shadow-xl -z-10">
            <div className="card-body">
              <h2 className="card-title text-white text-3xl">
                {manufacturingCount}
              </h2>
              <p className="text-white">MANUFACTURING</p>
            </div>
          </div>
          <div className="card w-[200px] bg-yellow-500 shadow-xl -z-10">
            <div className="card-body">
              <h2 className="card-title text-white text-3xl">
                {dispatchCount}
              </h2>
              <p className="text-white">DISPATCH</p>
            </div>
          </div>
          <div className="card w-[200px] bg-orange-600 shadow-xl -z-10">
            <div className="card-body">
              <h2 className="card-title text-white text-3xl">
                {deliveredCount}
              </h2>
              <p className="text-white">DELIVERED</p>
            </div>
          </div>
          <div className="card w-[200px] bg-indigo-500 shadow-xl -z-10">
            <div className="card-body">
              <h2 className="card-title text-white text-3xl">
                {totalOrderCount}
              </h2>
              <p className="text-white">TOTAL ORDER</p>
            </div>
          </div>
        </div>
        <div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Order Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Delivery Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Phone Number
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Due Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Payment Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {testData.map((order, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-6 py-4 whitespace-nowrap">{order.no}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.orderDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.deliveryDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.phoneNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.dueAmount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.paymentStatus}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="dropdown dropdown-end h-1">
                      <div tabIndex={0} role="button" className="btn">
                        Action
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a>Edit</a>
                        </li>
                        <li>
                          <a>Delete</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderManagment;
