const arrayize = pseudoArr => Array.prototype.slice.apply(pseudoArr);

arrayize(document.body.getElementsByTagName("*")).forEach(elm => {
  elm.style.border = "1px solid red";
});
