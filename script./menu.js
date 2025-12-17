 fetch("header.html")
        .then(response => response.text())
        .then(data => {
          document.getElementById("header").innerHTML = data;

      let currentPage =  window.location.pathname.split("/").pop();
      // menu me anchor tkk pauchne ka tarika
      let links = document.querySelectorAll(".menu .menubar ul li a");
        if(!currentPage || currentPage == "#"){
          currentPage = "index.html"
        }
      // hrr anchor ko process kia 
      links.forEach(link => {
        console.log("Current Page: " , currentPage);
        //phle href ki value save krenge 
        let linkPage = link.getAttribute("href");
        // if(!linkPage) return;
        // let li = link.getClosest("li");
        if (linkPage == currentPage){
          link.closest("li").classList.add("underline_current");
        }
       if (window.innerWidth <=576) {
        const menu = document.querySelector(".menu");
        const menubar = document.querySelector(".menu .menubar ul");
        const mobilebar = document.querySelector(".menu .mobilebar");

        if(mobilebar && !mobilebar.querySelector(".hamburger")){
         const dv = document.createElement("div");
         dv.className = "hamburger";
         dv.setAttribude("area-label", "Toggle menu");
         dv.setAttribute("tebindex" , "0" );
         dv.innerHTML= '<span></span>';
         mobilebar.appendChild(dv);
         
        }
       }
      });
   });
