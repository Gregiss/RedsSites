$(".tabs").click(function(){
    $(".tabs").removeClass("active");
    $(this).addClass("active");
    var id = $(this).data("id");
    if(id == 0){
        $(".box").css("top", "200%");
        $("#who").css("top", "50%");
    } else if(id == 1){
        $(".box").css("top", "200%");
        $("#social").css("top", "50%");
    } else if(id == 2){
        $(".box").css("top", "200%");
        $("#project").css("top", "50%");
    }
});

var projects = [];
var fotosUpload = [{foto: "https://media.moddb.com/cache/images/mods/1/44/43264/thumb_620x2000/Half-Life_2_Screenshot_2019.07.23_-_16.22.48.19.png"}, {foto: "https://media.moddb.com/cache/images/mods/1/44/43264/thumb_620x2000/Half-Life_2_Screenshot_2019.07.2.13.png"}, {foto : "https://media.moddb.com/cache/images/mods/1/44/43264/thumb_620x2000/Half-Life_2_Screenshot_2019.07.2.png"}, {foto : "https://media.moddb.com/cache/images/mods/1/44/43264/thumb_620x2000/Half-Life_2_Screenshot_2019.07.2.3.png"}];
var totalProjects = 0;

function addProject(title, fotos, descricao){
    var newProject = {title: title, fotos: fotos, descricao: descricao};
    projects.push(newProject);
    totalProjects++;
    $("#project .before").before("<div class='close'><i class='fas fa-times'></i></div> <div id='project"+totalProjects+"' class='project'><h1>"+title+"</h1> <p>"+descricao+"</p> <div class='scroller'><div class='before'></div></div></div>")
    for(var i = 0; i < projects[totalProjects - 1].fotos.length; i++){
        $("#project" + totalProjects + " .scroller .before").before("<div class='foto'><img src='"+projects[totalProjects -1 ].fotos[i].foto+"'/></div></div>")
    }
    showPhotos();
}

function showPhotos(){
    $(".foto").click(function(){
    $("#project .foto").removeClass("zoom");
    $(this).addClass("zoom");
    $(".close").addClass("close_active");
    });

    $(".close").click(function(){
        $("#project .foto").removeClass("zoom");
        $(".close").removeClass("close_active");
    });
}

addProject("World Survivor", fotosUpload, "You are a normal citizen, until your rebel scientist friend calls you to get in his lab. When you get there he says that civil protection is getting dangerous, and give you a hev suit and a gun, and you must reach Black Mesa East. I want to add more chapters after Black Mesa East.");

//Para adicionar um projeto use o comando addProjet("Nome projeto", "fotos", "descricao");
//var fotos = [{foto: "foto1.png"}, {foto: "foto2.png"}];
//Exemplo addProjet("Mod Br", fotos, "descricao");