var buttons = document.querySelectorAll("menu button");
var ul = document.querySelector("#tab-content ul");
document.addEventListener("DOMContentLoaded", () => {
    ul.innerHTML = item[0];
    buttons[0].classList.add("active");
});
console.log(buttons);
buttons.forEach((element, index) => {
    element.addEventListener("click", () => {
        var buttonactive = document.querySelector("menu button.active");
        buttonactive.classList.remove("active");
        ul.innerHTML = item[index];
        element.classList.add("active");
    })
});

var item = [
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quae. Nobis error sit dolor blanditiis libero cumque sapiente eum aperiam. Error eos voluptatibus voluptatum nobis ut a repudiandae officia architecto?",
    "Velit voluptas accusamus suscipit neque, exercitationem veniam vitae mollitia quibusdam ipsa numquam, sunt molestias provident dignissimos architecto obcaecati nihil, tempore natus animi ea temporibus.Laborum aspernatur dolore eius at voluptatem.",
    "Illo esse repudiandae recusandae voluptatibus debitis assumenda soluta facilis quis laborum itaque, quibusdam atque deleniti natus molestiae asperiores adipisci praesentium officiis incidunt in minima dolor id doloribus ? Consequatur, natus aliquid.",
    "Aut placeat et aspernatur amet sed ut veritatis atque optio laudantium voluptatibus harum tempore, ratione deleniti nesciunt facere hic repudiandae! Dolorum similique, culpa est illo dolorem mollitia quod nam quisquam",
    "                Asperiores tempore pariatur, ratione autem modi placeat, quos delectus ea vitae error molestiae libero amet iure, nam illo sapiente dolorum! Id fugiat at eius quod hic ut et neque! Modi."

]