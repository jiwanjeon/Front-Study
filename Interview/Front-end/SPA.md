# SPA

- What is SPA?<br>
  : Single Page Application is a web application that does not use the default method of loading new pages completely. Instead, it takes new data from the webserver by interacting with the web browser and refreshes the current web page.

- Multiple page applications

![alt MPA](https://www.itechart.com/media/images/The_Pros__Cons_of_Single_Page_Applications-01_.width-800.png)

: Constantly sending and receiving HTML download requests back-and-forth between the server. This method is extremely taxing and can cause slow page loading times.

- Single Page Applications

![alt SPA](https://www.itechart.com/media/images/The_Pros__Cons_of_Single_Page_Applications-02_.width-800.png)

# Advantage

a) Speed: able to load new information into a single page upon request as opposed to having to link to several other HTML pages within the architecture of a site.

b) Caching capabilities: SPAs only have to request data from the server one time, upon initial download. Then the site can be accessed even if there is a poor internet connection or if the user is offline.

c) UX: Many users complain about having to click through multiple links and menus to get the information they are looking for. With SPAs, all the user has to do is scroll.

# Disadvantage

a) Search engine optimization: Because search engine optimization depends on HTML content, the fewer pages a site has with unique URLs, headings and keywords, the lower the site is going to rank. Having just one single page is a detriment to search optimization.

b) Website stats: how a single page application will affect your website statistics. You won’t be able to tell which page or content is most popular, given the fact that you only have one page. Google Analytics, for example, records data from various pages being downloaded on a site. If you want to track activity on a SPA, you’ll need to create your own analytics solution.

# Then, How to deal with SPA disadvantage?

==> Next.js

Using Next.js, the first page is rendered by the backend server to receive html filled with data rather than empty html to solve the search optimization problem.

After that, the CSR method is applied from the next page to update only the necessary data part, thereby reducing the load on the server.

The functions of Next.js can be implemented with React, but there is a learning curve.
