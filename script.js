var images = ["images/arthur-daru25-72k.jpg", "images/hubbz-asset.jpg", "images/whitecap-karina-final-face-jpg.jpg"]
var names = ["ahmed hussein", "xxxtentacion", "random female rabbit"]
var review = ["i love this guy ", "i dunno him", 'yikes']
var y = 0
document.getElementById('b').addEventListener('click', back)
function back(){
    if (y == 0){
        pass
    } else{
        y -= 1
        document.getElementById("imim").src = images[y];
        document.getElementById("name").innerHTML = names[y];
        document.getElementById("rev").innerHTML = review[y];
}
}
document.getElementById('f').addEventListener('click', front)
function front(){
    if (y == 2){
        pass
    } else{
        y += 1
        document.getElementById("imim").src = images[y];
        document.getElementById("name").innerHTML = names[y];
        document.getElementById("rev").innerHTML = review[y];
       }
}