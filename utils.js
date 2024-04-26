//  request to get all users

// --------------very important----------------
let token = null;
token = localStorage.getItem("token");
token = JSON.parse(token);

async function getAllUsers() {
  await fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    console.log(res);
  });
}

useEffect(() => {
  handleCreateUser();
}, []);

// request to create a new user

import { useEffect } from "react";

const data = {
  name: name,
  email: email,
  password: password,
  phone: phone,
};

async function handleCreateUser() {
  await fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log(res);
  });
}

// token has access_token, id, role.

// request to create a new car
const data = {
  model: model,
  year: year,
  description: description,
  price: price,
  image_url: image_url,
};
async function handleAddNewCar() {
  await fetch("http://localhost:8000/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log(res);
  });
}

// request to create a new car sell offer
const data = {
  car_id: car_id,
  offer_price: offer_price,
};
async function handleAddCarSellOffer() {
  await fetch("http://localhost:8000/cars/buyer/offer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log(res);
  });
}

// get offers on a specific car using car id
async function handleCarOffers() {
  await fetch(`http://localhost:8000/cars/offer/${car_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    console.log(res);
  });
}

// request to get all cars (From customers perspective)
useEffect(() => {
  fetch("http://localhost:8000/cars/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log(res);
  });
}, []);

// request to get cars up for sell (From sellers perspective)

useEffect(() => {
  fetch("http://localhost:8000/cars/mycars", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log(res);
  });
}, []);


// update offer status from seller
async function updateOfferStatus() {
  await fetch(`http://localhost:8000/cars/offer/${offer_id}?status=${accepted or rejected}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    console.log(res);
  });
}


// update offer status from buyer
async function updateOfferStatusFromBuyer() {
  await fetch(`http://localhost:8000/cars/offer/${offer_id}/buyer?status=${accepted or rejected}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    console.log(res); // if both agrees response will be ->  {"message" : "sold"}
    // redirect to payment confirmation page
  });
}