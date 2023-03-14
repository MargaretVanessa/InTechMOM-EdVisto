function loadfileVideo(input_id, video_id) {
    var fileInput = document.getElementById(input_id);
    var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
    document.getElementById(video_id).src = fileUrl;
  }