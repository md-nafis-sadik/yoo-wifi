import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    regionList: [
        {
            _id: 1,
            name: "Asia",
        },
        {
            _id: 2,
            name: "Europe",
        },
        {
            _id: 3,
            name: "America",
        },
        {
            _id: 4,
            name: "Australia",
        },
        {
            _id: 5,
            name: "Africa",
        },
    ],
};

const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {},
});

export default countrySlice.reducer;