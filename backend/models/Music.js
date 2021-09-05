import { run, all } from '../database/sqLiteFunctions.js'
import fetch from 'node-fetch'


export const Music = {

    SearchAll: async ({ searchString } = {} ) => {
        
        try {

            const res = await fetch(`https://yt-music-api.herokuapp.com/api/yt/songs/${searchString}`)
            const data = await res.json()
            return data
            
        } catch (error) {
            return error
        }
    },


    SearchSongs: async ({ searchString } = {} ) => {
        
        try {

            const res = await fetch(`https://yt-music-api.herokuapp.com/api/yt/songs/${searchString}`)
            const data = await res.json()
            return data
            
        } catch (error) {
            return error
        }
    }


}
