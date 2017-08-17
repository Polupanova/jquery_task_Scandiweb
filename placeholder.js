
     $(function () {
         //IE stuff
         if (!$.support.placeholder) {
             $("[placeholder]").focus(function () {
                if ($(this).val() == $(this).attr("placeholder")) {
                    $(this).val("")};
             }).blur(function () {
                 if ($(this).val() == "") {
                 $(this).val($(this).attr("placeholder"))};
             })
             .blur();
         }
     });
