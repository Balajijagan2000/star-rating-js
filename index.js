//Maximum star rendered on screen
//Can change the value on you own
const MAX_STARS = 5
const rating = document.querySelector('.rating')
const updateRating = (e) => {
    const ratingValue = Number(e.target.value)
    const overLay = document.querySelector('.overlay')
    //Eg: the value is 3.5 then what is the percent value of 
    //3.5 in 100%
    //3.5/5 * 100 = 70%
    let percent = Math.floor(ratingValue/MAX_STARS * 100)
    percent = 100 - percent
    if(ratingValue > MAX_STARS) {
        overLay.style.width='0%'
        e.target.value = 0
        alert('Value must be less than '+MAX_STARS)
        return
    } else {
        overLay.style.width=`${percent}%`
        return
        
    }
}
rating.addEventListener('input',updateRating)


//Method to render the stars based on the max_value
const generateStars = () => {
    const startContainer = document.querySelector('.rating-stars')
    

    for(let i=1;i<=MAX_STARS;i++) {
      
        startContainer.innerHTML += `<svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="yellow"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M12.8649 2.99628C12.4796 2.33213 11.5204 2.33213 11.1351 2.99628L8.42101 7.67359C8.23064 8.00168 7.90159 8.22557 7.52653 8.28222L2.44021 9.05044C1.58593 9.17947 1.28627 10.2581 1.95158 10.8093L5.74067 13.9485C6.09141 14.2391 6.25633 14.6975 6.17113 15.1449L5.17996 20.35C5.02327 21.1729 5.88706 21.8122 6.62821 21.4219L11.4176 18.9001C11.7821 18.7082 12.2178 18.7082 12.5824 18.9001L17.3718 21.4219C18.1129 21.8122 18.9767 21.1729 18.82 20.35L17.8289 15.1449C17.7437 14.6975 17.9086 14.2391 18.2593 13.9485L22.0484 10.8093C22.7137 10.2581 22.4141 9.17947 21.5598 9.05044L16.4735 8.28222C16.0984 8.22557 15.7694 8.00168 15.579 7.67359L12.8649 2.99628Z"
          fill="currentColor"
          style="fill:#FFC52F;"
        />
      </svg>`
    }

    const overLay = document.createElement('div')
    overLay.classList.add('overlay')
    startContainer.append(overLay)

}
//Calling the method to generate the stars
generateStars()

