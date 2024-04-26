import { useState } from "react";
import Navbar from "../components/Navbar";
import { Modal, Table } from "antd";
import Column from "antd/es/table/Column";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Listings = () => {
  const [offerModal, setOfferModal] = useState(false);
  const cars = [
    {
      model: "Toyota Corolla",
      model2: "2023",
      description:
        "A reliable compact car known for its fuel efficiency and practicality.",
      price: 25000,
      year: 2023,
      image: "1.jpg",
    },
    {
      model: "BMW 3 Series",
      model2: "2024",
      description:
        "A luxury sedan with a sporty driving experience and cutting-edge technology.",
      price: 45000,
      year: 2024,
      image: "2.jpg",
    },
    {
      model: "Honda Civic",
      model2: "2023",
      description:
        "A popular compact car offering reliability and affordability.",
      price: 22000,
      year: 2023,
      image: "3.jpg",
    },
    {
      model: "Ford Mustang",
      model2: "2024",
      description:
        "An iconic American muscle car known for its powerful performance and sleek design.",
      price: 38000,
      year: 2024,
      image: "4.jpg",
    },
    {
      model: "Mercedes-Benz E-Class",
      model2: "2024",
      description:
        "A luxurious and sophisticated executive sedan with advanced comfort features.",
      price: 60000,
      year: 2024,
      image: "5.jpg",
    },
  ];
  const offers = [
    {
      id: 1,
      name: "John Doe",
      offer_price: 23000,
    },
    {
      id: 2,
      name: "Emily Smith",
      offer_price: 26000,
    },
    {
      id: 3,
      name: "Michael Johnson",
      offer_price: 21000,
    },
    {
      id: 4,
      name: "Sophia Williams",
      offer_price: 24500,
    },
    {
      id: 5,
      name: "Christopher Brown",
      offer_price: 25500,
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        <div className="grid grid-cols-3 px-16 gap-8 my-8">
          {cars.map((car, id) => {
            return (
              <div key={id} className="rounded-md shadow-md">
                <div
                  className="rounded-md rounded-b-none"
                  style={{
                    backgroundImage: `url(src/assets/cars/${car.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px",
                  }}
                ></div>
                <div className="px-2 py-2">
                  <div className="flex justify-between items-center">
                    <p className="text-xdark text-xl font-bold">{car.model}</p>
                    <p className="text-xdark text-2xl">
                      ${parseInt(car.price) / 1000}K
                    </p>
                  </div>
                  <p className="text-xlightgray">
                    {car.description.length < 70
                      ? car.description
                      : car.description.slice(0, 70).concat("...")}
                  </p>
                </div>
                <button
                  onClick={() => setOfferModal(true)}
                  className="text-center py-3 bg-xdark text-white rounded-b-md w-full"
                >
                  View Offers
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Modal
        title="Offer List"
        centered
        open={offerModal}
        okButtonProps={{
          style: { display: "none" },
        }}
        onCancel={() => setOfferModal(false)}
      >
        <Table dataSource={offers} pagination={{ defaultPageSize: 5 }}>
          <Column title="Name" dataIndex="name" key="id" />
          <Column
            title="Price Offered"
            dataIndex="offer_price"
            key="id"
            render={(offer, record) => {
              return <div>{parseInt(record.offer_price) / 1000}K</div>;
            }}
          />
          <Column
            title="Action"
            dataIndex="action"
            key="id"
            render={() => {
              return (
                <div className="flex items-center gap-x-4">
                  <button className="flex text-green-600 items-center gap-x-1">
                    <FaCheck />
                    <div>Accept</div>
                  </button>
                  <button className="flex text-xred items-center gap-x-1">
                    <RxCross2 />
                    <div>Reject</div>
                  </button>
                </div>
              );
            }}
          />
        </Table>
      </Modal>
    </div>
  );
};

export default Listings;
