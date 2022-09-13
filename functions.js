if(localStorage.getItem("page_stylesheet_name") != null && document.getElementById("css") != localStorage.getItem("page_stylesheet_name")){
    document.getElementById("css").setAttribute("href", localStorage.getItem("page_stylesheet_name"));
}

function load_style() 
    {
        page_style = localStorage.getItem("page_stylesheet_name");
        if(!page_style)
        {
        page_style = "style.css";
        }
        else if(page_style == "second_style.css")
        {
        page_style = "style.css";
        }
        else if(page_style == "style.css")
        {
        page_style = "second_style.css";
        }
        document.getElementById("css").setAttribute("href", page_style);
        localStorage.setItem("page_stylesheet_name", page_style);
    }