export default function(){
    const Florest = new Audio("./src/sound/Floresta.wav")
    const Rain = new Audio("./src/sound/Chuva.wav")
    const Coffeshop = new Audio("./src/sound/Cafeteria.wav")
    const Fireplace = new Audio("./src/sound/Lareira.wav")

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")


    Florest.loop = true
    Rain.loop = true
    Coffeshop.loop = true
    Fireplace.loop = true

    function pressButton(){
        buttonPressAudio.play()
    }
  
    function timeEnd(){
        kitchenTimer.play()
    }

    function pressFlorest(){
        Florest.play()
        Rain.pause()
        Coffeshop.pause()
        Fireplace.pause()
    }
    function pressRain(){
        Rain.play()
        Florest.pause()
        Coffeshop.pause()
        Fireplace.pause()
    }

    function pressCoffe(){
        Coffeshop.play()
        Florest.pause()
        Rain.pause()
        Fireplace.pause()
    }
    function pressFireplace(){
        Fireplace.play()
        Florest.pause()
        Coffeshop.pause()
        Rain.pause()
    }

    return {
        pressFlorest,
        pressRain,
        pressCoffe,
        pressFireplace,
        pressButton,
        timeEnd,
    }

}