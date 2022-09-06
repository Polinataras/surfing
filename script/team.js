const openItem = (item) => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block");
    const textBlockMob = contentBlock.find(".team__content-mob");
    const reqHeight = textBlock.height();

    const reqHeightMob = textBlockMob.height();


    container.addClass("active");
    contentBlock.height(reqHeight);
    contentBlock.height(reqHeightMob);
};

const closeEverlyItem = (container) => {
    const items = container.find(".team__content");
    const itemContainer = container.find(".team__item");

    itemContainer.removeClass("active");
    items.height(0);
}

$('.team__btn').click((e) => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.team');
    const elemContainer = $this.closest(".team__item");


    if(elemContainer.hasClass("active")) {
        closeEverlyItem(container);
    }else {
         closeEverlyItem(container);
        openItem($this);
    }


   
});