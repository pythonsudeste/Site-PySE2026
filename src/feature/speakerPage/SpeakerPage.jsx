import { useParams } from "react-router-dom"
import AllActivityListConfig from "../../../config/AllActivityListConfig.yaml?raw";
import { parse } from "yaml"; 
import "./SpeakerPage.css"

const AllActivityList = parse(AllActivityListConfig);
const AllActivity = AllActivityList.ActivityList;

export const SpeakerPage = () => {
    const { id } = useParams();
    console.log(id);

    const speaker = AllActivity.filter(activity => activity.id == id)[0];
    console.log(speaker.speaker)
    return (
        <section className="SpeakerPage">
            <h2>{speaker.title}</h2>
            <h4>{speaker.type}</h4>
            <p>{speaker.description}</p>
            {speaker.speaker.map((speaker) => (
                <div>
                    <img 
                        src={speaker.avatar}
                        alt={`Foto de ${speaker.name}`}
                    />
                    <h3>{speaker.name}</h3>
                    <p>{speaker.biography}</p>
                </div>
            ))}
        </section>
    )
}