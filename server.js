var MongoClient = require('mongodb').MongoClient;
var GoogleImages = require('google-images');
var url = require('url');
var queryString = require('querystring');
var express = require('express');
var app = express();
app.listen(process.env.PORT || 8080);
console.log("Listening on port " + (process.env.PORT || 8080));

var dbsearches = "mongodb://localhost:27017/searches";
const searchClient = new GoogleImages('012288473251428120341:9myfsz8modw',
                                'AIzaSyBabXao01rFXvJ_TvJPGhW8Mtz0C6f6lUs');

//Custom Search API key : AIzaSyBabXao01rFXvJ_TvJPGhW8Mtz0C6f6lUs
//CSE ID : 012288473251428120341:9myfsz8modw

var placeholderResponse = [{"type":"image/jpeg","width":450,"height":299,"size":24776,"url":"http://www.oddee.com/_media/imgs/articles2/a97873_rsz_lolcat-funny-picture-found-pills-ate-eat.jpg","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbI-hakh1CXH8FiODeilbT83H5wXP3ivU9Y-t_EQ2GZBBpgvVcIVx35fs","width":127,"height":84},"description":"15 Funniest LOLcats Ever (LOLcats) - ODDEE","parentPage":"http://www.oddee.com/item_97873.aspx"},{"type":"image/jpeg","width":480,"height":360,"size":20788,"url":"https://i.ytimg.com/vi/r_o3q7zc21Y/hqdefault.jpg","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxCOQ1jMfrfEDBrBAkpR7Ifk1glwYlUgctm05hmgT1V_0LjTr3WX00tjE","width":129,"height":97},"description":"LOLCats - Funniest cat pictures for Android - YouTube","parentPage":"https://www.youtube.com/watch?v=r_o3q7zc21Y"},{"type":"image/jpeg","width":500,"height":392,"size":62669,"url":"http://yadbw.com/wp-content/uploads/2017/04/74b85ce7c66dbdf78d3d2ad9701bccfc.jpg","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpc77esnVyfsIaFN3oueSdtD-2RcaBe5y_SP8XR0k_kDCNalerFXw32TM","width":130,"height":102},"description":"Lolcats Funny Cat Pictures | yadbw.com","parentPage":"http://yadbw.com/lolcats-funny-cat-pictures.html"},{"type":"image/jpeg","width":480,"height":360,"size":16834,"url":"https://i.ytimg.com/vi/rHzOau7ZKpA/hqdefault.jpg","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEspafya5KS3hBmt43BQpCxvtW4mCvhRnWybRNxe3Td96L-OgnhIlup4Q","width":129,"height":97},"description":"Madonna Justify My Love LolCats Funny Cats - YouTube","parentPage":"https://www.youtube.com/watch?v=rHzOau7ZKpA"},{"type":"image/jpeg","width":450,"height":337,"size":28183,"url":"http://www.oddee.com/_media/imgs/articles2/a97873_rsz_drunkdial.jpg","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlg98BpStwm-VvJ9pjDilRxRa6ZqrUPs2ULdUsmKG1VZ5OnGh7sa0fTNA","width":127,"height":95},"description":"15 Funniest LOLcats Ever (LOLcats) - ODDEE","parentPage":"http://www.oddee.com/item_97873.aspx"},{"type":"image/","width":300,"height":300,"size":18480,"url":"https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=2549578","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrUMEW8G1_wTKMWCGm3-7SI8ZbwQNZzl9bd1GK1Wh7e-Oi-luJ2VDPr9Q","width":116,"height":116},"description":"LOLCats - Funny & Cute Cat Pictures Collection! - Polyvore","parentPage":"https://www.polyvore.com/lolcats_funny_cute_cat_pictures/thing?id=2549578"},{"type":"image/jpeg","width":450,"height":308,"size":43043,"url":"http://www.oddee.com/_media/imgs/articles2/a97873_pants.jpg","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu2P9GTDdieyfTDsfnLmMwXTu3XJuW_F19H8yYTyzdQ_lU8bzPXemZkHQ","width":127,"height":87},"description":"15 Funniest LOLcats Ever (LOLcats) - ODDEE","parentPage":"http://www.oddee.com/item_97873.aspx"},{"type":"image/jpeg","width":460,"height":437,"size":50459,"url":"https://4.bp.blogspot.com/-JPGBVJzL088/TzQUAd0mmXI/AAAAAAAAn8k/wyBhmdMkFtU/s1600/Funny+Cat+Pics+%252885%2529.jpg","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_zjgp9GyYDjtty1Mt_UgxXHYaqXi80_z_D6USShltd1v5wd4OYJEiDY","width":128,"height":122},"description":"Funny Image Collection: LOLCats - Funny & Cute Cat Pictures ...","parentPage":"https://funnyimagecollect.blogspot.com/2012/02/lolcats-funny-cute-cat-pictures.html?m=1"},{"type":"image/jpeg","width":450,"height":297,"size":72357,"url":"http://www.oddee.com/_media/imgs/articles2/a97873_rsz_bring-me-solo-and-the-wookiee-they-will-all-suffr-4-dis-outrage_r.jpg","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIPI2X0e3bIy5LG4MTNoHmQzx9jY8yBsNs2MeXHK41sVgcI-Uc6M_Zkwc","width":127,"height":84},"description":"15 Funniest LOLcats Ever (LOLcats) - ODDEE","parentPage":"http://www.oddee.com/item_97873.aspx"},{"type":"image/jpeg","width":499,"height":666,"size":40167,"url":"http://www.exisle.net/mb/uploads/monthly_11_2010/post-4397-0-20153800-1290658234.jpg","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hoZX4Pozb-SuoaHq6PskbfTyTVa6qK0Q44okX3Q9i9dYF8MkYG5zRaTc","width":103,"height":138},"description":"We can has LOLCATS faction? - Page 60 - The Beach - Ex Isle Forums","parentPage":"http://www.exisle.net/mb/index.php?/topic/49777-we-can-has-lolcats-faction/page__st__1180"}]

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", function(req, res){
    res.writeHead(200, {"content-type":"text/html"});
    res.end(`<h1>Image Search Abstraction Layer</h1>
    <p>This is my Image Search Abstraction Layer! You can use it to make
    searches for whatever images you wish, but the Google API that I'm using
    limits it to 100 searches a month.</p>
    <p>Seach using the path <code>/api/imagesearch/search term?offset=</code>,
    using whatever you want in place of "search term" and setting the offset
    to whatever value you want. Keep in mind that your search term must be before
    the question mark, or it won't work properly!</p>
    <p>In addition, you can look at the last five searches! Just go to the path
    <code>/api/latest/</code></p>`);
});

app.get("/api/latest/", function(req, res){
    res.writeHead(200, {"content-type":"application/json"});
    MongoClient.connect(dbsearches, function(err, db){
        if(err) throw err;
        db.collection("latest").createIndex({when: -1});
        db.collection("latest").find({},{_id:0}).sort({when:-1}).limit(5)
        .toArray(function(err, result){
            if (err) throw err;
            console.log("Request for latest entries.");
            res.end(JSON.stringify(result));
        });
    });
    //Queries the database and returns a list of results.
});

app.get("/api/imagesearch/*", function(req, res){
    res.writeHead(200, {"content-type":"application/json"});
    var offset = Number(queryString.parse(req.url, '?').offset);
    if(!offset || offset < 1 || !Number.isInteger(offset)) offset = 1;
    var searchTerm = req.url.split('/')[3].split("?")[0].replace(/%20/g, " ");
    var dateString = new Date().toISOString();
    
    var newEntry = {
        term: searchTerm,
        when: dateString
    };
    
    MongoClient.connect(dbsearches, function(err, db){
        if(err) throw err;
        db.collection("latest").insertOne(newEntry, function(err, result){
            if(err) throw err;
            console.log("New entry: " + JSON.stringify(newEntry));
            
            
            searchClient.search(searchTerm, {page:offset})
                .then(images => {
                    res.end(images);
                });
            
        });
    });
    
    
    //Inserts to the database, makes a request to the API, returns the results
});