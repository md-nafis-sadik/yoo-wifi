import { images } from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    regionList: [
        {
            _id: 1,
            name: "Asia",
            value: "asia"
        },
        {
            _id: 2,
            name: "Europe",
            value: "europe"
        },
        {
            _id: 3,
            name: "America",
            value: "america"
        },
        {
            _id: 4,
            name: "Australia",
            value: "australia"
        },
        {
            _id: 5,
            name: "Africa",
            value: "africa"
        },
    ],
    countries: [
        {
            _id: 1,
            name: "France",
            image: images.FranceFlag,
            region: "Europe",
            value: "france",
        },
        {
            _id: 2,
            name: "Spain",
            image: images.SpainFlag,
            region: "Europe",
            value: "spain",
        },
        {
            _id: 3,
            name: "Italy",
            image: images.ItalyFlag,
            region: "Europe",
            value: "italy",
        },
        {
            _id: 4,
            name: "Germany",
            image: images.GermanyFlag,
            region: "Europe",
            value: "germany",
        },
        {
            _id: 5,
            name: "Greece",
            image: images.GreeceFlag,
            region: "Europe",
            value: "greece",
        },
        {
            _id: 6,
            name: "Belgium",
            image: images.BelgiumFlag,
            region: "Europe",
            value: "belgium",
        },
        {
            _id: 7,
            name: "Croatia",
            image: images.CroatiaFlag,
            region: "Europe",
            value: "croatia",
        },
        {
            _id: 8,
            name: "Ireland",
            image: images.IrelandFlag,
            region: "Europe",
            value: "ireland",
        },
        {
            _id: 9,
            name: "Sweden",
            image: images.SwedenFlag,
            region: "Europe",
            value: "sweden",
        },
        {
            _id: 10,
            name: "Switzerland",
            image: images.SwitzerlandFlag,
            region: "Europe",
            value: "switzerland",
        },
    ],
    packages: [
        {
            _id: 1,
            name: "Australia-Portable Hotspot",
            image: images.country1,
            priceStart: 25.49,
            priceEnd: 50.49,
            country: "spain",
            region: 'europe',
            type: "pocket-wifi",
            plan: "basic-daypass",
        },
        {
            _id: 2,
            name: "Albania-Portable Hotspot",
            image: images.country2,
            priceStart: 5.49,
            priceEnd: 20.49,
            region: 'europe',
            country: "italy",
            type: "pocket-wifi",
            plan: "5gb-7days",
        },
        {
            _id: 3,
            name: "France - Pocket Wifi",
            image: images.country3,
            priceStart: 5.49,
            priceEnd: 20.49,
            region: 'europe',
            country: "france",
            type: "pocket-wifi",
            plan: "20gb-20days",
        },
        {
            _id: 4,
            name: "Greece-Portable Hotspot",
            image: images.country4,
            priceStart: 25.49,
            priceEnd: 50.49,
            region: 'europe',
            country: "greece",
            type: "pocket-wifi",
            plan: "basic-daypass",
        },
        {
            _id: 5,
            name: "Ireland-Portable Hotspot",
            image: images.country5,
            priceStart: 5.49,
            priceEnd: 20.49,
            region: 'europe',
            country: "ireland",
            type: "pocket-wifi",
            plan: "5gb-7days",
        },
        {
            _id: 6,
            name: "Germany - Pocket Wifi",
            image: images.country6,
            priceStart: 5.49,
            priceEnd: 20.49,
            region: 'europe',
            country: "germany",
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