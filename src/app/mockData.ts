export const mockBeer = {
    id: 178,
    name: "Simcoe",
    tagline: "Single Hop India Pale Ale.",
    first_brewed: "01/2012",
    description: "A special release of our IPA is Dead series - IPA is Dead Simoce. Hopped to hell with citrusy bitter and aroma hops from the West Coast of the USA. Bitter, orange, mandarin, floral, this IPA showcases the best the west has to offer.",
    image_url: "https://images.punkapi.com/v2/178.png",
    abv: 6.7,
    ibu: 70,
    target_fg: 1012,
    target_og: 1063,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 81,
    volume: {
        value: 20,
        unit: "litres"
    },
    boil_volume: {
        value: 25,
        unit: "litres"
    },
    method: {
        mash_temp: [
            {
                temp: {
                    value: 65,
                    unit: "celsius"
                },
                duration: 75
            }
        ],
        fermentation: {
            temp: {
                value: 99,
                unit: "celsius"
            }
        },
        twist: null
    },
    ingredients: {
        malt: [
            {
                name: "Extra Pale",
                amount: {
                    value: 4.75,
                    unit: "kilograms"
                }
            },
            {
                name: "Caramalt",
                amount: {
                    value: 0.32,
                    unit: "kilograms"
                }
            },
            {
                name: "Dark Crystal",
                amount: {
                    value: 0.06,
                    unit: "kilograms"
                }
            },
            {
                name: "Munich",
                amount: {
                    value: 0.32,
                    unit: "kilograms"
                }
            }
        ],
        hops: [
            {
                name: "Simcoe",
                amount: {
                    value: 2.5,
                    unit: "grams"
                },
                add: "start",
                attribute: "bitter"
            },
            {
                name: "Simcoe",
                amount: {
                    value: 25,
                    unit: "grams"
                },
                add: "middle",
                attribute: "flavour"
            },
            {
                name: "Simcoe",
                amount: {
                    value: 37.5,
                    unit: "grams"
                },
                add: "end",
                attribute: "flavour"
            },
            {
                name: "Simcoe",
                amount: {
                    value: 250,
                    unit: "grams"
                },
                add: "dry hop",
                attribute: "aroma"
            }
        ],
        yeast: "Wyeast 1056 - American Ale™"
    },
    food_pairing: [
        "Beer roasted chicken",
        "Ham and pineapple pizza",
        "Chocolate cake drizzled with orange"
    ],
    brewers_tips: "Get the freshest Simcoe for the best profile.",
    contributed_by: "Sam Mason <samjbmason>"
};
