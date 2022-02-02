import './App.css';
import Profile from './profile/Profile';
import ProfilePhoto from './res/ProfilePhoto.jpg';


function App() {
  let fullName= "Radhia Mouna Sellami";
  let bio="I learned Automation and Industrial Computing & a Fullstack JS. I will be able to develop both front-end and back-end web applications. I have a dual skills in programing / electric / electronic / automation and I realy love programming";
  let profession="Senior Technician in Automation and Industrial Computing & I’ll be a super web developer";
  const handleName=()=>alert(`Hello and welcome to know more details about ${fullName}`)
  return (
    <div className="App">
      <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
        <img style={{marginTop:"3%", width:"26%", borderRadius:"50%"}} src={ProfilePhoto} alt='My Profile'/>
      </Profile>
    </div>
  );
}

export default App;