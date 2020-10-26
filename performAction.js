console.log("working!")

/* want to find local storage and get the value of 'color-theme'*/
let colorTheme = localStorage.getItem('colorTheme')
/* first mode will be the pink background */
if(colorTheme == null){
  setThemeColor('kawaii')
}
else{ 
  setThemeColor(colorTheme)
}

/* We want to query the items, which are the theme dot buttons */
let colorThemeDots = document.getElementsByClassName('color-theme-dot')

for (var i=0; colorThemeDots.length > i; i++){
  /* for each iteration we want the item to get stored into the array  
  --> use 'addeventListener()' function */
  colorThemeDots[i].addEventListener('click', function(){
    /* query this out so we can actually select correct theme color
    --> take 'mode' and console it out */
    let mode = this.dataset.mode
    console.log('Theme Color Selected: ', mode)
    setThemeColor(mode)
  })
}

/* implement function that is triggered during each loop */ 
function setThemeColor(mode){
  if(mode == "kawaii"){
    document.getElementById('color-theme').href = 'default.css'
  }
  if(mode == "egg"){
    document.getElementById('color-theme').href = 'egg.css'
  }
  if(mode == "green"){
    document.getElementById('color-theme').href = 'plant.css'
  }
  if(mode == "night"){
    document.getElementById('color-theme').href = 'night.css'
  }

  /* Now we have gotten loca storage lets set the value */
  localStorage.setItem('colorTheme', mode)
}