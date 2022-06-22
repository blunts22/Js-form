function validateTextbox() {
 
     var box = document.getElementById("name");
     var c = document.getElementById("address");
      if (box.value.length < 5 || c.value.length < 5) {
     alert("char less than 5 bih");
     box.focus();
     box.style.border="solid 3px red";
     return false;

      }
      
      }
      