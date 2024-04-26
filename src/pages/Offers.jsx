import { Table } from "antd";
import Column from "antd/es/table/Column";
import Navbar from "../components/Navbar";

const Offers = () => {
  const colors = {
    accepted: "bg-green-600",
    rejected: "bg-red-600",
    pending: "bg-yellow-600",
  };
  const offers = [
    {
      model: "Toyota Camry",
      year: 2022,
      my_price: 28000,
      status: "accepted",
    },
    {
      model: "Honda Accord",
      year: 2021,
      my_price: 25000,
      status: "rejected",
    },
    {
      model: "Chevrolet Cruze",
      year: 2020,
      my_price: 20000,
      status: "pending",
    },
    {
      model: "Ford Fusion",
      year: 2019,
      my_price: 22000,
      status: "accepted",
    },
    {
      model: "Nissan Altima",
      year: 2018,
      my_price: 18000,
      status: "rejected",
    },
    {
      model: "Hyundai Sonata",
      year: 2017,
      my_price: 17000,
      status: "pending",
    },
    {
      model: "Kia Optima",
      year: 2016,
      my_price: 16000,
      status: "accepted",
    },
    {
      model: "Mazda6",
      year: 2015,
      my_price: 15000,
      status: "rejected",
    },
    {
      model: "Subaru Legacy",
      year: 2014,
      my_price: 14000,
      status: "pending",
    },
    {
      model: "Volkswagen Passat",
      year: 2013,
      my_price: 13000,
      status: "accepted",
    },
    {
      model: "Audi A6",
      year: 2012,
      my_price: 26000,
      status: "rejected",
    },
    {
      model: "BMW 5 Series",
      year: 2011,
      my_price: 28000,
      status: "pending",
    },
    {
      model: "Mercedes-Benz E-Class",
      year: 2010,
      my_price: 30000,
      status: "accepted",
    },
    {
      model: "Lexus GS",
      year: 2009,
      my_price: 32000,
      status: "rejected",
    },
    {
      model: "Jaguar XF",
      year: 2008,
      my_price: 34000,
      status: "pending",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="px-16 my-8">
        <Table dataSource={offers}>
          <Column title="Model" dataIndex="model" key="id" />
          <Column title="Year" dataIndex="year" key="id" />
          <Column
            title="My Price"
            dataIndex="my_price"
            key="id"
            render={(price) => {
              return <div>{parseInt(price) / 1000}K</div>;
            }}
          />
          <Column
            title="Status"
            dataIndex="status"
            key="id"
            render={(status) => {
              return (
                <div
                  className={`text-white ${colors[status]} rounded-full px-3 w-fit`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </div>
              );
            }}
          />
          <Column
            title="Action"
            dataIndex="action"
            key="id"
            render={(status, record) => {
              return (
                record.status === "accepted" && (
                  <button className="border border-green-600 text-green-600 rounded-md px-3 py-1 hover:bg-green-600 hover:text-white transition-all duration-200">
                    Accept
                  </button>
                )
              );
            }}
          />
        </Table>
      </div>
    </div>
  );
};

export default Offers;
