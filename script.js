const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets= document.querySelectorAll(".bullets span");
const images=document.querySelectorAll(".image");
inputs.forEach((inp) => {
    inp.addEventListener("focus", () =>{
        inp.classList.add("active");
    });
    inp.addEventListener("blur", ()  =>{
        if(inp.value !="") return;
        inp.classList.remove("active");
    });
});


toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
    });
});

function moveSlider() {
    let index = this.dataset.value;
   
    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach((img)=> img.classList.remove("show"));
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform =`translateY(${-(index -1)*2.2}rem)`;

    bullets.forEach((bull)=> bull.classList.remove("active"));
    this.classList.add("active");
}

bullets.forEach((bullet) => {
    bullet.addEventListener("click", moveSlider);
});




//Dashboard//

var sidebarOpen=false;
var sidebar = document.getElementById("sidebar");

function opensidebar(){
    if(sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closesidebar(){
    if(sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = false;
    }
}

//Charts//

var options = {
    series: [{
    name: 'Sales',
    data: [10000, 5000, 20000, 20000, 16000, 20000, 15000, 10000]
  }, {
    name: 'Purchases',
    data: [5000, 2000, 10000, 3000, 2000, 12000, 4000, 1000, 1500]
  }, ],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '₦ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "₦ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
  chart.render();


//Chart 2//

var options = {
    series: [44, 55, 13, 33],
    chart: {
    width: 380,
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 300
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    position: 'right',
    offsetY: 0,
    height: 230,
  }
  };

  var chart = new ApexCharts(document.querySelector("#pie-chart"), options);
  chart.render();


  function appendData() {
  var arr = chart.w.globals.series.slice()
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  return arr;
}

function removeData() {
  var arr = chart.w.globals.series.slice()
  arr.pop()
  return arr;
}

function randomize() {
  return chart.w.globals.series.map(function() {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1
  })
}

function reset() {
  return options.series
}

document.querySelector("#randomize").addEventListener("click", function() {
  chart.updateSeries(randomize())
})

document.querySelector("#add").addEventListener("click", function() {
  chart.updateSeries(appendData())
})

document.querySelector("#remove").addEventListener("click", function() {
  chart.updateSeries(removeData())
})

document.querySelector("#reset").addEventListener("click", function() {
  chart.updateSeries(reset())
})




//Charts Ends//


//Inventory stoct starts//
const digitRegex = /^\d+$/;

//-----------//

const productname = document.getElementById(productname);
const stocktablelist = document.querySelector(stock-table-list);
//-----------//

let  = productdescription = availablestock = reorderlevel = labels = '';


//Inventory stoct Ends//
