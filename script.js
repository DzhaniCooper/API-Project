
        $(document).ready(function () {
            $.getJSON("https://api.punkapi.com/v2/beers?brewed_after=01-2015&abv_gt=5&abv_lt=11&per_page=80&page=1", "jsonp", function (data) {
                var beer_data = '';
                $.each(data, function (key, value) {
                    beer_data += '<tr>';
                    beer_data += '<td><img src=' + value.image_url + '></td>';
                    beer_data += '<td><b>' +value.tagline + '</b></td>';
                    beer_data += '<td><b>' + value.abv + "%" + '<b></td>';
                    beer_data += '<td>' 
                        
                    // following line of code accessing child elements of ingredients 'malt'    
                    $.each(value.ingredients.malt, function (key, maltVar) {
                        //console.log(maltVar); For testing purposes
                        beer_data += '<b>'+"Malt: "+
                              maltVar.name+" ( "+maltVar.amount.value+" "+maltVar.amount.unit+" )"+ '</b>'+'</br>';
                    });
                    
                    // following line of code accessing child elements of ingredients 'hops' 
                    $.each(value.ingredients.hops, function (key, hopsVar) {
                        //console.log(maltVar); For testing purposes
                        beer_data += '<b>'+"Hops: " +
                              hopsVar.name+" ("+hopsVar.amount.value+" "+hopsVar.amount.unit+" "+hopsVar.add+" "+hopsVar.attribute+" )" +'</b>'+'</br>';
                    });
                    
                        beer_data += '<b>'+"Yeast: " + value.ingredients.yeast + '</b>'+'</br>';

                    beer_data += '</tr>';
                });
                $('#beers_table').append(beer_data);
            });
        }); 