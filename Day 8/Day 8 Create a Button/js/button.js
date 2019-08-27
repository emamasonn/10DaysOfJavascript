document.getElementById("btn").addEventListener("click",function() {
    let value = this.innerHTML;
    this.innerHTML = parseInt(value)+1;
});