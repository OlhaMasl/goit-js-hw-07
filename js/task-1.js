const listOfCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", listOfCategories.length);

listOfCategories.forEach(function (element) {
    console.log("Category: ", element.firstElementChild
        .textContent);
    console.log("Elements: ", element.lastElementChild.children.length);
});
