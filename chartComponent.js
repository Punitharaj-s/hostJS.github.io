(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script><div id="donutchart" style="width: 900px; height: 500px;"></div>` ;   
   
    class PerformanceHelp extends HTMLElement {
        constructor() {
            super();
            this.init();           
        }

        init() {            
              
            let shadowRoot = this.attachShadow({mode: "open"});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            google.charts.load("current", {packages:["corechart"]});
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
                var jsonArray = fetch("https://teamtreehouse.com/profiles/matthew.json").then((response)=>response.json());
                var array = JSON.parse(jsonArray);
                console.log(array['id']);
                //var data = google.visualization.arrayToDataTable(array);

//         var options = {
//           title: 'Values',
//           pieHole: 0.4,
//         };

//         var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
//         chart.draw(data, options);
      }
        }       
        
    }

    customElements.define('custom-chart', PerformanceHelp);
})();
