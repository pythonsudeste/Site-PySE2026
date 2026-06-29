import AllActivityListConfig from "../../../config/AllActivityListConfig.yaml?raw";
import { parse } from "yaml"; 
import "./styles/programationPanel.css";
import { useState } from "react";

const AllActivityList = parse(AllActivityListConfig);
const AllActivity = AllActivityList.ActivityList;

export const ProgramationPanel = () => {
    const [ selectedDate , setSelectedDate ] = useState("");
    const datas = [...new Set(AllActivity.map(activity => activity.data))];
    console.log(datas)
    return (
        <section className="ProgramationPanel">
            <div className="ProgramationPanel-Container">
                <div className="ProgramationPanel-Container-datas">
                    <h3>Selecione a data para ver a programação do dia:</h3>
                    <div className="ProgramationPanel-Container-datas-item">
                        {datas.map((data) => (
                                <button
                                    onClick={() => setSelectedDate(data)}
                                    key={data}
                                >
                                    {data}
                                </button>
                        ))}
                    </div>
                </div>
                {AllActivity
                    .filter(activity => activity.data === selectedDate)
                    .map((activity) => (
                        activity.type === "especial" ? (
                            <div key={activity.id} className="ProgramationPanel-especial-card">
                                <h3>{activity.title}</h3>
                                <h4>{activity.hour}</h4>
                            </div>
                        )
                        :
                        activity.type === "talk" || "tutorial" ? (
                            <div key={activity.id} className="ProgramationPanel-talktutorial-card">
                                <div>
                                    <h3>{activity.hour}</h3>
                                    <h3>{activity.local}</h3>
                                </div>
                                <h2>{activity.title}</h2>
                                {activity.speaker.map(speaker => (
                                    <div>
                                        <h3>{speaker.name}</h3>
                                        <img 
                                            src={speaker.avatar} 
                                            alt={`foto de ${speaker.name}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        )
                        :
                        null
                ))}
            </div>
        </section>
    )
};