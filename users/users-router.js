const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware.js')

const fs = require('fs'); 
const csv = require('csv-parser');


router.get('/', restricted,  (req, res) => { 
    Users.find()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/users get error: ', err)
        res.status(500).json({errorMessage: 'could not get users', err: err})
    })
})
router.post('/', restricted, (req, res) => { 
    Users.find()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/users get error: ', err)
        res.status(500).json({errorMessage: 'could not get users', err: err})
    })
})
router.get('/favorites', (req, res) => { 
    Users.findFavorites()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/users get error: ', err)
        res.status(500).json({errorMessage: 'could not get users', err: err})
    })
})
router.post('/:id/favorites/', (req, res) => { 
    // const id = req.params.id;
    Users.addFav(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/favorites err:', err)
        
            res.status(500).json({errorMessage:'could not get favorites', error: err})
       
    })
})
//--------------profile------------- addProfile
router.get('/profile', (req, res) => { 
    Users.findProfile()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/users get error: ', err)
        res.status(500).json({errorMessage: 'could not get users', err: err})
    })
})
router.post('/:id/profile', (req, res) => { 
    // const id = req.params.id;
    Users.addProfile(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/profile err:', err)
        
            res.status(500).json({errorMessage:'could not post profile', error: err})
       
    })
})

//--------------comment--------------
router.get('/comment', (req, res) => { 
    Users.findComment()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/users get error: ', err)
        res.status(500).json({errorMessage: 'could not get comment', err: err})
    })
})
router.post('/:id/comment', (req, res) => { 
    // const id = req.params.id;
    Users.addComment(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/profile err:', err)
        
            res.status(500).json({errorMessage:'could not post comment', error: err})
       
    })
})


//------------------Watched-------------

router.get('/watched', (req, res) => { 
    Users.findWatched()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/watched get error: ', err)
        res.status(500).json({errorMessage: 'could not get watched', err: err})
    })
})
router.post('/:id/watched', (req, res) => { 
    // const id = req.params.id;
    Users.addWatched(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/profile err:', err)
        
            res.status(500).json({errorMessage:'could not post comment', error: err})
       
    })
})


//------------------Ratings-------------

router.get('/ratings', (req, res) => { 
    Users.findRatings()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/ratings get error: ', err)
        res.status(500).json({errorMessage: 'could not get comment', err: err})
    })
})
router.post('/:id/ratings', (req, res) => { 
    // const id = req.params.id;
    Users.addRatings(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/ratings err:', err)
        
            res.status(500).json({errorMessage:'could not post rating', error: err})
       
    })
})

//------------------Diary-------------

router.get('/diary', (req, res) => { 
    Users.findDiary()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/diary get error: ', err)
        res.status(500).json({errorMessage: 'could not get comment', err: err})
    })
})
router.post('/:id/diary', (req, res) => { 
    // const id = req.params.id;
    Users.addDiary(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/diary err:', err)
        
            res.status(500).json({errorMessage:'could not post diary', error: err})
       
    })
})

//------------------Diary-------------

router.get('/reviews', (req, res) => { 
    Users.findReviews()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/reviews get error: ', err)
        res.status(500).json({errorMessage: 'could not get comment', err: err})
    })
})
router.post('/:id/reviews', (req, res) => { 
    // const id = req.params.id;
    console.log('req.params.id:', req.params.id)
    Users.addReviews(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/reviews err:', err)
        
            res.status(500).json({errorMessage:'could not post review', error: err})
       
    })
})

//------------------Watch List-------------

router.get('/watchlist', (req, res) => { 
    Users.findWatchList()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/watchlist get error: ', err)
        res.status(500).json({errorMessage: 'could not get comment', err: err})
    })
})
router.post('/:id/watchlist', (req, res) => { 
    // const id = req.params.id;
    Users.addWatchList(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/watchlist err:', err)
        
            res.status(500).json({errorMessage:'could not post watchlist', error: err})
       
    })
})

//-----------------getalldata-------------
router.get('/getalldata', (req, res) => { 
    Users.getalldata()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/getalldata get error: ', err)
        res.status(500).json({errorMessage: 'could not get all data', err: err})
    })
})
//--------------------------upload -------------------
const bp = require('body-parser')
router.post('/upload',  (req, res) => { 
    
    console.log(req.files.movies)
    // console.log(req.file.Name)
    // console.log(req.file.size)
    // this is the reviews file
    const dataFile1 = req.files.movies
   dataFile1.mv('/Users/thomaskatalenas/tjs_side_projects-02-20/groa-backend2/users/reviews.csv', function(err) {
        if (err)
              
        res.send('File uploaded!');
      });

      let results = [];
      const inputFilePath = '/Users/thomaskatalenas/tjs_side_projects-02-20/groa-backend2/users/reviews.csv'
      fs.createReadStream(inputFilePath)
        .pipe(csv())
        .on('data', function(data){
            try {
               
                // console.log(data)
                results.push(data);
                
                // console.log(data2)



            }
            catch(err) {
                //error handler
            }
        })
        .on('end', async function(){
            //some final operation
            // console.log(results);
            let results2 = results.map((x) => { 
                return {
                    user_id: 2,
                    Date: x.Date, 
                    Name: x.Name, 
                    Year: x.Year, 
                    LetterboxdURI: x['Letterboxd URI'],
                    Rating: x.Rating,
                    Rewatch: x.Rewatch,
                    Review: x.Review,
                    Tags: x.Tags,
                    Watched_date: x['Watched Date'],
                }
            }) 
            
            for(let i in results2){

        
                console.log(results2[i])
                await Users.addReviews(results2[i], "2")
                // .then(res => { 
                //     res.send({message: 'successfull file upload'})
                // }).catch(err => {
                //     res.send({error:'error console logging file.', message: err})
                // })
            }
            // console.log(results2);
        }); 
        
//     const dataFile = require('./reviews.json')
// /* function CSVToArray is sourced from https://www.bennadel.com/blog/1504-ask-ben-parsing-csv-strings-with-javascript-exec-regular-expression-command.htm
// */
//     function CSVToArray(strData, strDelimiter) {
// // Check to see if the delimiter is defined. If not,
// // then default to comma.
//     strDelimiter = (strDelimiter || ",");
//     // Create a regular expression to parse the CSV values.
//     var objPattern = new RegExp(
//         (
//         // Delimiters.
//         "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

//         // Quoted fields.
//         "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

//         // Standard fields.
//         "([^\"\\" + strDelimiter + "\\r\\n]*))"
//         ),
//         "gi"
//     );


//     // Create an array to hold our data. Give the array
//     // a default empty first row.
//     var arrData = [[]];

//     // Create an array to hold our individual pattern
//     // matching groups.
//     var arrMatches = null;


//     // Keep looping over the regular expression matches
//     // until we can no longer find a match.
//     while (arrMatches = objPattern.exec(strData)) {

//         // Get the delimiter that was found.
//         var strMatchedDelimiter = arrMatches[1];

//         // Check to see if the given delimiter has a length
//         // (is not the start of string) and if it matches
//         // field delimiter. If id does not, then we know
//         // that this delimiter is a row delimiter.
//         if (
//         strMatchedDelimiter.length &&
//         (strMatchedDelimiter != strDelimiter)
//         ) {

//         // Since we have reached a new row of data,
//         // add an empty row to our data array.
//         arrData.push([]);

//         }


//         // Now that we have our delimiter out of the way,
//         // let's check to see which kind of value we
//         // captured (quoted or unquoted).
//         if (arrMatches[2]) {

//         // We found a quoted value. When we capture
//         // this value, unescape any double quotes.
//         var strMatchedValue = arrMatches[2].replace(
//             new RegExp("\"\"", "g"),
//             "\""
//         );

//         } else {

//         // We found a non-quoted value.
//         var strMatchedValue = arrMatches[3];

//         }


//         // Now that we have our value string, let's add
//         // it to the data array.
//         arrData[arrData.length - 1].push(strMatchedValue);
//     }

//     // Return the parsed data.
//     return (arrData);
//     }

//     const fileArray = CSVToArray(dataFile.dataToClean)

//     let dsData = [];

//     // Still trying to find a better way for this
//     // but right now Nodejs does not use Object.fromEntries
//     fileArray.map((i, index) => {
//         console.log('fileArray: i: ', i)
//     dsData.push({
//         // ndex: index,
//         Date: i[0],
//         Name: i[1],
//         Year: i[2],
//         LetterboxdURI: i[3],
//         Rating: i[4],
//         Rewatch: i[5],
//         Review: i[6],
//         Tags: i[7],
//         Watched_date: i[8]
//     })
//     })
//     console.log("dsData: ", dsData)

//     // there's one array of undefined towards the end
//     // I don't know where it's coming from yet.
//     dsData.pop();

//     // holds functions to control Regex patterns
//     var utility = {
//         escapeQuotes: function(string) {
//             return string.replace(/"/g, '\\"');
//         },
//         unescapeQuotes: function(string) {
//             return string.replace(/\\"/g, '"');
//         },
//         removeNewLines: function(string) {
//         return string.replace(/\r?\n|\r/g, "");
//         }
//     };

//     let cleanedData = [];

//     dsData.map(i => {
//     // we can keep cleaning with regex expressions in here and updating the final object.
//     let cleanedReview = utility.removeNewLines(i.Review);
//         console.log("dsData: i: ", i)
//     updatedData = {
//         ...i,
//         Review: cleanedReview
//     }

//     cleanedData.push(updatedData)
//     })

//     console.log('cleanedData:', cleanedData)
//     //-----------------------------------------------------------
        
})
module.exports = router;