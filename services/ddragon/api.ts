import axios from 'axios'
import { get } from 'lodash'
import { ChampionDataResponse, ChampionData } from './interfaces'

const DDRAGONBASEURL = 'http://ddragon.leagueoflegends.com/cdn'

const getLastApiVersion = async () => {
    const versionsUrl = 'https://ddragon.leagueoflegends.com/api/versions.json'
    const lastVersion = await axios.get<string[]>(versionsUrl).then(response => {
        return response.data[0]
    })
    return lastVersion
}

const lattestVersion = getLastApiVersion()

const DefaultAPI = () => {
    return axios.create({
        baseURL: DDRAGONBASEURL
    })
}

export const getAllChampionsNames = async () => {
    const version = await lattestVersion
    const championsListPath = `/${version}/data/en_US/champion.json`

    const api = DefaultAPI()
    const responseData = await api.get(championsListPath).then(response => {
        return response.data
    }).catch(error => {
        return error
    })
    return responseData
}

export const getDetailOf = async (champion: string) => {
    const version = await lattestVersion
    const championDetailPath = `/${version}/data/en_US/champion/${champion}.json`

    const api = DefaultAPI()
    const responseData: ChampionDataResponse = await api.get<ChampionDataResponse>(championDetailPath).then(response => {
        return {
            data: get(response.data.data, champion) as ChampionData,
            format: response.data.format,
            type: response.data.type,
            version: response.data.version,
        }
    }).catch(error => {
        return error
    })
    return responseData
}

export const getSplashArtUrlOf = (champion: string) => {
    return `${DDRAGONBASEURL}/img/champion/splash/${champion}_0.jpg`
}
