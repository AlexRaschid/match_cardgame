$(document).ready(function(){
    var num_tiles = 8;
    var tiles = [];

        // Function makes 2 lets of li tags per num_tiles and places it in an array
        for (var i = 0; i < num_tiles / 2; i++){
            var $tile = $("<li></li>");
            var $tile2 = $("<li><</li>");
            $tile.html(i);
            $tile2.html(i);
            $tile.addClass("tile");
            $tile2.addClass("tile");
            tiles.push($tile);
            tiles.push($tile2);
        }


            // Function shuffles cards and gives them a different number
            // Does this by taking the length of arr and rounds down a random number 
            // and does that for every element in the arr. Then returns the array with a random number/placement.
            var shuffle = function(arr) {
        for (var i = 0; i < arr.length; i++) {
            var j = Math.floor(Math.random() * i);
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
                return arr;
            };


            
        
        var shuffled_tiles = shuffle(tiles);    
        for (var i=0; i < tiles.length; i++){
            $("#game-board").append(shuffled_tiles[i]);
        }
        

        var $first_clicked_tile, $second_clicked_tile;
        var pairs=0;


        // When tile is clicked...
        $('.tile').click(function(){

            // If first_clicked_tile is null/empty
            // record clicked tile as first selected
            // and set class to "selected"
            if(!$first_clicked_tile){

                $first_clicked_tile = $(this);
                $(this).addClass("selected");

            } else { // else, make the match...

                // Set the tile as second selected
                $second_clicked_tile = $(this);
                   
                //check values are equal
                 if($first_clicked_tile.html() === $second_clicked_tile.html()) {
                    // set the second clicked tile as selected
                    // record the number of pairs
                     $second_clicked_tile.addClass('selected');
                     pairs++;
                 } else {
                    // Shows the second clicked tile...
                    // Tells the player to try again...
                    // Hides both tiles...
                    $second_clicked_tile.addClass('selected');

                    alert("Try again!");

                    $first_clicked_tile.removeClass('selected');
                    $second_clicked_tile.removeClass('selected');
                 }

                 // Empty..
                 $first_clicked_tile = null;
                 $second_clicked_tile = null;
            }

            //Lets players know they won
             if(pairs === (num_tiles / 2)){
                alert("You Won!");
            }
        });
});



