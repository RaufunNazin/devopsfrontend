import { Modal } from "antd";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const DetailsCar = () => {
  const { state } = useLocation();
  const [offerModal, setOfferModal] = useState(false);
  const placeOffer = () => {};
  return (
    <div>
      <Navbar />
      <div className="px-16 my-4">
        <div className="grid grid-cols-9 gap-x-2 items-center">
          <div
            className="rounded-md my-4 col-span-6"
            style={{
              backgroundImage: `url(src/assets/cars/${state.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80vh",
            }}
          ></div>
          <div className="col-span-3 flex flex-col justify-between h-[80vh]">
            <div className="flex flex-col gap-y-8">
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold text-xdark uppercase">
                  {state.model}
                </div>
              </div>
              <div className="w-full whitespace-normal text-xlightgray break-all">
                {state.description}
              </div>
              <div className="flex justify-between items-center flex-row-reverse">
                <p className="line-through text-xred text-lg -mb-2">
                  {(parseInt(state.price) / 1000) * 1.5}K
                </p>
                <p className="text-xdark text-4xl">
                  ${parseInt(state.price) / 1000}K
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={() => {
                  setOfferModal(true);
                }}
                className="text-center py-3 bg-xdark text-white rounded-md border border-xdark w-full"
              >
                Send your offer
              </button>
            </div>
          </div>
        </div>
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

export default DetailsCar;
