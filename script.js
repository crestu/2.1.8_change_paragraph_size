
$(document).ready(function( ){
            //create click event for the button
                //id minimize
                //shrink the size of each footer to 7px
                //shrink each footnote to 10px
            //when button is clicked
                //the font for both classes should change
            //.click function or .on

            $("#minimize").on("click", mini);

            function mini()
            {
                $(".footnotes").css("font-size", "10px");
                $(".footer").css("font-size","7px");
                $(".footer , .footnotes").css("font-family", "Helvetica");
            }

});
