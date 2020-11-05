const graphInput = document.getElementById('graph')
const slider = document.getElementById('mySlider')
const select = document.getElementById('mySelect')
var amplitude = 1

slider.addEventListener('change', function() {
    amplitude = slider.value;
})

select.addEventListener('change', function() {
    amplitude = select.value;
})

Plotly.plot('graph', [{
    y: [0],
    mode: 'lines+markers', 
    marker: {color: 'blue', size: 8},
    line: {width: 4}
  },{
    y: [0],
    mode: 'lines+markers',
    marker: {color: 'red', size:8},
    line: {width: 4}
  }]);

if(typeof(EventSource) !== "undefined") {
    var source = new EventSource("http://vmzakova.fei.stuba.sk/sse/sse.php")
    
    source.addEventListener("message", (e) => {
        var data = JSON.parse(e.data)
        Plotly.extendTraces('graph', {
            y: [[data.y1 * amplitude], [data.y2 * amplitude]]
          }, [0, 1])

      },false)
  
} else {
    // document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events..."
}