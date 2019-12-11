# JSD-Project2

[Try It Out](https://noraaltwaijri.github.io/JSD-Project2/)

## Table of Contents

* [Introduction](#Introduction)
* [Usage](#usage)
* [Future Planning](#Future-Planning)


## Introduction

Photo Gallery is a website that allows you to search for photos.

It is my second project in JSD with GA, It's all about the use of an API data in a pages using JavaScript jQuery JSON libraries.

This project consists of  one html page `index.html`, one file for styling `style.css` and two javascript files `script.js` for connecting to the API & parsing its data and `choices.js` for handling search events.

## Usage

- **jQuery**:
  Is a javaScript library. To setup, your code with jQuery library put this code in the `<head>` of HTML page.
  ```
  <script src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
  ```
  [Learn More](https://jquery.com)

- **Bootstrap**:
  Is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. To setup, your code with boostrap library put this code in the `<head>` of HTML page.
  ```
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  ```
  [Learn More](https://getbootstrap.com)

- **Google Fonts**:
  Setup your code with Google Fonts API by putting this code in the `<head>` of HTML page.
  ```
  <link href="https://fonts.googleapis.com/css?family=Font+Name" rel="stylesheet">
  ```
  I replaced `Font+Name` with [Poppins] which is the font I used in the project.

  [Learn More](https://fonts.google.com)
    
- **Pixabay API**:
    Pixabay.com is an international, copyleft and free-to-use website for sharing photos, illustrations, vector graphics, and film footage. 
    ```
    callAjax: function(request) {
            var self = this;
            $.ajax({
                url: "https://pixabay.com/api/?username=mjweaver01&key="+ key +"&q=" + request + "&image_type=photo",
                success: function(response) {
                    self.parseResponse(response);
                },
                error: function(response) {
                    console.log(response);
                }
            })
        }
    ```
    [Learn More](https://pixabay.com/api/docs/)

## Future Planning

The project can expand to include the bwlow points:
- Add a search bar in the results page.
