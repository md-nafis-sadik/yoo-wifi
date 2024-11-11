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
            "id": 75,
            "iso3": "FRA",
            "iso2": "FR",
            "numeric_code": "250",
            "phone_code": "33",
            "capital": "Paris",
            "currency": "EUR",
            "currency_name": "Euro",
            "currency_symbol": "€",
            "tld": ".fr",
            "native": "France",
            "subregion": "Western Europe",
            "latitude": "46.00000000",
            "longitude": "2.00000000",
            "emoji": "🇫🇷"
        },
        {
            _id: 2,
            name: "Spain",
            image: images.SpainFlag,
            region: "Europe",
            value: "spain",
            "id": 207,
            "iso3": "ESP",
            "iso2": "ES",
            "numeric_code": "724",
            "phone_code": "34",
            "capital": "Madrid",
            "currency": "EUR",
            "currency_name": "Euro",
            "currency_symbol": "€",
            "tld": ".es",
            "native": "España",
            "subregion": "Southern Europe",
            "latitude": "40.00000000",
            "longitude": "-4.00000000",
            "emoji": "🇪🇸"
        },
        {
            _id: 3,
            name: "Italy",
            image: images.ItalyFlag,
            region: "Europe",
            value: "italy",
            "id": 107,
            "iso3": "ITA",
            "iso2": "IT",
            "numeric_code": "380",
            "phone_code": "39",
            "capital": "Rome",
            "currency": "EUR",
            "currency_name": "Euro",
            "currency_symbol": "€",
            "tld": ".it",
            "native": "Italia",
            "subregion": "Southern Europe",
            "latitude": "42.83333333",
            "longitude": "12.83333333",
            "emoji": "🇮🇹"
        },
        {
            _id: 4,
            name: "Germany",
            image: images.GermanyFlag,
            region: "Europe",
            value: "germany",
            "id": 82,
            "iso3": "DEU",
            "iso2": "DE",
            "numeric_code": "276",
            "phone_code": "49",
            "capital": "Berlin",
            "currency": "EUR",
            "currency_name": "Euro",
            "currency_symbol": "€",
            "tld": ".de",
            "native": "Deutschland",
            "subregion": "Western Europe",
            "latitude": "51.00000000",
            "longitude": "9.00000000",
            "emoji": "🇩🇪"
        },
        {
            _id: 5,
            name: "Greece",
            image: images.GreeceFlag,
            region: "Europe",
            value: "greece",
            "id": 85,
            "iso3": "GRC",
            "iso2": "GR",
            "numeric_code": "300",
            "phone_code": "30",
            "capital": "Athens",
            "currency": "EUR",
            "currency_name": "Euro",
            "currency_symbol": "€",
            "tld": ".gr",
            "native": "Ελλάδα",
            "subregion": "Southern Europe",
            "latitude": "39.00000000",
            "longitude": "22.00000000",
            "emoji": "🇬🇷"
        },
        {
            _id: 6,
            name: "Belgium",
            image: images.BelgiumFlag,
            region: "Europe",
            value: "belgium",
            "id": 22,
            "iso3": "BEL",
            "iso2": "BE",
            "numeric_code": "056",
            "phone_code": "32",
            "capital": "Brussels",
            "currency": "EUR",
            "currency_name": "Euro",
            "currency_symbol": "€",
            "tld": ".be",
            "native": "België",
            "subregion": "Western Europe",
            "latitude": "50.83333333",
            "longitude": "4.00000000",
            "emoji": "🇧🇪"
        },
        {
            _id: 7,
            name: "Croatia",
            image: images.CroatiaFlag,
            region: "Europe",
            value: "croatia",
            "id": 55,
            "iso3": "HRV",
            "iso2": "HR",
            "numeric_code": "191",
            "phone_code": "385",
            "capital": "Zagreb",
            "currency": "HRK",
            "currency_name": "Croatian kuna",
            "currency_symbol": "kn",
            "tld": ".hr",
            "native": "Hrvatska",
            "subregion": "Southern Europe",
            "latitude": "45.16666666",
            "longitude": "15.50000000",
            "emoji": "🇭🇷"
        },
        {
            _id: 8,
            name: "Ireland",
            image: images.IrelandFlag,
            region: "Europe",
            value: "ireland",
            "id": 105,
            "iso3": "IRL",
            "iso2": "IE",
            "numeric_code": "372",
            "phone_code": "353",
            "capital": "Dublin",
            "currency": "EUR",
            "currency_name": "Euro",
            "currency_symbol": "€",
            "tld": ".ie",
            "native": "Éire",
            "subregion": "Northern Europe",
            "latitude": "53.00000000",
            "longitude": "-8.00000000",
            "emoji": "🇮🇪"
        },
        {
            _id: 9,
            name: "Sweden",
            image: images.SwedenFlag,
            region: "Europe",
            value: "sweden",
            "id": 213,
            "iso3": "SWE",
            "iso2": "SE",
            "numeric_code": "752",
            "phone_code": "46",
            "capital": "Stockholm",
            "currency": "SEK",
            "currency_name": "Swedish krona",
            "currency_symbol": "kr",
            "tld": ".se",
            "native": "Sverige",
            "subregion": "Northern Europe",
            "latitude": "62.00000000",
            "longitude": "15.00000000",
            "emoji": "🇸🇪"
        },
        {
            _id: 10,
            name: "Switzerland",
            image: images.SwitzerlandFlag,
            region: "Europe",
            value: "switzerland",
            "id": 214,
            "iso3": "CHE",
            "iso2": "CH",
            "numeric_code": "756",
            "phone_code": "41",
            "capital": "Bern",
            "currency": "CHF",
            "currency_name": "Swiss franc",
            "currency_symbol": "CHf",
            "tld": ".ch",
            "native": "Schweiz",
            "subregion": "Western Europe",
            "latitude": "47.00000000",
            "longitude": "8.00000000",
            "emoji": "🇨🇭"
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
            details: [
                {
                    title: "Description",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
                {
                    title: "Information",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
                {
                    title: "Terms & Conditions",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
            ],
            id: 1,
            title: "Basic Package",
            features: [
                "Keep Yoowifi Device",
                "Top-up Plan only",
                "365 Days Validity",
                "Covers 90 Countries",
            ],
            category: "daily",
            planCode: "plan_1",
            dataSize: 3,
            packPrice: 10,
            validity: 30,
            desc: "GB",
            coverage: [
                "Algeria", "Anguilla", "Antigua and Barbuda", "Argentina", "Aruba", "Azerbaijan", "Bolivia", "Brazil", "British Virgin Islands", "Chile", "Colombia", "Costa Rica"
            ],
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
            details: [
                {
                    title: "Description",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
                {
                    title: "Information",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
                {
                    title: "Terms & Conditions",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
            ],
            id: 2,
            title: "Traveler Package",
            features: [
                "Keep Yoowifi Device",
                "Top-up Plan only",
                "365 Days Validity",
                "Covers 90 Countries",
            ],
            category: "daily",
            planCode: "plan_2",
            dataSize: 3,
            packPrice: 10,
            validity: 30,
            desc: "GB",
            coverage: [
                "Algeria", "Anguilla", "Antigua and Barbuda", "Argentina", "Aruba", "Azerbaijan", "Bolivia", "Brazil", "British Virgin Islands", "Chile", "Colombia", "Costa Rica"
            ],
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
            details: [
                {
                    title: "Description",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
                {
                    title: "Information",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
                {
                    title: "Terms & Conditions",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
            ],
            id: 3,
            title: "Extended Package",
            features: [
                "Keep Yoowifi Device",
                "Top-up Plan only",
                "365 Days Validity",
                "Covers 90 Countries",
            ],
            category: "daily",
            planCode: "plan_3",
            dataSize: 3,
            packPrice: 10,
            validity: 30,
            desc: "GB",
            coverage: [
                "Algeria", "Anguilla", "Antigua and Barbuda", "Argentina", "Aruba", "Azerbaijan", "Bolivia", "Brazil", "British Virgin Islands", "Chile", "Colombia", "Costa Rica"
            ],
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
            details: [
                {
                    title: "Description",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
                {
                    title: "Information",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
                {
                    title: "Terms & Conditions",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
            ],
            id: 4,
            title: "Unlimited Package",
            features: [
                "Keep Yoowifi Device",
                "Top-up Plan only",
                "365 Days Validity",
                "Covers 90 Countries",
            ],
            category: "daily",
            planCode: "plan_4",
            dataSize: 3,
            packPrice: 10,
            validity: 30,
            desc: "GB",
            coverage: [
                "Algeria", "Anguilla", "Antigua and Barbuda", "Argentina", "Aruba", "Azerbaijan", "Bolivia", "Brazil", "British Virgin Islands", "Chile", "Colombia", "Costa Rica"
            ],
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
            details: [
                {
                    title: "Description",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
                {
                    title: "Information",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
                {
                    title: "Terms & Conditions",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
            ],
            id: 5,
            title: "Lite Package",
            features: [
                "Keep Yoowifi Device",
                "Top-up Plan only",
                "180 Days Validity",
                "Covers 60 Countries",
            ],
            category: "monthly",
            planCode: "plan_5",
            dataSize: 3,
            packPrice: 10,
            validity: 30,
            desc: "GB",
            coverage: [
                "Algeria", "Anguilla", "Antigua and Barbuda", "Argentina", "Aruba", "Azerbaijan", "Bolivia", "Brazil", "British Virgin Islands", "Chile", "Colombia", "Costa Rica"
            ],
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
            details: [
                {
                    title: "Description",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
                {
                    title: "Information",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
                {
                    title: "Terms & Conditions",
                    info: <>
                        BASIC Daypass
                        <ul className="list-disc list-inside">
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                        <br />
                        ****************OR****************SUPER Daypass
                        <br />
                        <ul>
                            <li>Enjoy Unlimited Data Freedom</li>
                            <li>1GB on high-speed daily</li>
                            <li>For as low as SGD$2.90/day</li>
                        </ul>
                    </>
                },
            ],
            id: 6,
            title: "Business Package",
            features: [
                "Keep Yoowifi Device",
                "Top-up Plan only",
                "365 Days Validity",
                "Priority support",
                "Covers 100 Countries",
            ],
            category: "volumn",
            planCode: "plan_6",
            dataSize: 3,
            packPrice: 10,
            validity: 30,
            desc: "GB",
            coverage: [
                "Algeria", "Anguilla", "Antigua and Barbuda", "Argentina", "Aruba", "Azerbaijan", "Bolivia", "Brazil", "British Virgin Islands", "Chile", "Colombia", "Costa Rica"
            ],
        },
    ]
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
});

export default countrySlice.reducer;
