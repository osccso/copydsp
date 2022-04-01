import React from "react";
import { SessionContext } from "../useContext/SessionContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";

const RelatedTopics = () => {
    const { sessions, setSessions } = useContext(SessionContext);

    return (
        <div>
            Topics in the section bellow
            <ul>
                <li>{sessions.description}</li>
                <li>{sessions.primary_topic}</li>
                <Button
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() =>
                        setSessions({
                            description:
                                "Revolution around the world and so on",
                            primary_topic: "Politics",
                        })
                    }
                >
                    Change Topic
                </Button>
            </ul>
        </div>
    );
};

export default RelatedTopics;
