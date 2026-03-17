gsap.registerPlugin(ScrollTrigger);

let lastScroll = 0;
const header = document.querySelector("header");

let isHidden = false;
const threshold = 500; // pixel dopo i quali l’header può nascondersi

window.addEventListener("scroll", () => {
    const current = window.pageYOffset;

    // PRIMA DEI 500PX → header sempre visibile
    if (current < threshold) {
        if (isHidden) {
            gsap.to(header, { y: 0, duration: 0.4, ease: "power3.out" });
            isHidden = false;
        }
        lastScroll = current;
        return;
    }

    // DOPO I 500PX → logica up/down
    if (current > lastScroll && !isHidden) {
        // scroll verso il basso → nascondi
        gsap.to(header, { y: -150, duration: 0.4, ease: "power3.out" });
        isHidden = true;
    } else if (current < lastScroll && isHidden) {
        // scroll verso l’alto → mostra
        gsap.to(header, { y: 0, duration: 0.4, ease: "power3.out" });
        isHidden = false;
    }

    lastScroll = current;
});



gsap.utils.toArray(".btn").forEach((btn) => {
  gsap.from(btn, {
    scrollTrigger: {
      trigger: btn,          // usa ogni singolo elemento come trigger
      start: "top 80%",      // punto di partenza dell’animazione
      toggleActions: "play none none reverse", // opzionale
      once: true             // animazione una sola volta
    },
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)"
  });
});


gsap.to(".about-content",
  {
    scale: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".about",
      start: "top 75%",
      toggleActions: "restart pause pause reverse",
    }
  }
);

let sections = gsap.utils.toArray(".panel");

const horizontalScroll = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-wrapper",
    pin: true,
    scrub: 1,
    end: () => "+=" + document.querySelector(".horizontal-wrapper").offsetWidth
  }
});

document.querySelectorAll(".about-content-realizzazione, .about-content-assistenza, .about-content-marketing").forEach(el => {

  gsap.to(el, {
    scale: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: el,
      containerAnimation: horizontalScroll,
      start: "0% 100%",
      toggleActions: "play reverse restart reverse",
    }
  });

});

document.querySelectorAll(".overlayProcess, .overlayProcess2, .overlayProcess3").forEach(el =>{


  gsap.fromTo(el,
    {
      'clipPath': "inset(0% 0% 0% 0%)"
    },
    {
      'clipPath': "inset(0% 100% 0% 0%)",
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
        toggleActions: "restart pause pause reverse"
      }
    }
  );

});

document.querySelectorAll(".overlayProcessBlack, .overlayProcessBlack2, .overlayProcessBlack3").forEach(el =>{

gsap.fromTo(el,
    {
      'clipPath': "inset(0% 0% 0% 0%)"
    },
    {
      'clipPath': "inset(0% 100% 0% 0%)",
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
        toggleActions: "restart pause pause reverse"
      }
    }
  );
});

document.querySelectorAll(".titleOverlay, .titleOverlay2, .titleOverlay3").forEach(el =>{

gsap.fromTo(el,
    {
      'clipPath': "inset(0% 0% 0% 0%)"
    },
    {
      'clipPath': "inset(0% 100% 0% 0%)",
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
        toggleActions: "restart pause pause reverse"
      }
    }
  );
});

       document.querySelectorAll(".clippy-container").forEach(el => {

  gsap.fromTo(el,
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)" },
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        end: "bottom 70%",
        toggleActions: "restart pause pause reverse",
        scrub: 4,
        markers: true
      }
    }
  );

});


document.querySelectorAll(".clippy-container").forEach(container => {

  const img = container.querySelector(".cursor-img");

  container.addEventListener("mousemove",(e)=>{

    const rect = container.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.7;
    const y = (e.clientY - rect.top) / rect.height - 0.7;

    gsap.to(img,{
      x: x * 60,
      y: y * 60,
      duration:0.6,
      ease:"power2.out"
    });

  });

  container.addEventListener("mouseleave",()=>{

    gsap.to(img,{
      x:0,
      y:0,
      duration:0.6,
      ease:"power2.out"
    });

  });

});
const swiper1 = new Swiper(".slider1", {
      effect: "cards",
      grabCursor: true,
    });

    const swiper2 = new Swiper(".slider2", {
      effect: "cards",
      grabCursor: true,
    });

    const swiper3 = new Swiper(".slider3", {
      effect: "cards",
      grabCursor: true,
    });


document.addEventListener("DOMContentLoaded", function () {
  // Inizializza SplitType
  const split = new SplitType(".split", {
    types: "words, chars" // puoi usare anche "lines" se vuoi
  });


// now animate the characters in a staggered fashion
gsap.from(split.chars, {
  duration: 1, 
  y: 100,         // animate from 100px below
  autoAlpha: 0,
  filter: "blur(10px)",   // fade in from opacity: 0 and visibility: hidden
  stagger: 0.05,  // 0.05 seconds between each
  scrollTrigger: {
      trigger: ".split",
      start: "0% 100%",
      toggleActions: "restart reverse restart reverse",
    }
});


const splitProgettazione = new SplitType(".progettazione", {
    types: "words, chars" // puoi usare anche "lines" se vuoi
  });


// now animate the characters in a staggered fashion
gsap.from(splitProgettazione.chars, {
  duration: 1, 
  x: 20,         // animate from 100px below
  autoAlpha: 0,
  filter: "blur(4px)",   // fade in from opacity: 0 and visibility: hidden
  stagger: 0.05,  // 0.05 seconds between each
  scrollTrigger: {
      trigger: ".progettazione",
      start: "0% 100%",
      toggleActions: "restart reverse restart reverse",
    }
});

document.querySelectorAll(".realizzazione, .assistenza").forEach(el => {

  const split = new SplitType(el, {
    types: "words, chars"
  });

  gsap.from(split.chars, {
    duration: 1,
    x: 20,
    autoAlpha: 0,
    filter: "blur(4px)",
    stagger: 0.05,
    scrollTrigger: {
      trigger: el,
      containerAnimation: horizontalScroll,
      start: "0% 100%",
      toggleActions: "restart reverse restart reverse",
    }
  });

});

const splitProgettazioneText = new SplitType(".p-split-about1",{
 types: "words, chars" 
});

gsap.from(splitProgettazioneText.words,{
  duration: 1,
  stagger: 0.05, 
  color: "#2d2d2dff",
  scrollTrigger: {
    trigger: ".p-split-about1",
    start: "30% 100%",
    end: "+=45%",
    toggleActions: "restart pause pause reverse",
    scrub: 4,}
});

document.querySelectorAll(".p-split-about2, .p-split-about3, .p-split-about4").forEach(el => {

  const splitAboutText = new SplitType(el, {
    types: "words, chars"
  });

  gsap.from(splitAboutText.words, {
    duration: 1,
  stagger: 0.05, 
  color: "#2d2d2dff",
  scrollTrigger: {
    trigger: el,
    start: "30% 100%",
    end: "+=70%",
    containerAnimation: horizontalScroll,
    toggleActions: "restart pause pause reverse",
    scrub: 4,
    }
  });

});

});

// cursore

if (window.innerWidth >= 1024) {
  const cursor = document.querySelector(".cursor");
  const cursorText = cursor.querySelector(".text");

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.4,
      ease: "power1.out",
    });
  });

  const elements = document.querySelectorAll(".animate-cursor");
  elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.4,
        ease: "power1.out",
        mixBlendMode: "difference",
      });
      cursorText.innerText = "";
    });

    element.addEventListener("mouseout", () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.4,
        ease: "power1.out",
        mixBlendMode: "difference",
      });
      cursorText.innerText = "";
    });
  });

  const imgElements = document.querySelectorAll(".animate-cursor-img");
  imgElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      gsap.to(cursor, {
        scale: 4.5,
        duration: 0.4,
        ease: "power1.out",
        mixBlendMode: "normal",
      });
      cursorText.innerText = "Go to site!";
    });

    element.addEventListener("mouseout", () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.4,
        ease: "power1.out",
        mixBlendMode: "difference",
      });
      cursorText.innerText = "";
    });
  });

  // Aggiungi l'evento click a tutti gli elementi della pagina
  document.addEventListener("click", (e) => {
    // Crea un elemento di puntatore al clic
    const clickCursor = document.createElement("div");
    clickCursor.classList.add("click-cursor");
    document.body.appendChild(clickCursor);

    // Posiziona il puntatore al clic dove l'utente ha cliccato
    clickCursor.style.left = e.clientX + "px";
    clickCursor.style.top = e.clientY + "px";

    // Rimuovi l'elemento del puntatore al clic dopo un breve ritardo
    setTimeout(() => {
      document.body.removeChild(clickCursor);
    }, 800);
  });
}

// 🔧 refresh finale
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

