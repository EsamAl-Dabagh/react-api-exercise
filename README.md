## React API Exercise

##### What is it? 
A simple exercise in making calls to an API with React. 

Use `fetch` to make a GET request to [NewsAPI](https://newsapi.org) to retrieve a list of news sources. The user can select one of the sources to view their news items. 

##### Domain Model

```
╔═════════════╗
║ <App />     ║
║             ║
║ GET sources ║
╚═════════════╝
      |
      |         ╔════════════════════════════════╗
      |         ║ <Select />                     ║
      |________ ║                                ║
      |         ║ Allow user to choose a source. ║
      |         ╚════════════════════════════════╝
      |
      |         ╔══════════════════════╗
      |         ║ <News />             ║      ╔══════════════════════════════╗
      |________ ║                      ║ ____ ║ <NewSingle />                ║
                ║ GET news from source ║      ║                              ║
                ╚══════════════════════╝      ║ Display news item as a card  ║
                                              ║ with link to full article.   ║
                                              ╚══════════════════════════════╝
```

#### How to Run
1. Clone repo and navigate to project folder: 
```
git clone [URL]
cd react-news
```
2. Install dependencies using `npm install`
3. Signup for an API key from [NewsAPI](https://newsapi.org).
4. Create a `.env` file in the root of the directory. Save your API key in here, like so:
```
REACT_APP_API_NEWSAPI_KEY=your_key_goes_here
```
> This environment variable is then accessed in the `News` component by using `process.env.REACT_APP_API_NEWSAPI_KEY`. 

5. Launch the site using `npm start`

