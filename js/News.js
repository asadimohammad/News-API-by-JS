class News{
    constructor(){
        this.apiKey = '8de98fcd99744bad9ae896ff1f39ad50'
    }
    async queryApi(name , country , category){
        let url = 'https://newsapi.org/v2/'

        if ( country !=='' || category !==''){
            url += 'top-headlines?'
        }else{
            url += 'everything?'
        }
        if ( name !==''){
            url += `q=${name}&`;
        }
        if ( country !=='') {
            url += `country=${country}&`
        }
        if ( category !=='') {
            url += `category=${category}&`
        }
        url += `apiKey=${this.apiKey}`
        const newsResponse =await fetch(url)
        const news = await newsResponse.json()
        return{
            news
        }
    }
}