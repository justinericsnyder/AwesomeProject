interface DataDragonImage {
    full: string,
    group: string,
    h: number,
    sprite: string,
    w: number,
    x: number,
    y: number
}

interface ChampionInfo {
    attack: number,
    defense: number,
    difficulty: number,
    magic: number
}

interface ChampionPassive {
    description: string,
    image: DataDragonImage,
    name: string
}

interface Item {
    count: number,
    hideCount: boolean,
    id: string
}

interface ChampionBlock {
    hideIfSummonerSpell: string,
    items: Item[],
    maxSummonerLevel: number,
    minSummonerLevel: number,
    recMath: boolean,
    recSteps: boolean,
    ShowIfSummonerSpell: string,
    type: string
}

interface ChampionRecommended {
    blocks: ChampionBlock[],
    champion: string,
    customPanel: null | any,
    customTag: string,
    extensionPage: boolean,
    map: string,
    mode: string,
    title: string,
    type: string,
}

interface ChampionSkins {
    chromas: boolean,
    id: string,
    name: string,
    num: number
}


interface ChampionSpell {
    cooldown: number[],
    cooldownBurn: string,
    cost: number[],
    costBurn: string,
    costType: string,
    datavalues: object,
    description: string,
    effect: Array<Array<number>>,
    effectBurn: Array<null | string>,
    id: string,
    image: DataDragonImage,
    leveltip: {
        effect: string[],
        label: string[]
    },
    maxammo: string,
    name: string,
    range: number[],
    rangeBurn: string,
    resource: string,
    tooltip: string,
    vars: {
        coeff: number,
        key: string,
        link: string
    }[]
}

interface ChampionStats {
    armor: number,
    armorperlevel: number,
    attackdamage: number,
    attackdamageperlevel: number,
    attackrange: number,
    attackspeed: number,
    attackspeedperlevel: number,
    crit: number,
    critperlevel: number,
    hp: number,
    hpperlevel: number,
    hpregen: number,
    hpregenperlevel: number,
    movespeed: number,
    mp: number,
    mpperlevel: number,
    mpregen: number,
    mpregenperlevel: number,
    spellblock: number,
    spellblockperlevel: number
}

export interface ChampionData {
    name: ReactNode;
    allytips: string[],
    blurb: string,
    enemytips: string[],
    id: string,
    image: DataDragonImage,
    info: ChampionInfo,
    key: string,
    lore: string,
    partype: string,
    passive: ChampionPassive,
    recommended: ChampionRecommended[],
    skins: ChampionSkins[],
    spells: ChampionSpell[],
    stats: ChampionStats,
    tags: string[],
    title: string
}

export interface ChampionDataResponse {
    data: ChampionData,
    format: string,
    type: string,
    version: string
}