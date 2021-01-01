var updateBtns = document.getElementsByClassName('update-cart');

for (var i=0;i<updateBtns.length;i++){
    updateBtns[i].addEventListener('click',function(){
        var productId = this.dataset.product;
        var action = this.dataset.action;
        console.log('productId:',productId,'Action:', action);
        console.log('USER:', user)
        if(user === 'AnonymousUser'){
            console.log('Not Logged In')
        }else{
            updateUserOrder(productId,action).then(data=>{
                console.log('data:',data)
                location.reload()
            })
        }
    })
}

const updateUserOrder = async (productId, action)=>{
    console.log('User us Logged In, Sending Data')
    var url = '/update_item/'
    let response = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({
            'productId':productId,
            'action':action
        })
    })
    let data = await response.json()
    return data
}