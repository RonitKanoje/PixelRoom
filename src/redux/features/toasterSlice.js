import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const toasterSlice = createSlice({
  name: "toaster",
  initialState: {},
  reducers: {
    addToToast: () => {
      toast.success("Added to Collection ✅", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
    removeToast: () => {
      toast.error("Removed from Collection", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
  },
});

export const { addToToast, removeToast } = toasterSlice.actions;

export default toasterSlice.reducer;
