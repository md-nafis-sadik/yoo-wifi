import { images } from "@/services";
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
    countries: [
        {
            _id: 1,
            name: "France",
            image: images.FranceFlag,
            region: "Europe"
        },
        {
            _id: 2,
            name: "Spain",
            image: images.SpainFlag,
            region: "Europe"
        },
        {
            _id: 3,
            name: "Italy",
            image: images.ItalyFlag,
            region: "Europe"
        },
        {
            _id: 4,
            name: "Germany",
            image: images.GermanyFlag,
            region: "Europe"
        },
        {
            _id: 5,
            name: "Greece",
            image: images.GreeceFlag,
            region: "Europe"
        },
        {
            _id: 6,
            name: "Belgium",
            image: images.BelgiumFlag,
            region: "Europe"
        },
        {
            _id: 7,
            name: "Croatia",
            image: images.CroatiaFlag,
            region: "Europe"
        },
        {
            _id: 8,
            name: "Ireland",
            image: images.IrelandFlag,
            region: "Europe"
        },
        {
            _id: 9,
            name: "Sweden",
            image: images.SwedenFlag,
            region: "Europe"
        },
        {
            _id: 10,
            name: "Switzerland",
            image: images.SwitzerlandFlag,
            region: "Europe"
        },
    ],
    packages: [
        {
            _id: 1,
            name: "Australia-Portable Hotspot",
            image: images.country1,
            priceStart: 25.49,
            priceEnd: 50.49,
            country: "Spain",
            type: "pocket-wifi",
            plan: "basic-daypass",
        },
        {
            _id: 2,
            name: "Albania-Portable Hotspot",
            image: images.country2,
            priceStart: 5.49,
            priceEnd: 20.49,
            country: "Italy",
            type: "pocket-wifi",
            plan: "5gb-7days",
        },
        {
            _id: 3,
            name: "France - Pocket Wifi",
            image: images.country3,
            priceStart: 5.49,
            priceEnd: 20.49,
            country: "France",
            type: "pocket-wifi",
            plan: "20gb-20days",
        },
        {
            _id: 4,
            name: "Greece-Portable Hotspot",
            image: images.country4,
            priceStart: 25.49,
            priceEnd: 50.49,
            country: "Greece",
            type: "pocket-wifi",
            plan: "basic-daypass",
        },
        {
            _id: 5,
            name: "Ireland-Portable Hotspot",
            image: images.country5,
            priceStart: 5.49,
            priceEnd: 20.49,
            country: "Ireland",
            type: "pocket-wifi",
            plan: "5gb-7days",
        },
        {
            _id: 6,
            name: "Germany - Pocket Wifi",
            image: images.country6,
            priceStart: 5.49,
            priceEnd: 20.49,
            country: "Germany",
            type: "pocket-wifi",
            plan: "20gb-20days",
        },
    ]
};

const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {},
});

export default countrySlice.reducer;