import * as el from './elements.js'
import state from './state.js'

export default function(){
    function florestColors(){
        el.florest.style.background = "var(--button-hover)"
        el.florest.style.color = "var(--controls-bg-color)"

        el.rain.style.background = "var(--controls-bg-color)"
        el.rain.style.color = "var(--text-color)"

        el.fire.style.background = "var(--controls-bg-color)"
        el.fire.style.color = "var(--text-color"

        el.store.style.background = "var(--controls-bg-color)"
        el.store.style.color = "var(--text-color"
    } 
    function rainColors(){
        el.rain.style.background = "var(--button-hover)"
        el.rain.style.color = "var(--controls-bg-color)"

        el.florest.style.background = "var(--controls-bg-color)"
        el.florest.style.color = "var(--text-color)"

        el.fire.style.background = "var(--controls-bg-color)"
        el.fire.style.color = "var(--text-color"

        el.store.style.background = "var(--controls-bg-color)"
        el.store.style.color = "var(--text-color"
    } 

    function fireColors(){
        el.fire.style.background = "var(--button-hover)"
        el.fire.style.color = "var(--controls-bg-color)"

        el.rain.style.background = "var(--controls-bg-color)"
        el.rain.style.color = "var(--text-color)"

        el.florest.style.background = "var(--controls-bg-color)"
        el.florest.style.color = "var(--text-color"

        el.store.style.background = "var(--controls-bg-color)"
        el.store.style.color = "var(--text-color"
    } 
    function storeColors(){
        el.store.style.background = "var(--button-hover)"
        el.store.style.color = "var(--controls-bg-color)"

        el.rain.style.background = "var(--controls-bg-color)"
        el.rain.style.color = "var(--text-color)"

        el.fire.style.background = "var(--controls-bg-color)"
        el.fire.style.color = "var(--text-color"

        el.florest.style.background = "var(--controls-bg-color)"
        el.florest.style.color = "var(--text-color"
    } 
    
    return {
        florestColors,
        fireColors,
        rainColors,
        storeColors
    }
}

