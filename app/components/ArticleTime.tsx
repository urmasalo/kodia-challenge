"use client";

import { useTimeAgo } from "@/utils/timeAgo";
import { JSX } from "react";

export default function ArticleTime({ publishedAt, author }: { publishedAt: string, author: string | null }): JSX.Element {
    const timeAgoText = useTimeAgo(publishedAt);

    return (
        <>
            {timeAgoText} {author ? `• By ${author}` : ''}
        </>
    );
}