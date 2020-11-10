var about = "I'm Yasin. I'm FullStack Web developer and learning data science with keen understanding of Python,html,css,django,data structure.";
i = 0;
function typeWriter() {
    if (i < about.length) {
      document.getElementById("about__").innerHTML += about.charAt(i);
      i++;
      setTimeout(typeWriter, 60);
    }
  }

typeWriter();
