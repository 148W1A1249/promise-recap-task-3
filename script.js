getBooks();
getMovies();
async function getBooks(){
    // const token = "kALt4KGRAWaBCVs67cGv";
    try{
        const result = await fetch(`https://the-one-api.dev/v2/book`,
        {
            method: "GET",
            // headers: { Authorization: "Bearer " +token},
        }
        );
        const data = await result.json();
        console.log("book:")
        console.log(data)
    } catch (error) {
        console.log(error);
      }
}
async function getMovies(){
    const token = "kALt4KGRAWaBCVs67cGv";
    try{
        const result = await fetch(`https://the-one-api.dev/v2/movie`,
        {
            method: "GET",
            headers: { Authorization: "Bearer " +token},
        }
        );
        const data = await result.json();
        console.log("Movies:")
        console.log(data)
    } catch (error) {
        console.log(error);
      }
}
getCharacter();
async function getCharacter(){
    const token = "kALt4KGRAWaBCVs67cGv";
    try{
        const result = await fetch(`https://the-one-api.dev/v2/character`,
        {
            method: "GET",
            headers: { Authorization: "Bearer " +token},
        }
        );
        const data = await result.json();
        console.log("Character:")
        console.log(data)
    } catch (error) {
        console.log(error);
      }
}
getQuote();
async function getQuote(){
    const token = "kALt4KGRAWaBCVs67cGv";
    try{
        const result = await fetch(`https://the-one-api.dev/v2/quote`,
        {
            method: "GET",
            headers: { Authorization: "Bearer " +token},
        }
        );
        const data = await result.json();
        console.log("Quote:")
        console.log(data)
    } catch (error) {
        console.log(error);
      }
}
getChapter();
async function getChapter(){
    const token = "kALt4KGRAWaBCVs67cGv";
    try{
        const result = await fetch(`https://the-one-api.dev/v2/chapter`,
        {
            method: "GET",
            headers: { Authorization: "Bearer " +token},
        }
        );
        const data = await result.json();
        console.log("Chapter:")
        console.log(data)
    } catch (error) {
        console.log(error);
      }
}