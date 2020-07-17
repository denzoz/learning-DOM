var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sem vitae purus maximus molestie. Fusce congue dui ac ante interdum maximus. Mauris tempus posuere erat, et volutpat mi feugiat lobortis. Maecenas facilisis ornare odio at vulputate. Donec ut quam interdum, sodales quam vitae, commodo justo. Duis euismod, sapien ut hendrerit tincidunt, tortor massa rutrum nisl, eget suscipit turpis risus id urna. Nulla commodo eleifend egestas. Maecenas dictum velit eu dui ultricies, eu sodales elit bibendum. Nulla luctus vestibulum libero quis rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque lorem arcu, blandit ut pulvinar eu, pharetra quis ex. Cras aliquet dui orci, a gravida nulla molestie nec. Sed consectetur enim tortor, at congue tellus gravida nec. Donec eleifend ultricies est, at bibendum lacus efficitur vitae. Nunc at auctor quam. ";
const pageBody = document.firstElementChild;

function createParagraph() {
    var para = document.createElement("p");
    var node = document.createTextNode(text);

    // append the text node to the <p>:
    para.appendChild(node);
    // append the <p> element to the document body:

    pageBody.appendChild(para);
}

function removeLastParagraph() {
    var paragraphs = document.querySelectorAll("p");
    var lastParagraph = paragraphs[paragraphs.length - 1];
    lastParagraph.remove();
}


function addImage() {
    var img = new Image();
    var boxChecked = document.querySelector("#typeCheckbox").checked;
    if (boxChecked == true) {
        img.src = "https://searchengineland.com/figz/wp-content/seloads/2016/01/bing-new-logo-1920-800x338.jpg";
    } else {
        img.src = "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg";
    }
    pageBody.appendChild(img);
}

function replaceWithParagraph() {


    var images = document.querySelectorAll("img");
    for (imageNum = 0; imageNum < images.length; imageNum++)  {
        var para = document.createElement("p");
        var node = document.createTextNode(text);
        para.appendChild(node);
        var target = images[imageNum];
        target.replaceWith(para); //  doesnt replace each one individually, but removes all images and leaves a single paragraph behind
    }
}
document.querySelector("#adderButton").onclick = createParagraph;
document.querySelector("#removerButton").onclick = removeLastParagraph;
document.querySelector("#imgAddButton").onclick = addImage;
document.querySelector("#imgRplButton").onclick = replaceWithParagraph;