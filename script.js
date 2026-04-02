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

const mm = gsap.matchMedia();


// ✅ DESKTOP
mm.add("(min-width: 1024px)", () => {

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
        start: "top 75%",
        toggleActions: "restart pause pause reverse",
        containerAnimation: horizontalScroll,
      }
    });

  });

  document.querySelectorAll(".realizzazione, .assistenza, .marketingHr").forEach(el => {

    const split = new SplitType(el, { types: "words, chars" });

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

  document.querySelectorAll(".p-split-about2, .p-split-about3, .p-split-about4").forEach(el => {

    const splitAboutText = new SplitType(el, { types: "words, chars" });

    gsap.from(splitAboutText.words, {
      duration: 1,
      stagger: 0.05,
      color: "rgb(146, 146, 146)",
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


// ✅ MOBILE
mm.add("(max-width: 1023px)", () => {

  document.querySelectorAll(".about-contentMobile, .about-content-realizzazioneMobile, .about-content-assistenzaMobile, .about-content-marketingMobile").forEach(el => {

    gsap.to(el, {
      scale: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
        toggleActions: "restart pause pause reverse",
      }
    });

  });

  document.querySelectorAll(".realizzazioneMobile, .assistenzaMobile, .marketingMobile, .progettazioneMobile").forEach(el => {

    const split = new SplitType(el, { types: "words, chars" });

    gsap.from(split.chars, {
      duration: 1,
      x: 20,
      autoAlpha: 0,
      filter: "blur(4px)",
      stagger: 0.05,
      scrollTrigger: {
        trigger: el,
        start: "0% 100%",
        toggleActions: "restart reverse restart reverse",
      }
    });

  });

  document.querySelectorAll(".p-split-about1Mobile, .p-split-about2Mobile, .p-split-about3Mobile, .p-split-about4Mobile").forEach(el => {

    const splitAboutText = new SplitType(el, { types: "words, chars" });

    gsap.from(splitAboutText.words, {
      duration: 1,
      stagger: 0.05,
      color: "rgb(146, 146, 146)",
      scrollTrigger: {
        trigger: el,
        start: "30% 100%",
        end: "+=70%",
        toggleActions: "restart pause pause reverse",
        scrub: 4,
      }
    });

  });

});



gsap.to(".about-content", { 
  scale: 1, duration: 1.2, 
  scrollTrigger: { 
    trigger: ".about", start: "top 75%", toggleActions: "restart pause pause reverse", 
  } 
} 
);



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

document.querySelectorAll(".skill").forEach(skill => {

  const fill = skill.querySelector(".skill-fill");
  const number = skill.querySelector(".skill-number");

  const value = fill.getAttribute("data-progress");

  let obj = { val: 0 };

  gsap.timeline({
    scrollTrigger: {
      trigger: skill,
      start: "top 80%",
      toggleActions: "restart none none reverse"
    }
  })
  
  // barra
  .to(fill,{
    scaleX: value / 100,
    duration: 1.2,
    ease: "power3.out"
  })
  
  // numero
  .to(obj,{
    val: value,
    duration: 1.2,
    ease: "power3.out",
    onUpdate: () => {
      number.textContent = Math.round(obj.val) + "%";
    }
  }, 0);
  
});

gsap.fromTo(".baloon",{
  clipPath: "circle(0.0% at 50% 50%)"},
  { clipPath: "circle(70.7% at 50% 50%)",
    duration: 1.2,
      delay: 0.2,
      ease: "power2.out",
    scrollTrigger: {
      trigger:".baloon",
      toggleActions: "restart pause pause reverse",
      start:"center bottom"
    }

  });

       document.querySelectorAll(".clippy-container").forEach(el => {

  gsap.fromTo(el,
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)" },
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        end: "bottom 80%",
        toggleActions: "restart pause pause reverse",
        scrub: 4,
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


const splitProgettazioneText = new SplitType(".p-split-about1",{
 types: "words, chars" 
});

gsap.from(splitProgettazioneText.words,{
  duration: 1,
  stagger: 0.05, 
  color: "rgb(146, 146, 146)",
  scrollTrigger: {
    trigger: ".p-split-about1",
    start: "30% 100%",
    end: "+=45%",
    toggleActions: "restart pause pause reverse",
    scrub: 4,}
});


document.querySelectorAll(".compare").forEach(el => {

  const splitAboutText = new SplitType(el, {
    types: "words"
  });

  gsap.from(splitAboutText.words, {
    duration: 0.8,
  stagger: 0.03, 
  autoAlpha: 0,
  scrollTrigger: {
    trigger: el,
    toggleActions: "restart pause pause reverse",
    }
  });

});

});



// cursore

if (window.innerWidth >= 1024) {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.4,
      ease: "power1.out",
    });
  });

  const elements = document.querySelectorAll("a");
  elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.4,
        ease: "power1.out",
      });
    });

    element.addEventListener("mouseout", () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.4,
        ease: "power1.out",
      });
    });
  });

}

// 🔧 refresh finale
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

