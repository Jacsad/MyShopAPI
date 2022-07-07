function drawSite  (data) {
    let container = document.querySelector('.container');
    for(let i = 0; i <  data.arrayOfProducts.length; i++){
        var wrapper = document.createElement('div');
        wrapper.className="product";

        var titleWrapper = document.createElement('div');
        titleWrapper.className="title";
        titleWrapper.innerHTML = data.arrayOfProducts[i].name;

        var imgWrapper = document.createElement('img');
        imgWrapper.className="img";
        imgWrapper.src = data.arrayOfProducts[i].imgUrl;


        var button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'Click me';
        if(data.arrayOfProducts[i].discount) {
            button.onclick = function() {
                fetch("http://localhost:3001/discount/").then(data =>{
                    data.json().then(data => alert(data.message))
                })
            };
        }

        wrapper.append(titleWrapper);
        wrapper.append(imgWrapper);
        wrapper.append(button);
        container.appendChild(wrapper);
    }

}


fetch("http://localhost:3001/products").then(response =>  response.json()).then(data =>drawSite(data))
