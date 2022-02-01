import './App.css';
import Profile from './profile/Profile';

function App() {
  let fullName= "Radhia Mouna Sellami";
  let bio="I learned Automation and Industrial Computing & a Fullstack JS. I will be able to develop both front-end and back-end web applications. I have a dual skills in programing / electric / electronic / automation and I realy love programming";
  let profession="Senior Technician in Automation and Industrial Computing & I’ll be a super web developer";
  const handleName=(fullName)=>alert({fullName})
  return (
    <div className="App">
      <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}/>
    </div>
  );
}

export default App;