function click_callback(e) {
    alert(e.latLng.toString());
  }
map.addListener('click', click_callback);
