# Local Storage vs Session Storage vs Cookie

✅ Local Storage

: localStorage is a way to store data on the client’s computer. It allows the saving of key/value pairs in a web browser and it stores data with no expiration date. localStorage can only be accessed via JavaScript, and HTML5. However, the user has the ability to clear the browser data/cache to erase all localStorage data.

👍 Pros

- stores data with no expiration date

- storage limit is about 5MB

- data is never transferred to the server

👎 Cons

- plaintext, hence not secure by design

- limited to string data, hence need to be serialized

- can only be read on client-side

✅ Session Storage

: The difference between sessionStorage and localStorage is that localStorage data does not expire, whereas sessionStorage data is cleared when the page session ends.

: Stored the memory in the server

👍 Pros

- stores data only for a session, meaning that the data is stored until the browser (or tab) is closed

- storage limit is about 5-10MB

- data is never transferred to the server

👎 Cons

- can only be read on client-side

✅ Cookie

: The data is sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) - increasing the amount of traffic between client and server.

: Stored in the memory or hard disk designated by the client's web browser

👍 Pros

- have a degree of protection applied from security risks

- Cookies expire based on the setting and working per tab and window

- Both clients and servers can read and write the cookies

👎 Cons

- The storage capacity of Cookies is 4KB
