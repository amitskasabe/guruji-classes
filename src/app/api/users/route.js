// pages/api/myroute.js

import { connectionStr } from "@/app/util/db";
import mongoose from "mongoose";

mongoose.connect(connectionStr);

const User = mongoose.model("User"); // Assuming you have a User model

export async function POST(req, res) {
  try {
    // Access the request body
    const { email, password } = req.body;

    // Log the user data (you can replace this with your specific logic)
    console.log("Received user data:", { email, password });

    // Your additional logic for handling the user data

    // Respond with a success message or appropriate data
    res.status(200).json({ message: "User data received successfully" });
  } catch (error) {
    console.error("Error handling POST request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

/**
 *
 * Product based company
 *
 * Service based company
 *
 *
 */

/**
 *
 * C++
 * DSA - Data Structures and Algorithms
 * HTML , CSS , JavaScript - CSS - BOOTSTRAP , Tailwind css
 * React Js , Next js , express js , Node js
 * Mongo DB - MERN
 * API - REST API , SOAP API , context api
 * authentication , authorization , GraphQL ,Git & Docker
 * Portfolio , Insta clone - React
 * Operating system - Linux 
 * Networking - Basic
 * Aptitude , logic reasoing , cognitive ability 
 * 
 *
 *
 *
 *
 */
