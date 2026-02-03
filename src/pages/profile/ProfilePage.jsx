import { ShieldCheck } from "lucide-react";
import FormProfile from "../../components/profile/profile.form";
import '../../styles/profile.css';

const ProfilePage = () => {
    return (
        <div className="recipe-list-page child">
            <div className="page-title">
                <ShieldCheck color="rgb(243, 167, 54)" size={28} />
                <h2>Personal Profile</h2>
            </div>
            <FormProfile />
        </div>
    )
}

export default ProfilePage;