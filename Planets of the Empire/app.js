let name = document.querySelector('#name')
let pop = document.querySelector('#pop')
let terrain = document.querySelector('#terrain')
let gravity = document.querySelector('#gravity')
let rotation = document.querySelector('#rotation')

let num = Math.floor((Math.random() * 60) + 1);

let unknownValue = 'unknown'

document.addEventListener('DOMContentLoaded', () => {

    fetch('https://swapi.dev/api/planets/' + num + '/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            name.innerText = data.name
            pop.innerText = data.population
            terrain.innerText = data.terrain
            gravity.innerText = data.gravity
            if(data.rotation_period === "unknown"){
                rotation.innerText = "unknown"
            }else if(data.rotation_period === "0"){
                rotation.innerText = "unknown"
            }else{
                rotation.innerText = data.rotation_period + ' standard hours'
            }
        })
})

function refreshPage(){
    window.location.reload();
} 