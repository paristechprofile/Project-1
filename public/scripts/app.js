$(document).ready(function () {

    let albumList = []

    const newAlbum = dbUser => {
        
        console.log("dbUser", dbUser);

        albumList = dbUser.albums;


        let artistName = albumList[i].artist.name;
        let albumName = albumList[i].name;
        let albumPic = albumList[i].albumPic;

        let userId = albumList[i]._id;
        console.log(userId);
        console.log(albumPic)
        let htmlFragment = `
            <div class="col" id="albumStack" data-userId="${userId}">
                <div class="card" style="width: 18rem;" >
                    <img src="${albumPic}"   class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${ albumName }</h5>
                        <p class="card-text">${ artistName }</p>
                        <button id="deleteButton" class="btn-danger"> Delete </delete>
                    </div>
                </div>
            </div>
        `;
        // appending th html in the div
        $('#albumCardTarget').append(htmlFragment);

        

    };

    //  Get all albums and render
    const findAlbumById = dbUser => {
        console.log("dbUser", dbUser);

        albumList = dbUser.albums;

        for (let i = 0; i < albumList.length; i++) {
            let artistName = albumList[i].artist.name;
            let albumName = albumList[i].name;
            let albumPic = albumList[i].albumPic;

            let userId = albumList[i]._id;
            console.log(userId);
            let htmlFragment = `
            <div class="col" id="albumStack" data-userId="${userId}">
                <div class="card" style="width: 18rem;">
                    <img src="${albumPic}"   class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${ albumName }</h5>
                        <p class="card-text">${ artistName }</p>
                        <button id="deleteButton" class="btn-danger"> Delete </delete>
                    </div>
                </div>
            </div>
        `;
            // appending th html in the div
            $('#albumCardTarget').append(htmlFragment);
            }
        }

    //   Make an Ajax call to get user by id
    $.ajax({
        method: "GET",
        url: "/api/user/5c77031e86e140000c8804db",
        success: findAlbumById,
        error: err => console.log(err)
    })

    // Add an Event handler on the submit button
    $('#albumForm').on("submit", function (e) {
        console.log("Submit button is firing")

        let formData = $(this).serialize();

        $.ajax({
            method: 'POST',
            url: '/api/user/5c77031e86e140000c8804db/albums',
            data: formData,
            success: createNewAlbum,
            error: error => console.log(error),
            complete: function () {
                $("input[type=text], textarea").val("");
            }
        });


    })

    // Delete Albums from Page

    const deleteAlbum = (data) => {
        console.log("this is new data ", data);
        $("#albumStack").empty();
    }

    $("#albumStack").on("click",(function(e){
        

        $.ajax({
            method: "DELETE",
            url: `/api/user/5c72fd3dfe78139a8f10ccb5/albums/${$("#albumStack").data('userId')}`,
            success: deleteAlbum,
            error: err => console.log(err)
                })
            
            console.log(albumList);

    })
    )
    

    const createNewAlbum = json => {
        console.log(json)

        let userAlbums = json.albums;

        let newAlbumName = userAlbums[userAlbums.length - 1].name;
        let newAlbumArtist = userAlbums[userAlbums.length - 1].artist || "Unknown Artist";
        let newAlbumid = userAlbums[userAlbums.length - 1]._id

        render(newAlbumName, newAlbumArtist, newAlbumid);

    }

})

