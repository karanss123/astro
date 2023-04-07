// let signupbtn=document.getElementById(signupbtn)
// let signinbtn=document.getElementById(signinbtn)
// let namefeild=document.getElementById(namefeild)
// let title=document.getElementById(title)

// signinbtn.onclick=function(){
// 	namefeild.style.maxHeight="0";
// 	title.innerHTML="sign In";
	
// 	signupbtn.classList.add("disable");
// 	signinbtn.classList.remove("disable");
// }


const cardData = [
    {
      image: "assets/aries.png",
      title: "Card Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#"
    },
    {
      image: "assets/taurus.png",
      title: "Card Title 2",
      description: "Nulla gravida quam ut purus varius maximus.",
      link: "#"
    },
    {
      image: "assets/gemini.png",
      title: "Card Title 3",
      description: "Duis dignissim massa nec metus lacinia lobortis.",
      link: "#"
    },
    {
      image: "assets/cancer.png",
      title: "Card Title 3",
      description: "Duis dignissim massa nec metus lacinia lobortis.",
      link: "#"
    },
    {
      image: "assets/leo.png",
      title: "Card Title 3",
      description: "Duis dignissim massa nec metus lacinia lobortis.",
      link: "#"
    },
    {
      image: "assets/virgo.png",
      title: "Card Title 3",
      description: "Duis dignissim massa nec metus lacinia lobortis.",
      link: "#"
    },
    {
      image: "assets/libra.png",
      title: "Card Title 3",
      description: "Duis dignissim massa nec metus lacinia lobortis.",
      link: "#"
    },
    {
      image: "assets/scorpio.png",
      title: "Card Title 3",
      description: "Duis dignissim massa nec metus lacinia lobortis.",
      link: "#"
    },
    {
      image: "assets/sagittarius.png",
      title: "Card Title 3",
      description: "Duis dignissim massa nec metus lacinia lobortis.",
      link: "#"
    },
    {
      image: "assets/capricorn.png",
      title: "Card Title 3",
      description: "Duis dignissim massa nec metus lacinia lobortis.",
      link: "#"
    },
    {
      image: "assets/aquarius.png",
      title: "Card Title 3",
      description: "Duis dignissim massa nec metus lacinia lobortis.",
      link: "#"
    },
    {
      image: "assets/pisces.png",
      title: "Card Title 3",
      description: "Duis dignissim massa nec metus lacinia lobortis.",
      link: "#"
    },
    // add more data here
  ];
  
  const cardSection = document.querySelector(".card-section");
  
  for (let i = 0; i < cardData.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    cardImage.style.backgroundImage = `url(${cardData[i].image})`;
    card.appendChild(cardImage);
  
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    card.appendChild(cardContent);
  
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = cardData[i].title;
    cardContent.appendChild(cardTitle);
  
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description");
    cardDescription.textContent = cardData[i].description;
    cardContent.appendChild(cardDescription);
  
    // const cardLink = document.createElement("a");
    // cardLink.classList.add("card-link");
    // cardLink.textContent = "Learn More";
    // cardLink.href = cardData[i].link;
    // cardContent.appendChild(cardLink);
  
    cardSection.appendChild(card);
  }
  