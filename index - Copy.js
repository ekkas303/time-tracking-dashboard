const articles = document.querySelector("article")
const daily = document.querySelector("#daily")
const weekly = document.querySelector("#weekly")
const monthly = document.querySelector("#monthly")


fetch("/data.json")
.then((response) => {
  return response.json();
})
.catch((err) => {
  console.log(err);
})
.then((data) => {
  console.log(data);


articles.forEach((stats,info)=>{
const current = stats.querySelector(".times")
const previous = stats.querySelector(".previous_time")

current.textContent = `${data[info].timeframes.weekly.current}hrs`
previous.textContent = `Last Week ${data[info].timeframes.weekly.previous}hrs`
})});

daily.addEventListener("click",() => {
daily.classList.add("active")
weekly.classList.remove("active")
monthly.classList.remove("active")

articles.forEach((stats,info)=>{
  const current = stats.querySelector(".times")
  const previous = stats. querySelector(".previous_time")

  current.textContent = `${data[info].timeframes.daily.current}hrs`
  previous.textContent = `Yesterday ${data[info].timeframes.daily.previous}hrs`
})
})

weekly.addEventListener("click",() => {
  daily.classList.remove("active")
  weekly.classList.add("active")
  monthly.classList.remove("active")
  
  articles.forEach((stats,info)=>{
    const current = stats.querySelector(".times")
    const previous = stats. querySelector(".previous_time")
  
    current.textContent = `${data[info].timeframes.weekly.current}hrs`
    previous.textContent = `Las tWeek ${data[info].timeframes.weekly.previous}hrs`
  })
  })

  monthly.addEventListener("click",() => {
    daily.classList.remove("active")
    weekly.classList.remove("active")
    monthly.classList.add("active")
    
    articles.forEach((stats,info)=>{
      const current = stats.querySelector(".times")
      const previous = stats. querySelector(".previous_time")
    
      current.textContent = `${data[info].timeframes.monthly.current}hrs`
      previous.textContent = `Last Month ${data[info].timeframes.monthly.previous}hrs`
    })
    })

