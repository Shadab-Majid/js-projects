var arr = [
    {dp:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D", status:"https://images.unsplash.com/photo-1615789591457-74a63395c990?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" },
    {dp:"https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D", status:"https://images.unsplash.com/photo-1571618604708-7646a634db93?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFycm90fGVufDB8fDB8fHww", status:"https://images.unsplash.com/photo-1496287437689-3c24997cca99?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"},
    {dp:"https://images.unsplash.com/photo-1652596867150-580e77192022?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status: "https://images.unsplash.com/photo-1644702749357-c44a84fad540?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"}
]
var stories_div = document.querySelector("#stories")
let status_content = ""
arr.forEach(function(val, idx) {
    status_content += `<div class="story">
                        <img id="${idx}" src=${val.dp} alt="">
                    </div>`
})

stories_div.innerHTML = status_content

stories_div.addEventListener("click", function(dets) {
    console.log(arr[dets.target.id].status)
    document.querySelector('.full-screen').style.display = "block"
    document.querySelector('.full-screen').style.backgroundImage = `url(${arr[dets.target.id].status})`

    setTimeout(function(){
        document.querySelector('.full-screen').style.display = "none"
    },2000)

})

