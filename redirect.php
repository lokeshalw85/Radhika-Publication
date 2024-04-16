<?php
include_once('booklist.php');

$request_uri = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$url_components = parse_url($request_uri);
$bookSlug = null;
if(isset($url_components['query']) && !empty($url_components['query'])) {
    parse_str($url_components['query'], $query);
    if(isset($query['book']) && !empty($query['book'])) {
        $bookSlug = $query['book'];
    }
}

//https://www.youtube.com/playlist?list=PLc5KiSbQAu16X_MqKo_K8KKDtwgkxintQ
$youtube_playlist_baseurl = "https://www.youtube.com/playlist?list=";

$playlist_code = null;
$request_url = $channel_url = 'https://www.youtube.com/@GayatriPublication/playlists';
$playlist_title = 'Gayatri Publication';
$redirect_url = 'N/A';

$bookList = booklist();
$shortcode = null;
if(isset($bookList[$bookSlug]) && !empty($bookList[$bookSlug])){
    $playlist_code = $bookList[$bookSlug]['list_code'] ?? null;
    $playlist_title = $bookList[$bookSlug]['name'] ?? 'N/A';
    $redirect_url =  $bookList[$bookSlug]['url'] ?? null;
    $shortcode = $bookList[$bookSlug]['shortcode'] ?? null;
}

if($shortcode) {
  $request_url =  $shortcode;
} else {
  $request_url = ($playlist_code != null)?$youtube_playlist_baseurl.$playlist_code:$channel_url;
}

?>




<!DOCTYPE html>
<html>
<head>
<title>Welcome To Radhika Publication Youtube Channel</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style type="text/css">
body {
  /*background: linear-gradient(90deg, white, gray);*/
  background-color: #eee;
}

body, h1, p {
  font-family: "Helvetica Neue", "Segoe UI", Segoe, Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: normal;
  margin: 0;
  padding: 0;
  text-align: center;
}

.container {
  margin-left:  auto;
  margin-right:  auto;
  margin-top: 177px;
  max-width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
}

.row:before, .row:after {
  display: table;
  content: " ";
}

h1 {
  font-size: 48px;
  font-weight: 300;
  margin: 0 0 20px 0;
}

.lead {
  font-size: 21px;
  font-weight: 200;
  margin-bottom: 20px;
}

p {
  margin: 0 0 10px;
}

a {
  color: #3282e6;
  text-decoration: none;
}
</style>
<script>
    window.location.href= "<?php echo $request_url; ?>"
</script>
</head>

<body>
<div class="container text-center" id="error">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
        <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
    </svg>
    <div class="row">
        <div class="col-md-12">
        <div class="main-icon text-success"><span class="uxicon uxicon-clock-refresh"></span></div>
        <h1>Wait...!! you are redirecting <b><?php echo $playlist_title; ?></b> playlist.</h1>
        <p><?php echo $redirect_url; ?></p>
        </div>
    </div>
</div>
</body>
</html>
