import React from "react";
import axios from "axios";

export const getCart = () => {
  return axios.get('https://624fd576f0ae10a8ea4fba2f.mockapi.io/Items').then((response) => {
    return response.data
  }) 
}
