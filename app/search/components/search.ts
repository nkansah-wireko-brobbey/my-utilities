
const SEARCH_URL = 'https://dummyjson.com/products/search' // This is a public api. Add to .env if using in prod.

// interface searchResult{

// }


export const search = async (searchText: string, options?:{
    limit?: number,
    skip?: number
})=>{
    const url = new URL(SEARCH_URL)
        url.searchParams.set("q",searchText)
        if (options?.limit) url.searchParams.set("limit", options.limit.toString())
        if (options?.skip) url.searchParams.set("skip", options.skip?.toString())
        const response = await fetch(url)

        if (!response.status) throw new Error(response.statusText)
    return response.json()
}