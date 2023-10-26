document.addEventListener('DOMContentLoaded',()=>{
//structure for the mock data
interface ProjectItem{
  title:string
  descriptions:string
  tag:string
  imgSrc:string
}

//Constant description to cut out repetition
const description="Eos qui ratione voluptatem suqui nesciunt.Neque porro quisquam dolorem ipsum quia"

//The actual Mock data
const mockProject:ProjectItem[]=[
  {
    imgSrc:"https://rb.gy/5ygcu",
    tag:"Education",
    title:"Introducting Coversational learning ipsum dolar",
    descriptions:description
  },
  {
    imgSrc:"https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg",
    tag:"Environment",
    title:"Content development for a sustainable future",
    descriptions:description
  },
  {
    imgSrc:"https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg",
    tag:"Health care",
    title:"Large scale trainin for healthcare professionals",
    descriptions:description
  },
  {
    imgSrc:"https://rb.gy/5ygcu",
    tag:"Education",
    title:"Introducting Coversational learning ipsum dolar",
    descriptions:description
  },
  {
    imgSrc:"https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg",
    tag:"Environment",
    title:"Content development for a sustainable future",
    descriptions:description
  },
  {
    imgSrc:"https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg",
    tag:"Health care",
    title:"Large scale training for healthcare professionals",
    descriptions:description
  },
  {
    imgSrc:"https://rb.gy/5ygcu",
    tag:"Education",
    title:"Introducting Coversational learning ipsum dolar",
    descriptions:description
  },
  {
    imgSrc:"https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg",
    tag:"Environment",
    title:"Content development for a sustainable future",
    descriptions:description
  },
  {
    imgSrc:"https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg",
    tag:"Health care",
    title:"Large scale training for healthcare professionals",
    descriptions:description
  },
]

const projectsDisplay=document.getElementById("projects-display") as HTMLDivElement
mockProject.forEach((project)=>{
  const card = document.createElement("div");
    card.className = "project";

    const img = document.createElement("img");
    img.src = project.imgSrc;
    img.alt = project.title;

    const h2 = document.createElement("h2");
    h2.textContent = project.title;

    const p = document.createElement("p");
    p.textContent = project.descriptions;

    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = project.tag;
    card.append(img,span, h2, p);
    projectsDisplay.appendChild(card);
})
const leftArrow=document.getElementById("left-arrow")
const rightArrow=document.getElementById("right-arrow")

let scrollPosition=0;
const imageWidth=300;
leftArrow?.addEventListener('click',()=>{
 scrollPosition-=imageWidth
 if(scrollPosition<0){
  scrollPosition=0
 }
 projectsDisplay.scroll({
  left:scrollPosition,
  behavior:"smooth"
 })
})
rightArrow?.addEventListener("click", () => {
  scrollPosition += imageWidth;
  if (scrollPosition > projectsDisplay.scrollWidth - projectsDisplay.clientWidth) {
    scrollPosition = projectsDisplay.scrollWidth - projectsDisplay.clientWidth;
  }
  projectsDisplay.scroll({
    left: scrollPosition,
    behavior: "smooth",
  });
});


})