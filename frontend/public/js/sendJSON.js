function sendData() {


    var elemPanel = document.getElementById("elementPanel");
    var html = elemPanel.innerHTML.trim();
    console.log(html);
    var json_send = html2json(html);
    console.log("\nsend JSON \n");
    console.log(json_send);

    while (elemPanel.firstChild) {
        elemPanel.removeChild(elemPanel.firstChild);
    }

    setTimeout(function () {
        var value = "";
        var url = "saveQuestion";
        jQuery.ajax({
            type: 'POST',
            url: url,
            async: true,
            data: json_send,
            success: function (json) {
                console.log("\nAccept JSON\n",json);
                var textHTML =  json2html(json);
                elemPanel.innerHTML = json2html(json);
            },
            error: function (e) {
                console.log("jQuery error message = " + e.message);
            }
        });
    }, 500);


    /*   var xhttp = new XMLHttpRequest();
       xhttp.open("POST", "saveQuestion", true);
       xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       var text;


       setTimeout(function () {
           while (elemPanel.firstChild) {
               elemPanel.removeChild(elemPanel.firstChild);
           }
       }, 3000);*/

    /* setTimeout(function (args) {

         elemPanel.innerHTML = json2html(json_send);
     }, 5000);
     console.log();*/


    // console.assert(html === json2html(json_send));

    /*  var questPanel = document.getElementById("questPanel");
      var y =questPanel.getElementsByClassName("box");
      var arr = new Array();
      for (var i = 0; i < y.length; i++) {
         /!* var myObject = new Object();
          myObject.img = y[i].getElementsByTagName("img")[0].getAttribute("src");
          myObject.text = y[i].getElementsByTagName("p")[0].textContent;
          arr.push(myObject);

          console.log(myString);*!/
      }
      var myString = JSON.stringify(arr);
      console.log(myString);
  */

    /*  var initElement = document.getElementById("questPanel");
      console.log(json);
      var data = JSON.stringify(json_send);

      xhttp.send(data);*/

}
