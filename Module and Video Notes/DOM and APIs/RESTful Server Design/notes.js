/* REST & RESTful APIs

REST stands for representational state transfer; allows for the server database client all to fx independently; allows us to manage, maintain, scale those things to improve design of app

The client & server are separated in a RESTful API. Imagine lots of clients but the users don't do all that much. The app runs on the client, and there's a lot of user traffic on the client, but the server isn't seeing much traffic. On the other hand, the stock market is busier and bigger on the server side as opposed to the client side. 

- Statelessness: a RESTful API does not keep track of the users that are logged in. Statelessness gives the client a token, anytime you want to do something that is otherwise "protected", send the session token with that request. Kind of like a bracelet that you'd wear to go into a bar or festival. etc. so if there's that token/bracelet, the server/bouncer of the club can identify approved users. Tokens often have duration/expiration for security etc

- RESTful APIs are cache-able. When you send info to the client, the client can avoid another network request if something hasn't changed. so if a user wants to repeat an action, say viewing a friend's picture on their FB, the client doesnt have to re-send a whole new network request bc all that info has been cached/saved in a sense

- Uniform interface: URLs may be similar between 2 actions you are trying to do. If you want to see all your friends' fb posts and then you also want to create a new post yourself, and the 2 urls are identical except for the last word for example (like say www.fb.com/posts/friends and www.fb.com/posts/create); the structure of the cxn pt to the server is the same b/c the commonality is the "posts" in the url

-layered system: a way to stratify/divide and conquer tasks that restful apis try to accomplish. 3 diff big tasks can be split amongst 3 servers. 1 server for FB logins/logouts in Indy. another server for all the user posts. a third server is all users pics. they can all be disconnected. the server can exist as mult pieces. as the # of things a user can do/the complexity increases, the network requests increase, so by breaking up the server into more manageable pieces to handle the many more requests, you increase the efficiency & ability of the app/client functionality 