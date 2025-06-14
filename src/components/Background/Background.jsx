
import "../Background/Background.css";

const BackgroundComponent = () => {
return (
    <>
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="../src/assets/videos/background1.mp4" type="video/mp4" />
        
      </video>
       <div className="video-overlay" />
    </>
); 
}; 


export default BackgroundComponent; 