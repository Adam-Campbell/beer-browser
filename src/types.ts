export interface PersistenceMediator {
    save(data: Beer[]): void;
    load(): Beer[]
}

export interface Beer {
    id: number,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    image_url: string,
    abv: number,
    ibu: number,
    target_fg: number,
    target_og: number,
    ebc: number,
    srm: number,
    ph: number,
    attenuation_level: number,
    volume: Measure,
    boil_volume: Measure,
    method: {
        mash_temp: {
            temp: Measure,
            duration: number | null
        }[],
        fermentation: {
            temp: Measure,
        },
        twist: string | null
    },
    ingredients: {
        malt: Malt[],
        hops: Hops[],
        yeast: string
    },
    food_pairing: string[],
    brewers_tips: string,
    contributed_by: string
}

export interface Measure {
    value: number | null,
    unit: string
}

export interface Malt {
    name: string,
    amount: Measure
}

export interface Hops {
    name: string,
    amount: Measure, 
    add: string,
    attribute: string
}
