"use client";

import { Button } from "@/components/Button";
import { useLocalStorage } from "@react-hooks-library/core";
import { ChangeEvent, useState } from "react";

export default function Settings() {
    const [apiKeyLS, setApiKeyLS] = useLocalStorage<string>("apiKey", "");
    const [apiKey, setApiKey] = useState<string>("");

    const onTokenChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setApiKey(e.target.value);
    };

    const handleSubmit = () => {
        setApiKeyLS(apiKey);
    };

    return (
        <div className="flex flex-col h-screen">
            <h1 className="text-xl pt-3 pb-2">Settings</h1>

            <label>OpenAI API key</label>
            <textarea
                title="OpenAI API key"
                defaultValue={apiKeyLS}
                placeholder="sk-..."
                className="resize-none w-full bg-transparent border border-1 p-2 my-2 h-[100px]"
                onChange={onTokenChange}
            />

            <Button label="Save" onClick={handleSubmit} />
        </div>
    );
}