const rss="https://api.rss2json.com/v1/api.json?rss_url=https://www.espncricinfo.com/rss/content/story/feeds/0.xml"

fetch(rss)

.then(res=>res.json())

.then(data=>{

let output=""

data.items.forEach(item=>{

output+=`

<div class="card">

<a href="${item.link}" target="_blank">

${item.title}

</a>

</div>

`

})

document.getElementById("news").innerHTML=output

})
