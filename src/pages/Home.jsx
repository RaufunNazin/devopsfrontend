import { useState } from "react";
import Navbar from "../components/Navbar";
import { Modal } from "antd";

const Home = () => {
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
    {
      model: "Chevrolet Silverado",
      model2: "2023",
      description:
        "A rugged and capable full-size pickup truck suitable for work and leisure activities.",
      price: 35000,
      year: 2023,
      image: "6.jpg",
    },
    {
      model: "Volkswagen Golf",
      model2: "2023",
      description:
        "A versatile hatchback known for its practicality, comfort, and driving dynamics.",
      price: 24000,
      year: 2023,
      image: "7.jpg",
    },
    {
      model: "Tesla model2 S",
      model2: "2024",
      description:
        "An all-electric luxury sedan with cutting-edge technology and impressive performance.",
      price: 80000,
      year: 2024,
      image: "8.jpg",
    },
    {
      model: "Audi A4",
      model2: "2024",
      description:
        "A refined and elegant compact executive sedan known for its luxurious interior and smooth ride.",
      price: 50000,
      year: 2024,
      image: "9.jpg",
    },
    {
      model: "Subaru Outback",
      model2: "2023",
      description:
        "A rugged and versatile crossover SUV with all-wheel drive capability and spacious interior.",
      price: 32000,
      year: 2023,
      image: "10.jpg",
    },
  ];

  const placeOffer = () => {};

  return (
    <div>
      <Navbar />
      <div className="relative my-8 border mx-16 p-5 rounded-md shadow-md shadow-xlightestgray">
        <div className="absolute -top-3.5 bg-white px-2 text-xlightgray">
          Sell your unused cars
        </div>
        <div className="grid grid-cols-3 gap-x-4 mb-4">
          <input
            type="text"
            placeholder="Model"
            className="outline-none border px-2 py-0.5 rounded-md w-full"
          />
          <input
            type="number"
            placeholder="Year"
            className="outline-none border px-2 py-0.5 rounded-md w-full"
          />
          <input
            type="number"
            placeholder="Price"
            className="outline-none border px-2 py-0.5 rounded-md w-full"
          />
        </div>
        <textarea
          type="text"
          placeholder="Description"
          className="outline-none border px-2 py-0.5 rounded-md w-full"
        />
        <div className="flex justify-end mt-2">
          <button className="bg-xdark text-white px-5 py-1 rounded-md">
            Post
          </button>
        </div>
      </div>

      <div className="text-center text-xl text-xlightgray mt-5 mb-2">
        Browse featured cars
      </div>
      <div className="grid grid-cols-3 px-16 gap-8 mb-8">
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
                <p className="text-xdark text-xl font-bold">{car.model}</p>
                <p className="text-xlightgray">
                  {car.description.length < 70
                    ? car.description
                    : car.description.slice(0, 70).concat("...")}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <p className="line-through text-xred text-xs -mb-2">
                      {Math.max(parseInt(car.price) / 1000) * 1.5}K
                    </p>
                    <p className="text-xdark text-2xl">
                      ${Math.max(parseInt(car.price) / 1000)}K
                    </p>
                  </div>
                  <div className="text-green-500">
                    <p className="text-xs -mb-2 text-right">save</p>
                    <p className="text-2xl">33%</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setOfferModal(true);
                }}
                className="text-center py-3 bg-xdark text-white rounded-b-md w-full"
              >
                Send your offer
              </button>
            </div>
          );
        })}
      </div>
      <Modal
        title="Place Offer"
        centered
        open={offerModal}
        onOk={() => placeOffer()}
        onCancel={() => setOfferModal(false)}
      >
        <input
          type="number"
          placeholder="Enter Your Price"
          className="outline-none border px-2 py-0.5 rounded-md w-full"
        />
      </Modal>
    </div>
  );
};

export default Home;
