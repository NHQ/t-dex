module.exports = function(){
    
    var p = arguments[0]
    var canvas = p.canvas
    var ctx = canvas.getContext('2d')
    var w = p.width || canvas.width
    var h = p.height || canvas.height
    var x = p.x || 0
    var y = p.y || 0
    var intervals = p.intervals;
    var start = p.start || 0
    var duration = p.duration || undefined
    var sec = w / duration;

    ctx.strokeStyle = p.strokeStyle || 'rgba(20,20,20,.25)';
    ctx.lineWidth = '1'
    ctx.clearRect(x, y, w, h);
    ctx.fillStyle = p.fillStyle || 'rgba(0,0,0,0)';
    ctx.fillRect(x, y, w, h);

    ctx.beginPath();
    ctx.moveTo(x, y + (h / 2));
    ctx.lineTo(x + w, y + (h / 2));
    ctx.stroke();

    intervals.forEach(function(interval, q){
	
	if(isNaN(interval)) return

	var l = sec * interval 
	var offset = interval - (start % interval);
 
	var sx = 0
	var dy = y + ( h * ( q / 10 ) )
	var dh = y + h - ( h * ( q / 10 ) ) 

	for(var z = 0; z < Math.floor(duration / interval); z++){

	    dx = x + (z * l) + (sec * offset)
	    ctx.beginPath();
	    ctx.moveTo(dx, dy)
	    ctx.lineTo(dx, dh)
	    ctx.stroke()

	}
	
    })

}
