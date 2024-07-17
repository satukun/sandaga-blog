import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";


const ProfileDetails = () => {
    return (
        <section className="profile-details">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p>Here is a detailed introduction about myself...</p>
            <Skills/>
            <Education/>
            <Experience/>


        </section>
    );
}

export default ProfileDetails;