import kitty from "../img/kitty.jpg";
import "./About.css";

function About() {
  return (
    <>
      <div className="aboutMeContainer"> 
        <div>
          <img className="profile-pic" src={kitty} alt="Kitty" />
        </div>
        <div className="aboutMeParagraph">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut accusantium eum voluptatibus voluptate dolores ipsum reprehenderit mollitia cum, quam provident molestias beatae praesentium saepe est, ullam non facilis optio!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt, aut ducimus maiores numquam sequi id voluptates facilis doloremque maxime corrupti quibusdam ullam suscipit, earum possimus tempore in reiciendis. Tempora!</p>
          <br />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt, aut ducimus maiores numquam sequi id voluptates facilis doloremque maxime corrupti quibusdam ullam suscipit, earum possimus tempore in reiciendis. Tempora!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt, aut ducimus maiores numquam sequi id voluptates facilis doloremque maxime corrupti quibusdam ullam suscipit, earum possimus tempore in reiciendis. Tempora!</p>
        </div>
      </div>
    </>
  );
}

export default About;