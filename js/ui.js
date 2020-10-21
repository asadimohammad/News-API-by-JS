class UI{
    constructor(){
        this.result = document.querySelector('#result')
    }
    printMessage(message , className){
        const div = document.createElement('div')
        div.className = className
        div.innerHTML = message
        const divMessage = document.querySelector('#message')
        divMessage.appendChild(div)
        setTimeout(() => {
            this.removeAlert()
        }, 3000);
    }
    removeAlert(){
       const alert = document.querySelector('.alert')
        if(alert){
        alert.remove()
        }
    }
    showResult(news){
        const div = document.createElement('div')
        div.className = 'row justify-content-md-center'
        news.forEach(newsInfo => {
            console.log(newsInfo);
            div.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title text-center">${newsInfo.title}</h2>
                            <p class="card-text">${newsInfo.description}</p>
                            <div class="text-center">
                                <span class="badge badge-success">Source: ${newsInfo.source.name}</span>
                                <span class="badge badge-success">Date & Time: ${newsInfo.publishedAt}</span>
                                <a href="${newsInfo.url}" class="btn btn-block btn-danger">Complete News</a>
                            </div>
                        </div>
                    </div>
                </div>
            `
            this.result.appendChild(div)
        });
    }
}