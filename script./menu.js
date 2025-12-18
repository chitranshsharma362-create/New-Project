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
        const menuBar = document.querySelector(".menu .menubar ul");
        const mobileBar = document.querySelector(".menu .mobilebar");
        // const anchor = document.querSelector(".menu .mobilebar ul li a");

        if(mobileBar && !mobileBar.querySelector(".hamburger")){
         const dv = document.createElement("div");
         dv.className = "hamburger";
         // dv.idName = "";
         dv.setAttribute("aria-label", "Toggle menu");
         dv.setAttribute("tabindex" , "0" );
         dv.innerHTML= '<span></span>';
         mobileBar.appendChild(dv);

         dv.addEventListener("click", function(e) {
          e.stopPropagation();
          menu.classList.toggle("mobile-open");
          e.stopPropagation();
          anchor.style.display = "block";
         });
        }
       }
      });
   });
