  let robotSon = Math.ceil(10 * Math.random());

    function tekshir() {
      let kiritilganSon = document.getElementById("input").value; 
      let natija = document.getElementById("natija");
      let robot = document.getElementById("robot");
      let oylagan = document.getElementById("oylagan");
      let box = document.getElementById("box");

      oylagan.textContent = "Siz o'ylagan son: " + kiritilganSon;

      if (kiritilganSon == robotSon) {
          natija.textContent = "Yutdingiz";
          box.style.background = "green";   
      } else {
          natija.textContent = "Yutqazdingiz";
          box.style.background = "red";
      }

      robot.textContent = "Robot soni: " + robotSon;
    }