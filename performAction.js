console.log("working!")

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
  })
}