const validateFields = (form, fieldsArray) => {
    fieldsArray.forEach(field => {
        field.removeClass("input-errors");
        if(field.val().trim() == "") {
            field.addClass("input-errors");
        }    
       });
    
       const errorFields = form.find(".input-errors");

       return errorFields.length == 0;
}

$('.form').submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal = $("#modal-form");
    const content = modal.find(".modal__content-form");
    content.removeClass("error-modal");

   const isValid = validateFields(form, [name, phone, comment, to]);

   if(isValid) {
    $.ajax({
        url: "https://webdev-api.loftschool.com/sendmail",
        method: "POST",
        data: {
            name: name.val(),
            phone: phone.val(),
            comment: comment.val(),
            to: to.val()
        },

        success: data => {
            content.text(data.message)
            $.fancybox.open({
            src: "#modal-form",
            type: "inline"
            });  
        },
        error: data => {
           // console.log(data);
            // const message = data.responseJSON.message;
            // content.text(message);
            content.addClass("error-modal");
            content.text('Отправить письмо не удалось. Повторите запрос позже');
            
            $.fancybox.open({
                src: "#modal-form",
                type: "inline"
                });  
        }
    });
   }
    

});

$(".js-btn").click(e => {
    e.preventDefault();

    $.fancybox.close();
});



