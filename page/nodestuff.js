var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sem vitae purus maximus molestie. Fusce congue dui ac ante interdum maximus. Mauris tempus posuere erat, et volutpat mi feugiat lobortis. Maecenas facilisis ornare odio at vulputate. Donec ut quam interdum, sodales quam vitae, commodo justo. Duis euismod, sapien ut hendrerit tincidunt, tortor massa rutrum nisl, eget suscipit turpis risus id urna. Nulla commodo eleifend egestas. Maecenas dictum velit eu dui ultricies, eu sodales elit bibendum. Nulla luctus vestibulum libero quis rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque lorem arcu, blandit ut pulvinar eu, pharetra quis ex. Cras aliquet dui orci, a gravida nulla molestie nec. Sed consectetur enim tortor, at congue tellus gravida nec. Donec eleifend ultricies est, at bibendum lacus efficitur vitae. Nunc at auctor quam. ";

function createParagraph() {
    var para = document.createElement("p");
    var node = document.createTextNode(text);

    // append the text node to the <p>:
    para.appendChild(node);
    // append the <p> element to the document body:

    var pageBody = document.firstElementChild;
    pageBody.appendChild(para);
}

function removeLastParagraph() {
    var paragraphs = document.querySelectorAll("p");
    var lastParagraph = paragraphs[paragraphs.length - 1];
    lastParagraph.remove();
}

document.querySelector("#adderButton").onclick = createParagraph;
document.querySelector("#removerButton").onclick = removeLastParagraph;
