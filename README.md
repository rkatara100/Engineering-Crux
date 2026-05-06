Before coming to the Topic directly,  Understand why it is needed 

Webpack and RollUp  these are Bundler 
so what is Bundler :
 Bundlers are tools to combine multiple Javascript files into a single file called bundle

 What problem it solved ?
 When a web page loads it basically make seperate each Http request for every javascript file referenced in the Html page
 to fetch the data from server.

without bundler so many http request, more load on server so it make page load slow

How Bundler solve:
  we get a single js File so it eventually make a single Http request to fetch the entire codebase

  Another useCase of Bundler:
   It automatically removes the deadcode it bundle which are in use
  
 
 
 


With Tree Shaking 
 <img width="1919" height="1071" alt="Screenshot 2026-05-06 122704" src="https://github.com/user-attachments/assets/8021c8c2-d6fd-4da4-bd04-e6fb3a9df8e7" />


Without Tree Shaking
<img width="1919" height="1071" alt="Screenshot 2026-05-06 122704" src="https://github.com/user-attachments/assets/a05d6f2f-a829-4811-bbdd-c1899e9d8701" />
