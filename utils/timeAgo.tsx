import { useEffect, useState } from 'react';

export function useTimeAgo(timestamp: string) {
    const [timeAgoText, setTimeAgoText] = useState('');

    useEffect(() => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

        const minutes = Math.floor(diffInSeconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        let result = '';
        if (diffInSeconds < 60) result = "A moment ago";
        else if (minutes < 60) result = rtf.format(-minutes, "minute");
        else if (hours < 24) result = rtf.format(-hours, "hour");
        else if (days === 1) result = "Yesterday";
        else if (days < 30) result = rtf.format(-days, "day");
        else if (months === 1) result = "Last month";
        else if (months < 12) result = rtf.format(-months, "month");
        else if (years === 1) result = "Last year";
        else result = rtf.format(-years, "year");

        setTimeAgoText(result);

        return;
    }, [timestamp]);

    return timeAgoText;
}
