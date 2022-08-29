const textAnim = document.querySelector('.Slide')
console.log(textAnim)
new Typewriter(textAnim, {
    loop: true,
    deleteSpeed: 20 
} )

.changeDelay(40)
.typeString('"Un accueil de qualité !"')    
.pauseFor(1000)
.deleteChars(40)
.typeString('"Un travail propre et rapide"')
.pauseFor(1000)
.deleteChars(40)
.typeString('"Des ouvriers aimables"')
.pauseFor(1000)
.deleteChars(40)
.typeString('"Des fenêtres de qualité "')
.pauseFor(1000)
.deleteChars(40)
.start()