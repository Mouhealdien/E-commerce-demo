import { createSlice } from "@reduxjs/toolkit";
import p1 from "../../assets/products/p1.jpg";
import p2 from "../../assets/products/p2.jpg";
import p3 from "../../assets/products/p3.jpg";
import p4 from "../../assets/products/p4.jpg";
const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [
      {
        id: "44584",
        url: p1,
        name: "Lenovo Legion Slim 5",
        price: "1200",
        description:
          "Lenovo Legion Slim 5 14APH8, Gaming Laptop, 14.5 WQXGA+ Display, AMD Ryzen R7-7840HS, 32GB RAM, 1TB SSD, NVIDIA® GeForce RTX™ 4060 8GB GDDR6, Win11, Storm Grey - [82Y50029AX]",
      },

      {
        id: "447784687",
        url: p2,
        name: "Xiaomi Redmi Note 13",
        price: "400",
        description:
          "Xiaomi Redmi Note 13 (Midnight Black 8GB RAM, 256 Storage) - Super-clear 108MP triple camera |120Hz FHD+AMOLED display | Immersive viewing with ultra-thin bezels",
      },
      {
        id: "44776844637",
        url: p3,
        name: "Jippofu 67W Type C Fast Charger",
        price: "20",
        description:
          "Jippofu 67W Type C Fast Charger for Xiaomi Mi 14 13 12 12t 12s 10 Pro Lite Redmi Note K60 K50 11 11s 12 Pro Poco F5 X5 F4 X4 Gt Black Shark 3 4 5 Pro Charging Adapter with USB C Cable",
      },
      {
        id: "4477313547",
        url: p4,
        name: "HUAWEI FreeBuds SE 2",
        price: "80",
        description:
          "HUAWEI FreeBuds SE 2, 40-Hour Battery Life, Compact and Comfortable to Grip, 3 Hours of Music Playback on a 10-Minute Charge, IP54 Dust & Splash Resistance, Robust Bluetooth 5.3 Connections, White",
      },
    ],
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },

    addProduct: (state, action) => {
      const newProduct = {
        id: String(Math.floor(1000000000 + Math.random() * 9000000000)),
        ...action.payload,
      };
      state.items.push(newProduct);
    },
  },
});

export const getProductById = (state, productId) =>
  state.products.items.find((i) => i.id === productId);

export const { setProducts, addProduct } = productsSlice.actions;

export default productsSlice.reducer;
