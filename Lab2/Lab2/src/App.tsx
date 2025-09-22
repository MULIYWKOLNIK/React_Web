import Profile from "./Profile";
import "./App.css";

function App() {
    const users = [
        {
            name: "Leanne Graham",
            role: "Software Engineer",
            avatarUrl: "https://www.svgrepo.com/show/13644/avatar.svg",
        },
        {
            name: "Ervin Howell",
            role: "UI/UX Designer",
            avatarUrl: "https://www.svgrepo.com/show/13644/avatar.svg",
        },
        {
            name: "Clementine Bauch",
            role: "Project Manager",
            avatarUrl: "https://www.svgrepo.com/show/13644/avatar.svg",
        },
        {
            name: "Patricia Lebsack",
            role: "QA Engineer",
            avatarUrl: "https://www.svgrepo.com/show/13644/avatar.svg",
        },
        {
            name: "Chelsey Dietrich",
            role: "DevOps Specialist",
            avatarUrl: "https://www.svgrepo.com/show/13644/avatar.svg",
        },
    ];

    return (
        <div className="app">
            <h2>User Profiles</h2>
            <div className="profiles-grid">
                {users.map((user, index) => (
                    <Profile
                        key={index}
                        name={user.name}
                        role={user.role}
                        avatarUrl={user.avatarUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
