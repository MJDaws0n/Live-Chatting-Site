Live Chat Application
=====================

This is an open-source live chat application that allows users to communicate in real-time. It features a responsive design, theme toggling, and WebSocket integration for seamless messaging. It is very basic and has no system to save the messages.

An example is at [https://mjdawson.net/chat](https://mjdawson.net/chat)

Features
--------

*   **Real-time Messaging:** Communicate instantly with other users.
*   **Theme Toggling:** Switch between light and dark themes.
*   **Responsive Design:** Works on various screen sizes.
*   **WebSocket Communication:** Ensures fast and reliable message transmission.

Installation
------------

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/MJDaws0n/Live-Chatting-Site.git
    cd live-chat
    ```

*   **Install dependencies:**
    ```bash
    npm install
    ```
    
*   **Set up SSL certificates:**
    
    *   Place your SSL certificate and key files in the `/home/container/certs/` directory.
    *   Update the paths in `server.js` if necessary.
*   **Set up the domain:**
   
    *   Update the domain and port in `server.js`.
*   **Start the server:**
    
    ```bash
    node server.js
    ```
    

Usage
-----

1.  Open your browser and navigate to the website hosting the site (must have SSL - can be through GitHub Pages).
2.  Use the input box to type and send messages.
3.  Toggle themes using the "Toggle Theme" button.

Files Overview
--------------

*   **index.html:** Main structure of the chat application.
*   **site.js:** Handles theme toggling, message sending, and WebSocket interaction.
*   **connection.js:** Defines the `Chat` class for managing WebSocket connections.
*   **site.css:** Styles for the application, including light and dark themes.
*   **server.js:** Node.js server setup for handling WebSocket connections.

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.
