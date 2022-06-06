function myfunction(){
  
  
	var x = 1024; //min value
	var y = 9999; // max value
    let wheel = document.getElementById('box')

    let deg = 0
    let zoneSize = 45;

    const symbols = {
        1: "7500",
        2: "Deadpool",
        3: "Joker",
        4: "Inception",
        5: "Iron Man",
        6: "Terminator",
        7: "Batman",
        8: "Study bitch"
    }

    const handlewin = (actualDeg) => {
        const winner = Math.ceil(actualDeg / zoneSize)
        console.log(symbols[winner])
    }
  
	deg = Math.floor(Math.random() * (x - y)) + y;

    const actualDeg = deg % 360
  
	wheel.style.transform = "rotate("+ deg +"deg)";
  
	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
	}, 5000); //5000 = 5 second

    handlewin(actualDeg)
}
