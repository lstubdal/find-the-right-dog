# Find the right dog (dobreed selector)

 URL: https://find-the-right-dog.vercel.app/

 A webiste to help users find a suitable dogbreed, as well information about what to think about when getting a dog.
 The user can answer 10 questions and based on the answer, dogbreeds will be filtered after their expectaions and lifestyle.
 User can also scroll through all the dogbreeds, and click on each breed to get more information about a specific breed.
 
 ## Changes (commits) after deadline due to deployment crashes:
   1. Error handling for when resultpage (results.js) is rendered without users input from quiz, to avoid crashing. Added conditional rendering if array is empty.
   2. Error handling if there are no objects (dogs) left while filtering. Temporarly solution => restore array again with fetched dogs from api.
   3. Fix missing values/undefined when filtering that causes crash.
  
    ### Files that were modified:
     - results.js => reason 1 & 2 
     - Results.module.css => reason 1 => to make error handling slightly userfriendly
     - quizSlice.js => reason 1 => remove temp array with predefined answers 
     - filterFunctions.js => reason 2 => ( remove `||` operator in switch case )

 ## Sources:
  For access to all dogbreed names: https://thedogapi.com/ 
  API to get dogbreed information: https://api-ninjas.com/api/dogs
  Information about getting a dog: https://www.petspyjamas.com/blog/10-things-you-need-to-know-before-getting-a-dog/ 
  Help/insporation with code: https://openai.com/blog/chatgpt & https://stackoverflow.com/

## Future development (if I had more time)
  - proper error handling if no dogs left in filtered array
  - error handeling if user selects more than 1 option
  - let user search after specific breed at 'all breeds' page
  - let user filter in a sidebar at 'all breeds' page
  - show results of other dogbreeds that was close to users selections
  - show only 20 dogs at the time per page
  - Update to Image tags instead of img
 

