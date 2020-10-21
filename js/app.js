// Classes
let ui = new UI()
let newesApi = new News()

// EventListeners
EventListeners()
function EventListeners(){
    const submit = document.querySelector('#submitBtn')
    submit.addEventListener('click' , search)
}


// Functions
function search(e){
    e.preventDefault()
    const name = document.querySelector('#news-name').value
    const country = document.querySelector('#country').value
    const category = document.querySelector('#category').value
    
    if(name !=='' || country !=='' || category !==''){
        newesApi.queryApi(name , country , category)
        .then ((news) =>{
            const newsArray = news.news.articles
           if(newsArray.length > 0){
               ui.showResult(newsArray)
           }else{
            ui.printMessage('There is no result for your search' , 'alert alert-danger text-center mt-4') 
           }
            
        })
    }else{
        ui.printMessage('Please enter atleast one field' , 'alert alert-danger text-center mt-4')
    }
}